import argparse
import json
import shutil
import subprocess
import sys
from pathlib import Path

import pymupdf
from pypdf import PdfReader


def resolve_tesseract(explicit_path: str | None) -> str:
    executable = explicit_path or shutil.which("tesseract")
    if not executable:
        default_windows_path = Path(r"C:\Program Files\Tesseract-OCR\tesseract.exe")
        if default_windows_path.is_file():
            executable = str(default_windows_path)
    if not executable:
        raise FileNotFoundError(
            "Tesseract was not found. Install Tesseract OCR and the French "
            "language data, or pass --tesseract and --tessdata."
        )
    return executable


def ocr_page(page: pymupdf.Page, executable: str, language: str, tessdata: Path, dpi: int) -> str:
    pixmap = page.get_pixmap(dpi=dpi, colorspace=pymupdf.csRGB, alpha=False)
    command = [
        executable,
        "stdin",
        "stdout",
        "-l",
        language,
        "--psm",
        "3",
        "--tessdata-dir",
        str(tessdata),
    ]
    result = subprocess.run(
        command,
        input=pixmap.tobytes("png"),
        capture_output=True,
        check=False,
    )
    if result.returncode:
        message = result.stderr.decode("utf-8", errors="replace").strip()
        raise RuntimeError(f"Tesseract failed on page {page.number + 1}: {message}")
    return result.stdout.decode("utf-8", errors="replace").strip()


def extract_pdf(
    pdf_path: Path,
    output_path: Path,
    executable: str,
    language: str,
    tessdata: Path,
    dpi: int,
    start_page: int,
    end_page: int | None,
) -> None:
    reader = PdfReader(str(pdf_path), strict=False)
    scan = pymupdf.open(str(pdf_path))
    last_page = min(end_page or len(reader.pages), len(reader.pages))
    if start_page < 1 or start_page > last_page:
        raise ValueError(f"Invalid page range: {start_page}-{last_page}")

    pages = []
    ocr_count = 0
    text_count = 0
    for page_number in range(start_page, last_page + 1):
        source_text = (reader.pages[page_number - 1].extract_text() or "").strip()
        if len(source_text) >= 25:
            text = source_text
            method = "text"
            text_count += 1
        else:
            text = ocr_page(scan[page_number - 1], executable, language, tessdata, dpi)
            method = "ocr"
            ocr_count += 1
        pages.append({"page": page_number, "method": method, "text": text})
        if page_number % 25 == 0:
            print(f"Processed page {page_number}/{last_page}.", flush=True)

    result = {
        "source": pdf_path.name,
        "pageCount": len(reader.pages),
        "processedPageRange": [start_page, last_page],
        "ocrLanguage": language,
        "pages": pages,
    }
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Saved {len(pages)} pages: {text_count} text pages and {ocr_count} OCR pages.")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Extract searchable text and OCR scanned pages in a local PDF."
    )
    parser.add_argument("pdf", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--tesseract")
    parser.add_argument("--tessdata", type=Path, required=True)
    parser.add_argument("--language", default="fra+eng")
    parser.add_argument("--dpi", type=int, default=180)
    parser.add_argument("--start-page", type=int, default=1)
    parser.add_argument("--end-page", type=int)
    args = parser.parse_args()

    if not args.pdf.is_file():
        parser.error(f"PDF not found: {args.pdf}")
    if not args.tessdata.is_dir():
        parser.error(f"Tesseract language data directory not found: {args.tessdata}")
    try:
        executable = resolve_tesseract(args.tesseract)
        extract_pdf(
            args.pdf,
            args.output,
            executable,
            args.language,
            args.tessdata,
            args.dpi,
            args.start_page,
            args.end_page,
        )
    except (FileNotFoundError, RuntimeError, ValueError) as error:
        print(error, file=sys.stderr)
        raise SystemExit(1) from error


if __name__ == "__main__":
    main()

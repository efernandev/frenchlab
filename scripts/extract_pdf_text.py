import argparse
import json
import sys
from pathlib import Path

from pypdf import PdfReader


def extract(pdf_path: Path, output_path: Path) -> None:
    reader = PdfReader(str(pdf_path), strict=False)
    pages = []
    empty_pages = []

    for page_number, page in enumerate(reader.pages, start=1):
        text = (page.extract_text() or "").strip()
        pages.append({"page": page_number, "text": text})
        if not text:
            empty_pages.append(page_number)

    document = {
        "source": pdf_path.name,
        "pageCount": len(pages),
        "pagesWithoutExtractableText": empty_pages,
        "pages": pages,
    }
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(document, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Extracted text from {len(pages) - len(empty_pages)}/{len(pages)} pages.")
    if empty_pages:
        print(
            f"{len(empty_pages)} pages need OCR before they can be authored as lessons.",
            file=sys.stderr,
        )


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Extract searchable text from a source PDF for lesson authoring."
    )
    parser.add_argument("pdf", type=Path, help="Path to one source PDF")
    parser.add_argument("output", type=Path, help="Destination JSON file")
    args = parser.parse_args()

    if not args.pdf.is_file():
        parser.error(f"PDF not found: {args.pdf}")
    extract(args.pdf, args.output)


if __name__ == "__main__":
    main()

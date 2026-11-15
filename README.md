# eduardingo

Interfaz local para convertir los libros de francés en recorridos de aprendizaje interactivos. La unidad de estudio es la lección, no la página del PDF: cada lección presenta una explicación, actividades autocorregibles con feedback y una progresión hacia un test final.

## Ejecutar la aplicación

Haz doble clic en `abrir-eduardingo.bat` para iniciar el servidor local y abrir la aplicación en el navegador.

También puedes hacerlo manualmente desde la raíz del proyecto:

```powershell
python -m http.server 4173
```

Abre <http://localhost:4173>. No necesita dependencias de Python para ejecutarse.

Las lecciones completadas se guardan automáticamente en el navegador y se restauran al volver a abrir la app en la misma dirección. Si usaste la versión anterior, el progreso guardado con la clave `bonjour` se migra automáticamente a `eduardingo`.

## Estado de conversión

El primer recorrido piloto es **A1 · Vocabulaire progressif**: seis lecciones adaptadas de las páginas 8–20 y un test final. Incluye alfabeto y acentos, números, objetos de clase, acciones, presentaciones y saludos.

Les explications, les questions, les réponses et le test de ce parcours sont rédigés en français. L’interface de navigation reste en espagnol.

El catálogo también muestra el resto de los libros, pero permanecen marcados como pendientes hasta que su contenido se estructure y revise. No se usa el PDF como sustituto de una lección. La colección incluye páginas escaneadas sin capa de texto y los cuadernillos de correcciones también requieren lectura y vinculación; por eso cada respuesta de los futuros ejercicios debe verificarse antes de publicarse.

## Preparar texto de un PDF para autoría

El extractor conserva el número de página y avisa cuando hace falta OCR:

```powershell
python -m venv .venv
.\.venv\Scripts\python -m pip install -r requirements.txt
.\.venv\Scripts\python scripts\extract_pdf_text.py "Livre Français\A1\vocabulaire-progressif-du-franais-a11-debutant-complet-avec-200-exercices-1_compress.pdf" "content\a1-vocabulaire.json"
```

Para leer las páginas escaneadas, instala Tesseract OCR y el modelo francés `fra` de forma local. Después, ejecuta:

```powershell
python scripts\ocr_pdf.py "Livre Français\A2-B1\grammaire-progressive-du-franais-a2-b1_compress.pdf" "content\a2-grammaire.json" --tessdata "$env:LOCALAPPDATA\Tesseract-OCR\tessdata"
```

El OCR conserva el número de página para poder revisar el resultado junto al original. Extraer texto u OCR no convierte por sí solo un ejercicio en una lección: el contenido, las respuestas y las explicaciones deben estructurarse y verificarse antes de publicarse.

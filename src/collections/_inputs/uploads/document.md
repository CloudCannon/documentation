---
title: Document
details: |
  File, image and document selectors with controls to use external links and upload new files.
  Displayed for keys ending in `_path`, `_document_path`, `_document`, `_image_path` or `_image`.
  Alternatively, you can use the variations without underscores as keys (e.g. `image_path` or `document`).

  Each variation limits the files shown in the selector by type. The `_path` variation shows all visible files.
info: Control the size and format of image uploads with [Image Upload Options](/editing/options/#image-uploads).
yaml_code_block: |
  ---
  background_image_path: /images/background.png
  newsletter_document_path: /documents/2016/newsletter.pdf
  extra_styles_path: /styles/screen.css
  ---
image_paths:
  - /images/editing/front-matter/file.png
---

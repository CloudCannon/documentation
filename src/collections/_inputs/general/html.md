---
title: HTML Rich Text
details: |
  WYSIWYG editor for formatted content. Displayed for keys ending in `_html` or `_markdown`.
  Alternatively, you can use the variations without underscores as keys (e.g. `markdown`).

  Each variation defines which format the value is saved as.
yaml_code_block: |
  ---
  markdown: |
    # Animals

    - Dogs
    - Cats

    > It's raining cats and dogs.
  sidebar_html: |
    <p>This paragraph has <em>emphasis</em> and <strong>strength</strong>.</p>
    <ol>
      <li>Walk</li>
      <li>Run</li>
    </ol>
    <p>Linking to <a href="/">index</a>.</p>
  ---
image_paths:
  - /images/editing/front-matter/rich-text.png
info: Use the `markdownify` Liquid filter to render Markdown from front matter, e.g. `{% if page.markdown %}{{ page.markdown | markdownify }}{% endif %}`.
---

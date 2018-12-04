---
title: Markdown Rich Text
category: General Inputs
details: |
  WYSIWYG editor for markdown content. Displayed for `markdown` or keys ending in `_markdown`.

  Use the `markdownify` Liquid filter to render Markdown from front matter. For example:

  ~~~html
  {% if page.markdown %}
    {{ page.markdown | markdownify }}
  {% endif %}
  ~~~
yaml_code_block: |
  ---
  markdown: |
    # Animals

    - Dogs
    - Cats

    > It's raining cats and dogs.
  ---
image_paths:
  - /images/editing/front-matter/markdown.png
info:
---

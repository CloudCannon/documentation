---
title: Select
category: General Inputs
details: |
  Set of options in a dropdown menu. The options are populated from [Collection](/editing/collections/) items, or with an array or object in `_config.yml`:

  ~~~yaml
  _select_data:
    styles:
      - Red
      - Blue
      - Green

    options:
      red: Red Shirt
      blue: Blue Sweater
      green: Green Jacket

    collections:
      - authors
  ~~~

  Displayed for keys **in the singular form** of the collection name, array or object set inside `_select_data` in `_config.yml`.
yaml_code_block: |
  ---
  style: Green
  option: red
  author: george
  ---
image_paths:
  - /images/editing/front-matter/select.png
  - /images/editing/front-matter/select-focus.png
  - /images/editing/front-matter/select-object.png
  - /images/editing/front-matter/select-object-focus.png
  - /images/editing/front-matter/select-collection.png
  - /images/editing/front-matter/select-collection-focus.png
info: |
  The value saved to front matter depends on how the select is populated. Array items are saved as the value, keys are saved for objects and collection items are saved by slug.

  Populate this input with all `site.data` by enabling it in `_config.yml`:

  ```yaml
  cloudcannon:
    data: true
  ```

  Include only select `data` with specific keys:

  ```yaml
  cloudcannon:
    data:
      authors: true
      offices: true
  ```
---

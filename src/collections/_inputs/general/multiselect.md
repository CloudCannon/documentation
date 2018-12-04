---
title: Multiselect
category: General Inputs
details: |
  Set of options in a tagger-style dropdown menu. Allows multiple items to be selected. The options are populated from an array or object in `_config.yml`, or with [Collection](/editing/collections/) items:

  ~~~yaml
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

  Displayed for `categories`, `tags`, and keys **matching the name** of a collection name, array or object set in `_config.yml`.
yaml_code_block: |
  ---
  styles:
    - Green
    - Blue
  options:
    - red
    - blue
  authors:
    - george
    - mike
  ---
image_paths:
  - /images/editing/front-matter/multiselect.png
  - /images/editing/front-matter/multiselect-focus.png
  - /images/editing/front-matter/multiselect-object.png
  - /images/editing/front-matter/multiselect-object-focus.png
  - /images/editing/front-matter/multiselect-collection.png
  - /images/editing/front-matter/multiselect-collection-focus.png
info: |
  The value saved to the each item in the front matter array depends on how the select is populated. Array items are saved as the value, keys are saved for objects and collection items are saved by filename.

  If not populated from any source, `categories` and `tags` display a multiselect that supports adding options inline.
---

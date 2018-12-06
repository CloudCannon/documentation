---
title: Input Options
category: Options
order: 3
requirements:
  build: Any
  plan: Free
  hosting: Any
examples:
  - title: Array Defaults
    details: |
      Provides initial values for newly created items in arrays.
      Configured globally in `_config.yml` or per file in front matter with a `_defaults` object:

      ~~~yaml
      _defaults:
        image_path: /images/placeholder.png
      ~~~

      Alternatively, configure on a custom scope with Jekyll defaults:

      ~~~yaml
      defaults:
        - type: ''
      values:
        _defaults:
          image_path: /images/placeholder.png
      ~~~

      New array items clone the structure from the existing array items.
      Array defaults populate that structure for the same keys in `_defaults`.
    yaml_code_block: |
      ---
      _defaults:
        image_path: /images/placeholder.png
      images:
        - image_path: /images/sunset.png
          title: Sunset

        # Adding an item to the array is prepopulated as:
        - image_path: /images/placeholder.png
          title:
      ---
    image_paths:
      - /images/editing/front-matter/array-defaults.png
    info: Array defaults also apply when editing CSV, YAML and JSON files.
---

### Hidden Fields

Control which front matter fields your editors see with the `hidden` option.

```yaml
_options:
  layout:
    hidden: true
```

Hidden fields can be edited with modal-style [Editor Links](/editing/experience/editor-links/#front-matter-style).

> Alternatively, hide front matter fields by prefixing the key with an underscore (e.g. `_hidden_text`).
{: .explainer}

### Code Blocks

Change the appearance and behaviour of your front matter code blocks to fit your use case and brand.

```yaml
_options:
  code_block:
    tab_size: 2
    show_gutter: false
  javascript_code_block:
    tab_size: 4
    theme: dawn
```

| Option | Values |
| --- | --- |
| tab\_size | Integer (optional, defaults to *4*) |
| theme | String, one from [themes](https://github.com/ajaxorg/ace/tree/v1.2.9/lib/ace/theme) (optional, defaults to *monokai*) |
| show\_gutter | *true* or *false* (optional, defaults to *true*) |

`tab_size` controls how many spaces lines are auto indented.

`theme` controls the appearance of the editor.

`show_gutter` toggles line numbers and code folding controls.


### Array Defaults
Provides initial values for newly created items in arrays. Configured globally in `_config.yml` or per file in front matter with a `_defaults` object:

~~~yaml
_defaults:
image_path: /images/placeholder.png
~~~

Alternatively, configure on a custom scope with Jekyll defaults:

~~~yaml
defaults:
- type: ''
values:
_defaults:
  image_path: /images/placeholder.png
~~~

New array items clone the structure from the existing array items.
Array defaults populate that structure for the same keys in `_defaults`.


~~~liquid
---
_defaults:
image_path: /images/placeholder.png
images:
- image_path: /images/sunset.png
  title: Sunset

# Adding an item to the array is prepopulated as:
- image_path: /images/placeholder.png
  title:
---
~~~

> Array defaults also apply when editing CSV, YAML and JSON files.
{: .explainer}

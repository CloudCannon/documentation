---
title: Input Options
category: Options
order: 3
requirements:
  build: Any
  plan: Free
  hosting: Any
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


### Array Structures

Provides initial values for newly created items in arrays. Configured globally in `_config.yml` or per file in front matter with a `_defaults` object.

For example, set the structure for new items in a `gallery` array with:

~~~yaml
_array_structures:
  gallery:
    values:
      label: Image
      icon: image
      value:
        image: /placeholder.png
        caption:
~~~

Define multiple structures if you need editors to add different types to an array:

~~~yaml
_array_structures:
  gallery:
    style: select
    values:
      - label: Image
        image: /path/to/source-image.png
        value:
          image: /placeholder.png
          caption:
      - label: External link
        icon: link
        value:
          url:
          title:
~~~

Alternatively, configure on a custom scope with Jekyll defaults:

~~~yaml
defaults:
  - scope:
      path: ''
      type: ''
    values:
      _array_structures:
        gallery:
          style: modal
          values:
            - label: Image
              icon: image
              tags:
                - Media
                - Asset
              value:
                image: /placeholder.png
                caption:
            - label: External link
              icon: link
              description: A link to another web site
              tags:
                - Raw value
              value:
                url:
                title:
~~~


The `label` is used in the array interface to display what kind of item(s) editors can add.

The `description` is used in the array interface as subtext to describe the item(s) editors can add.

The `icon` is a Material Design icon name for customising how the array item preview.

The `image` is a path to an image in your source files to be used in place of the icon (`icon` takes precedence if both present).

The `style` defines whether the items are shown to your editors in a select menu (`select`, default) or a modal pop up window (`modal`).

The `tags` are used to group and filter items when selecting a structure from an add modal.

New array items have their keys and values populated from the `value` you set. If no structure is defined, new array items clone the structure from existing array items.

~~~liquid
---
_array_structures:
  gallery:
    values:
      - label: Image
        icon: image
        value:
          image: /placeholder.png
          caption:

gallery:
  - image: /uploads/sunset-at-the-wharf.png
    caption: Golden hour at the wharf

# Adding an item to the array results in this:
  - image: /placeholder.png
    caption:
---
~~~

> Array structures also apply when editing CSV, YAML and JSON files.
{: .explainer}

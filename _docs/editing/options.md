---
title: Options
category: Editing
order: 6
requirements:
  build: Jekyll
  plan: Free
  hosting: Any
examples:
  - title: Comments
    details: |
      Helper text to provide additional context. Configured globally in `_config.yml` or per file in front matter with a `_comments` object:

      ~~~yaml
      _comments:
        title: The page title
        output: Does this item have a dedicated page?
        brand_colour: The primary brand colour
        footer: Update the details in the footer
      ~~~

      Alternatively, configure comments on a custom scope with Jekyll defaults:

      ~~~yaml
      defaults:
        - type: ''
      values:
        _comments:
          title: The page title
          output: Does this item have a dedicated page?
          brand_colour: The primary brand colour
          footer: Update the details in the footer
      ~~~

      Comments are displayed for the same keys in the `_comments` object.
    yaml: |
      ---
      _comments:
        title: The page title
        output: Does this item have a dedicated page?
        brand_colour: The primary brand colour
        footer: Update the details in the footer
      ---
    image_paths:
      - /images/editing/front-matter/comments.png
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
    yaml: |
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

Configure the various editing interfaces for your clients to optimise for their specific needs. Options can be set for keys matching the same name in three ways:

* Globally in `_config.yml`
* File specific in front matter
* Custom scope with Jekyll Defaults


### Toolbars

Control the toolbar options for your clients or editors to increase focus on the content at hand.

Set toolbar options for the [Content Editor](/editing/content-editor/) with the `content` key, and [Editable Regions](/editing/editable-regions/) using the `_block` and `_text` keys. Options for Rich Text front matter interfaces are specified by matching key names.

{% highlight yaml %}
_options:
  some_markdown:
    bold: true
    table: true
  _text:
    italic: true
  _block:
    format: true
    undo: true
    redo: true
  content:
    format: true
    bold: true
    numberedlist: true
    table: true
{% endhighlight %}

You can also set options directly on elements for [Editable Regions](/editing/editable-regions/):

{% highlight html %}
<p class="editable" data-cms-options='{"bold": true, "italic": true}'>...</p>
{% endhighlight %}

> The most specific options that apply to an interface are used, less specific options that still apply are ignored. In order of specificity: `data-cms-options` attributes, front matter and Jekyll defaults, then globally in `_config.yml`.

The complete list of options are:

- bold
- italic
- removeformat
- link
- undo
- redo
- underline
- strike
- subscript
- superscript
- format (unavailable for `_text`)
- blockquote (unavailable for `_text`)
- numberedlist (unavailable for `_text`)
- bulletedlist (unavailable for `_text`)
- outdent (unavailable for `_text`)
- indent (unavailable for `_text`)
- image (unavailable for `_text` or *Rich Text* fields)
- table (unavailable for `_text`)



### Image Uploads

Control the size and format of images clients or team members upload through the interface. Images are resized and converted automatically.

Set options for images uploaded with the [Content Editor](/editing/content-editor/) and [block element Editable Regions](/editing/editable-regions/#block-elements) using the `content` key. Options for front matter interfaces are specified by matching key names.

{% highlight yaml %}
_options:
  image_path:
    width: 90
    height: 120
    resize_style: "contain"
    mime_type: "image/jpeg"
    expandable: true
  content:
    width: 90
    height: 120
    resize_style: "cover"
    mime_type: "image/png"
{% endhighlight %}

| Option | Values |
| ------ | ------ |
| width | Integer |
| height | Integer |
| resize_style | *contain*, *cover* or *stretch* (optional, defaults to *contain*) |
| mime_type | *image/jpeg*, *image/png* (optional, defaults to uploaded type if supported) |
| expandable | *true* or *false* (optional, defaults to *false*) |

`mime_type` sets what format the image is converted into on upload. `width` and `height` define a bounding box. `resize_style` defines how uploaded images are resized with respect to that box:

* `cover` ensures the image covers the bounding box
* `contain` ensures the image fits inside the bounding box
* `stretch` ignores aspect ratio to resize the image to the bounding box

`expandable` set to *true* allows images to be enlarged past original dimensions.

{% for example in page.examples %}
***
{% include settings-panel-example.html example=example %}
{% endfor %}

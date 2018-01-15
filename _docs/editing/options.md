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
    format: p h3
    undo: true
    redo: true
  content:
    format: p h1 h2 h3 h4 h5 h6 pre address div
    bold: true
    numberedlist: true
    table: true
    right: align-to-right
    styles: /_sass/_content-typography.scss
{% endhighlight %}

You can also set options directly on elements for [Editable Regions](/editing/editable-regions/):

{% highlight html %}
<p class="editable" data-cms-options='{"bold": true, "italic": true}'>...</p>
{% endhighlight %}

> The most specific options that apply to an interface are used, less specific options that still apply are ignored. In order of specificity: `data-cms-options` attributes, front matter and Jekyll defaults, then globally in `_config.yml`.

The complete list of options follows, all values can either be *true* or *false* unless specified otherwise:

| Option | Values |
| ------ | ------ |
bold | |
italic | |
removeformat | |
link | |
undo | |
redo | |
underline | |
strike | |
subscript | |
superscript | |
format (unavailable for `_text`) | *true*, *false* or space separated options |
blockquote (unavailable for `_text`) | |
numberedlist (unavailable for `_text`) | |
bulletedlist (unavailable for `_text`) | |
outdent (unavailable for `_text`) | |
indent (unavailable for `_text`) | |
image (unavailable for `_text` or *Rich Text* fields) | |
table (unavailable for `_text`) | |
styles (unavailable for `_text`) | *false*, or path to source CSS file |
left (unavailable for `_text`) | *false* or string of class name |
center (unavailable for `_text`) | *false* or string of class name |
right (unavailable for `_text`) | *false* or string of class name |
justify (unavailable for `_text`) | *false* or string of class name |

### Styles

Add predefined styles in plain CSS for your clients and team members to use in the Visual Editor, Content Editor and Front Matter interfaces.

{% highlight yaml %}
_options:
  content:
    styles: /css/content.css
{% endhighlight %}

The file can have any extension, but must contain only plain CSS. Selectors must specify an element and one class in order to be included in the styles dropdown. Styles with incompatible selectors are included in the editor, but not shown as options.

{% highlight css %}
p.callout { /* Can be applied to blocks of content */
  margin: 10px;
  border: 1px solid #f5f5f5;
  background-color: #eee;
}

span.big-blue-text { /* Can be applied to inline content */
  font-size: 2rem;
  color: blue;
}

h2 { /* Applied to content, excluded from style dropdown */
  font-family: cursive;
}

.center-this-text { /* Excluded from style dropdown, used as center class described below */
  text-align: center;
}

{% endhighlight %}

> Custom styles in the Visual Editor requires the same styles on your live site, otherwise the class is applied but has no visual effect.

Use the justification options to specify classes for alignment rather than the dropdown for a better editing experience:

{% highlight yaml %}
_options:
  _block:
    left: align-left
    center: center-this-text
    right: align-right
    justify: full-width-text
{% endhighlight %}

> Be sure to include these classes in your styles CSS for them to take effect.

### Code Blocks

Change the appearance and behaviour of your front matter code blocks to fit your use case and brand.

{% highlight yaml %}
_options:
  code_block:
    tab_size: 2
    show_gutter: false
  javascript_code_block:
    tab_size: 4
    theme: dawn
{% endhighlight %}

| Option | Values |
| ------ | ------ |
| tab_size | Integer (optional, defaults to *4*) |
| theme | String, one from [themes](https://github.com/ajaxorg/ace/tree/v1.2.9/lib/ace/theme) (optional, defaults to *monokai*) |
| show_gutter | *true* or *false* (optional, defaults to *true*) |

`tab_size` controls how many spaces lines are auto indented.

`theme` controls the appearance of the editor.

`show_gutter` toggles line numbers and code folding controls.

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

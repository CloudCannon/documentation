---
title: Front Matter
order: 5
requirements:
  build: Jekyll
  plan: Free
  hosting: Any
examples:
  - title: Text Field
    details: Single line field for text. Displayed for short text variables.
    yaml: |
      ---
      tagline: Hand-crafted clothing.
      ---
    image_paths:
      - /img/editing/front-matter/text-field.png
  - title: Large Text Field
    details: Multiline text field expanded for longer text. Displayed when there is too much text for a text field, and for the `description` key.
    yaml: |
      ---
      description: Products are crafted in-house by hand, making each piece a labour of love and an exercise in craftsmanship.
      ---
    image_paths:
      - /img/editing/front-matter/large-text-field.png
  - title: Boolean
    details: Checkbox which can be triggered on or off. Displayed for variables with values set to **true** or **false**.
    yaml: |
      ---
      show_feature: true
      ---
    image_paths:
      - /img/editing/front-matter/boolean.png
  - title: Image or File
    details: Image or file selector. Has options for external links and uploading new files. Displayed for variables with keys ending in `_path`.
    yaml: |
      ---
      background_image_path: /image/background.png
      ---
    image_paths:
      - /img/editing/front-matter/image-or-file.png
  - title: Colour
    details: |
      Input with dropdown for selecting colour.
      Displayed for variables with keys ending in one of the following: `_colour`, `_color`, `_rgb`, `_hex`, `_hsv` or `_hsl`.
      Alternatively, you can use the variations without underscores as keys (i.e. `rgb` or `colour`).

      Each variation defines the preferred format of the colour. The `_colour` and `_color` variations default to hex.
    yaml: |
      ---
      brand_colour: '#f05f40'
      ---
    image_paths:
      - /img/editing/front-matter/colour.png
      - /img/editing/front-matter/colour-focus.png
    info: Quote hex colours, otherwise the hash symbol begins a YAML comment.
  - title: Date
    details: Date picker with options for year, month and day. Displayed for variables with date values or keys ending in `_date`.
    yaml: |
      ---
      sale_start_date: 2015-01-09
      ---
    image_paths:
      - /img/editing/front-matter/date.png
      - /img/editing/front-matter/date-focus.png
  - title: Time
    details: 12 hour time input. Displayed for `time` and variables with keys ending in `_time`.
    yaml: |
      ---
      opening_time: 8:00 am
      ---
    image_paths:
      - /img/editing/front-matter/time.png
  - title: Date Time
    details: Combination date picker and 12 hour time input. Outputs a ISO 8601 date. Displayed for `date`, `datetime` and variables with keys ending in `_at` or `_datetime`.
    yaml: |
      ---
      date: 2015-07-15T12:00:00Z
      ---
    image_paths:
      - /img/editing/front-matter/datetime.png
      - /img/editing/front-matter/datetime-focus.png
  - title: Select
    details: |
      Set of options in a dropdown menu. There are three ways to populate the options, from an array or object in `_config.yml`, or with [Collection](/editing/collections/) items:

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

      Displayed for variables with keys **of the singular name** of the collection, array or object set in `_config.yml`.
    yaml: |
      ---
      style: Green
      option: red
      author: george
      ---
    image_paths:
      - /img/editing/front-matter/select.png
      - /img/editing/front-matter/select-focus.png
      - /img/editing/front-matter/select-object.png
      - /img/editing/front-matter/select-object-focus.png
      - /img/editing/front-matter/select-collection.png
      - /img/editing/front-matter/select-collection-focus.png
    info: The value saved to the front matter depends on how the select is populated. Array items are saved as the value, keys are saved for objects and collection items are saved by filename.
  - title: Multiselect
    details: |
      Set of options in a tagger-style dropdown menu. Allows multiple items to be selected. There are three ways to populate the options, from an array or object in `_config.yml`, or with [Collection](/editing/collections/) items:

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

      Displayed for variables with keys **matching the name** of a collection or array set in `_config.yml`.
    yaml: |
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
      - /img/editing/front-matter/multiselect.png
      - /img/editing/front-matter/multiselect-focus.png
      - /img/editing/front-matter/multiselect-object.png
      - /img/editing/front-matter/multiselect-object-focus.png
      - /img/editing/front-matter/multiselect-collection.png
      - /img/editing/front-matter/multiselect-collection-focus.png
    info: The value saved to the each item in the front matter array depends on how the select is populated. Array items are saved as the value, keys are saved for objects and collection items are saved by filename.
  - title: Object
    details: Button that navigates to grouped data. Displayed for variables with an object as the value.
    yaml: |
      ---
      footer:
        copyright: Lion Wear Inc.
        since: 2004
      ---
    image_paths:
      - /img/editing/front-matter/object.png
      - /img/editing/front-matter/object-active.png
  - title: Array
    details: Button that navigates to an ordered list of items. Items in the array can be added, reordered and deleted. Displayed for variables with an array as the value.
    yaml: |
      ---
      staff:
        - Bill
        - Ben
        - Badger
      ---
    image_paths:
      - /img/editing/front-matter/array.png
      - /img/editing/front-matter/array-active.png
---

Front matter is a [Jekyll feature](http://jekyllrb.com/docs/frontmatter/) to set custom variables for a page.
Variables are defined in YAML between triple dashed lines at the top of a file.
Access the variables in the page with [Liquid](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers). For example:

{% highlight liquid %}
---
title: Home
---
...
<title>{% raw %}{{ page.title }}{% endraw %} - Lion Wear</title>
...
{% endhighlight %}

CloudCannon provides an easy-to-use editor for front matter. Use the **Toggle Settings** button at top right of the [Visual Editor](/editing/visual-editor/) or [Content Editor](/editing/content-editor/) to access it.

![CloudCannon front matter interface](/img/editing/front-matter/overview.png){: .screenshot srcset="/img/editing/front-matter/overview.png 800w, /img/editing/front-matter/overview@2x.png 1600w"}

There are interfaces for different types of content. Values and naming schemes dictate which interfaces are used.
Use these naming schemes to customise the editor for your team and clients. The available interfaces are:

{% for example in page.examples %}
***
{% include settings-panel-example.html example=example %}
{% endfor %}

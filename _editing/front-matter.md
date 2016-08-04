---
title: Front Matter
order: 5
requirements:
  build: Jekyll
  plan: Free
  hosting: Any
examples:
  - title: Text
    details: Single line field for text. Displayed for short text variables.
    yaml: |
      ---
      tagline: Hand-crafted clothing.
      ---
    image_paths:
      - /img/editing/front-matter/text-field.png
  - title: Large Text
    details: Multiline text field expanded for longer text. Displayed when there is too much text for a text field, and for the `description` key.
    yaml: |
      ---
      description: Products are crafted in-house by hand, making each piece a labour of love and an exercise in craftsmanship.
      ---
    image_paths:
      - /img/editing/front-matter/large-text-field.png
  - title: Rich Text
    details: |
      WYSIWYG editor for formatted content. Displayed for variables with keys ending in `html` or `markdown`.

      Each variation defines which format the value is saved as.
    yaml: |
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
      - /img/editing/front-matter/rich-text.png
    info: Use the `markdownify` Liquid filter to render Markdown from front matter.
  - title: Boolean
    details: Checkbox which can be triggered on or off. Displayed for variables with values set to **true** or **false**.
    yaml: |
      ---
      show_feature: true
      ---
    image_paths:
      - /img/editing/front-matter/boolean.png
  - title: File
    details: |
      File, image and document selectors with controls to use external links and upload new files.
      Displayed for variables with keys ending in `_path`, `_document_path`, `_document`, `_image_path` or `_image`.
      Alternatively, you can use the variations without underscores as keys (e.g. `image_path` or `document`).

      Each variation limits the files shown in the selector by type. The `_path` variation shows all visible files.
    yaml: |
      ---
      background_image_path: /images/background.png
      newsletter_document_path: /documents/2016/newsletter.pdf
      extra_styles_path: /styles/screen.css
      ---
    image_paths:
      - /img/editing/front-matter/file.png
  - title: Colour
    details: |
      Input with dropdown for selecting colour.
      Displayed for variables with keys ending in `_colour`, `_color`, `_rgb`, `_hex`, `_hsv` and `_hsl`.
      Alternatively, you can use the variations without underscores as keys (e.g. `rgb` or `colour`).

      Each variation defines the preferred format of the colour. The `_colour` and `_color` variations default to hex.
    yaml: |
      ---
      brand_colour: '#f05f40'
      ---
    image_paths:
      - /img/editing/front-matter/colour.png
      - /img/editing/front-matter/colour-focus.png
    info: Quote hex colours, otherwise the hash symbol begins a YAML comment.
  - title: Number
    details: |
      Input field for numbers.
      Displayed for `number`, variables with keys ending in `_number` and variables with numerical values.
    yaml: |
      ---
      order: 12
      number: 3.14
      sort_number: 2
      ---
    image_paths:
      - /img/editing/front-matter/number.png
  - title: Social
    details: |
      Text field with avatar for various social handles and full URLs.
      Displayed for variables with keys ending in one of the following: `_twitter`, `_twitter_username`, `_twitter_url`, `_facebook`, `_facebook_username`, `_facebook_url`, `_google_plus`, `_google_plus_username`, `_google_plus_url`, `_instagram`, `_instagram_username`, `_instagram_url`, `_github`, `_github_username`, `_github_url`, `_email` and `_email_address`.
      Alternatively, you can use the variations without underscores as keys (e.g. `twitter_username` or `facebook_url`).
    info: |
      For compatibility with popular Jekyll plugins, the Twitter **@** symbol is stripped from the value on save. The Twitter interfaces display a placeholder symbol.

      In order to support both custom and default Google user ID variations, the **+** is part of the value in the Google+ interfaces.
    yaml: |
      ---
      twitter: CloudCannonApp
      twitter_url: 'https://twitter.com/@jekyllrb'
      facebook: CloudCannon
      facebook_url: 'https://www.facebook.com/CloudCannon'
      google_plus: +CloudCannon
      default_google_plus: '117511497981903622103'
      google_plus_url: 'https://plus.google.com/+CloudCannon'
      github_username: CloudCannon
      github_url: 'https://github.com/jekyll'
      docs_github_url: 'https://github.com/CloudCannon/Documentation'
      instagram_url: 'https://www.instagram.com/purenewzealand/'
      email: support@cloudcannon.com
      email_address: support@cloudcannon.com
      ---
    image_paths:
      - /img/editing/front-matter/social.png
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
  - title: Hidden
    details: Hidden values are not present in the interface. This applies to any key that begins with an underscore.
    yaml: |
      ---
      _image_src: /src/
      ---
  - title: Comment
    details: |
      Helper text that provides additional context for form elements. This is configured in `_config.yml` with a `comments` object:

      ~~~yaml
      _comments:
        title: The page title
        output: Does this item have a dedicated page?
        brand_colour: The primary brand colour
        footer: Update the details in the footer
      ~~~

      Alternatively, configure comments per file in front matter or with Jekyll defaults:

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

      Comments are displayed for variables with the same key in the `comments` object.
    yaml: |
      ---
      _comments:
        title: The page title
        output: Does this item have a dedicated page?
        brand_colour: The primary brand colour
        footer: Update the details in the footer
      ---
    image_paths:
      - /img/editing/front-matter/comments.png
  - title: Array Defaults
    details: |
      Provides initial values for newly created items in arrays.
      This is configured in `_config.yml` with a `_defaults` object:

      ~~~yaml
      _defaults:
        image_path: /images/placeholder.png
      ~~~

      Alternatively, configure per file in front matter or with Jekyll defaults:

      ~~~yaml
      defaults:
        - type: ''
          values:
            _defaults:
              image_path: /images/placeholder.png
      ~~~

      New array items clone the structure from the existing array items.
      Array defaults populate that structure for variables with the same keys in `_defaults`.
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
      - /img/editing/front-matter/array-defaults.png
    info: Array defaults also apply when editing CSV, YAML and JSON files.
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

There are interfaces for different types of content. Values and key naming conventions dictate which interfaces are used.
Use these conventions to customise the editor for your team and clients. The available interfaces are:

{% for example in page.examples %}
***
{% include settings-panel-example.html example=example %}
{% endfor %}

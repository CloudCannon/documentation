---
title: Front Matter
category: Editing
order: 5
requirements:
  build: Jekyll
  plan: Free
  hosting: Any
examples:
  - title: Text
    details: Single line field for text. Displayed for short text values.
    yaml: |
      ---
      tagline: Hand-crafted clothing.
      ---
    image_paths:
      - /images/editing/front-matter/text-field.png
  - title: Large Text
    details: |
      Multiline text field expanded for longer text. Displayed for keys ending in `_text` or `_description`.
      Alternatively, you can use the variations without underscores as keys (e.g. `description`).
    yaml: |
      ---
      description: Products are crafted in-house by hand, making each piece a labour of love and an exercise in craftsmanship.
      ---
    image_paths:
      - /images/editing/front-matter/large-text-field.png
  - title: Rich Text
    details: |
      WYSIWYG editor for formatted content. Displayed for keys ending in `_html` or `_markdown`.
      Alternatively, you can use the variations without underscores as keys (e.g. `markdown`).

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
      - /images/editing/front-matter/rich-text.png
    info: Use the `markdownify` Liquid filter to render Markdown from front matter, e.g. `{% if page.markdown %}{{ page.markdown | markdownify }}{% endif %}`.
  - title: Boolean
    details: Checkbox which can be triggered on or off. Displayed for the values **true** and **false**.
    yaml: |
      ---
      show_feature: true
      ---
    image_paths:
      - /images/editing/front-matter/boolean.png
  - title: File
    details: |
      File, image and document selectors with controls to use external links and upload new files.
      Displayed for keys ending in `_path`, `_document_path`, `_document`, `_image_path` or `_image`.
      Alternatively, you can use the variations without underscores as keys (e.g. `image_path` or `document`).

      Each variation limits the files shown in the selector by type. The `_path` variation shows all visible files.
    info: Control the size and format of image uploads with [Image Upload Options](/editing/options/#image-uploads).
    yaml: |
      ---
      background_image_path: /images/background.png
      newsletter_document_path: /documents/2016/newsletter.pdf
      extra_styles_path: /styles/screen.css
      ---
    image_paths:
      - /images/editing/front-matter/file.png
  - title: Colour
    details: |
      Input with dropdown for selecting colour.
      Displayed for keys ending in `_colour`, `_color`, `_rgb`, `_hex`, `_hsv` and `_hsl`.
      Alternatively, you can use the variations without underscores as keys (e.g. `rgb` or `colour`).

      Each variation defines the preferred format of the colour. The `_colour` and `_color` variations default to hex.
    yaml: |
      ---
      brand_colour: '#f05f40'
      ---
    image_paths:
      - /images/editing/front-matter/colour.png
      - /images/editing/front-matter/colour-focus.png
    info: Quote hex colours, otherwise the hash symbol begins a YAML comment.
  - title: Number
    details: |
      Input field for numbers.
      Displayed for `number`, keys ending in `_number` and numerical values.
    yaml: |
      ---
      order: 12
      number: 3.14
      sort_number: 2
      ---
    image_paths:
      - /images/editing/front-matter/number.png
  - title: Code Block
    details: |
      Configurable editor for blocks of code or monospace content.
      Displayed for `code_block` and keys ending in `_code_block`.

      Syntax highlighting is enabled when the suffix includes a language (e.g. `javascript_code_block`).
    info: Set a theme, tab size and more for each interface with editing [Options](/editing/options/).
    yaml: |
      ---
      code_block: |
        Some content is better in monospace.

        1 + 1 = 2
        2 + 2 = 4
      javascript_code_block: |
        function sayHello() {
            console.log("Hi there!");
        }

        sayHello();
      example_ruby_code_block: |
        def say_hello
          puts 'Hi there!'
        end

        say_hello
      ---
    image_paths:
      - /images/editing/front-matter/code-block.png
  - title: URL
    details: |
      Input field with a preview for absolute or fully qualified URLs.
      Displayed for `url`, `link` and keys ending in `_url` or `_link`.

      Previews for URLs without a protocol are requested prefixed with `http://`.
    yaml: |
      ---
      external_url: 'https://bitbucket.org/'
      internal_url: /editing/visual-editor/
      link: github.com
      ---
    image_paths:
      - /images/editing/front-matter/url.png
  - title: Social
    details: |
      Text field with avatar for various social handles and full URLs.
      Displayed for keys ending in one of the following: `_twitter`, `_twitter_username`, `_twitter_url`, `_facebook`, `_facebook_username`, `_facebook_url`, `_google_plus`, `_google_plus_username`, `_google_plus_url`, `_instagram`, `_instagram_username`, `_instagram_url`, `_github`, `_github_username`, `_github_url`, `_email` and `_email_address`.
      Alternatively, you can use the variations without underscores as keys (e.g. `twitter_username` or `facebook_url`).
    info: |
      For compatibility with popular Jekyll plugins, the Twitter **@** symbol is stripped from the value on save. The Twitter interfaces display a placeholder symbol.

      In order to support both custom and default Google user ID variations, the **+** is part of the value in the Google+ interfaces.
    yaml: |
      ---
      twitter: CloudCannon
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
      - /images/editing/front-matter/social.png
  - title: Date
    details: Date picker with options for year, month and day. Displayed for keys ending in `_date` and date values.
    yaml: |
      ---
      sale_start_date: 2015-01-09 00:00:00
      ---
    image_paths:
      - /images/editing/front-matter/date.png
      - /images/editing/front-matter/date-focus.png
  - title: Time
    details: 12 hour time input. Displayed for `time` and keys ending in `_time`.
    yaml: |
      ---
      opening_time: 8:00 am
      ---
    image_paths:
      - /images/editing/front-matter/time.png
  - title: Date Time
    details: Combination date picker and 12 hour time input. Outputs an ISO 8601 date. Displayed for `date`, `datetime` and keys ending in `_at` or `_datetime`.
    yaml: |
      ---
      date: 2015-07-15 12:00:00
      ---
    image_paths:
      - /images/editing/front-matter/datetime.png
      - /images/editing/front-matter/datetime-focus.png
  - title: Select
    details: |
      Set of options in a dropdown menu. The options are populated from an array or object in `_config.yml`, or with [Collection](/editing/collections/) items:

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

      Displayed for keys **in the singular form** of the collection name, array or object set in `_config.yml`.
    yaml: |
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
    info: The value saved to the front matter depends on how the select is populated. Array items are saved as the value, keys are saved for objects and collection items are saved by filename.
  - title: Multiselect
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
      - /images/editing/front-matter/multiselect.png
      - /images/editing/front-matter/multiselect-focus.png
      - /images/editing/front-matter/multiselect-object.png
      - /images/editing/front-matter/multiselect-object-focus.png
      - /images/editing/front-matter/multiselect-collection.png
      - /images/editing/front-matter/multiselect-collection-focus.png
    info: |
      The value saved to the each item in the front matter array depends on how the select is populated. Array items are saved as the value, keys are saved for objects and collection items are saved by filename.

      If not populated from any source, `categories` and `tags` display a multiselect that supports adding options inline.
  - title: Object
    details: Button that navigates to grouped data. Displayed for object values.
    yaml: |
      ---
      footer:
        copyright: Lion Wear Inc.
        since: 2004
      ---
    image_paths:
      - /images/editing/front-matter/object.png
      - /images/editing/front-matter/object-active.png
  - title: Array
    details: Button that navigates to an ordered list of items. Items in the array can be added, reordered and deleted. Displayed for array values.
    yaml: |
      ---
      staff:
        - Bill
        - Ben
        - Badger
      ---
    image_paths:
      - /images/editing/front-matter/array.png
      - /images/editing/front-matter/array-active.png
  - title: Hidden
    details: Hidden values are not present in the interface. Applies to keys that begin with an underscore.
    yaml: |
      ---
      _image_src: /src/
      ---
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

![CloudCannon front matter interface](/images/editing/front-matter/overview.png){: srcset="/images/editing/front-matter/overview.png 800w, /images/editing/front-matter/overview@2x.png 1600w"}
{: .has-screenshot}

There are interfaces for different types of content. Values and key naming conventions dictate which interfaces are used.
Use these conventions to customise the editor for your team and clients. The available interfaces are listed below.

> Customise these interfaces further by adding sizes, formats, comments and defaults with [Options](/editing/options/).

{% for example in page.examples %}
***
{% include settings-panel-example.html example=example %}
{% endfor %}

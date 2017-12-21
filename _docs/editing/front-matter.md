---
title: Front Matter
category: Editing
order: 5
layout: doc
requirements:
  build: Jekyll
  plan: Free
  hosting: Any
examples:
  - title: Text
    details: Single line field for text. Displayed for short text values.
    yaml_code_block: |
      ---
      tagline: Hand-crafted clothing.
      ---
    image_paths:
      - /images/editing/front-matter/text-field.png
---

Front matter is a [Jekyll feature](http://jekyllrb.com/docs/frontmatter/) to set custom variables for a page.
Variables are defined in YAML between triple dashed lines at the top of a file.
Access the variables in the page with [Liquid](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers). For example:

{% highlight liquid %}
{% raw %}
---
title: Home
---
...
<title>{{ page.title }} - Lion Wear</title>
...
{% endraw %}
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

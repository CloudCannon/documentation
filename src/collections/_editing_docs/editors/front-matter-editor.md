---
title: Front Matter
category: Editing
order: 5
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

![CloudCannon front matter interface](/images/editing/front-matter/overview.png){: srcset="/images/editing/front-matter/overview.png 800w, /images/editing/front-matter/overview@2x.png 1600w"}{: .screenshot}

There are interfaces for different types of content. Values and key naming conventions dictate which interfaces are used.
Use these conventions to customise the editor for your team and clients. The available interfaces are listed below.

> Customise these interfaces further by adding sizes, formats, comments and defaults with [Options](/editing/options/).
{: .explainer}

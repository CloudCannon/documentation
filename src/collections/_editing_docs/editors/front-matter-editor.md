---
title: Front Matter
category: Editors
order: 5
---

Front matter is a [Jekyll feature](http://jekyllrb.com/docs/frontmatter/) to set custom variables for a page. Variables are defined in YAML between triple dashed lines at the top of a file. Access the variables in the page with [Liquid](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers). For example:

{% highlight liquid %}
---
title: Home
---
...
<title>{% raw %}{{ page.title }}{% endraw %} - Lion Wear</title>
...
{% endhighlight %}

CloudCannon provides an easy-to-use editor for front matter. Use the **Toggle Settings** button at top right of the [Visual Editor](/editing/editors/visual-editor/) or [Content Editor](/editing/editors/content-editor/) to access it.

![CloudCannon front matter interface](/images/editing/front-matter/overview.png){: .screenshot srcset="/images/editing/front-matter/overview.png 800w, /images/editing/front-matter/overview@2x.png 1600w"}

The inputs shown are dependent on your keys and values. See [Inputs](/editing/interfaces/inputs/) for a list of choices to tune the experience.
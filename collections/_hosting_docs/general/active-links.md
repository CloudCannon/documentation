---
title: Active Links
category: General
new_docs_link: https://cloudcannon.com/documentation/host/routing/#active-links
canonical_url: https://cloudcannon.com/documentation/host/routing/#active-links
order: 5
requirements:
  build: Any
  plan: Free
  hosting: CloudCannon
---

CloudCannon automatically adds the `cc-active` class to any `<a>` tags that point to the current page. Style the `cc-active` class with CSS to highlight it.

{% highlight css %}
.cc-active {
  opacity: 0.5;
  pointer-events: none;
}
{% endhighlight %}

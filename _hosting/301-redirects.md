---
title: 301 Redirects
order: 2
requirements:
  build: Any
  plan: Free
  hosting: CloudCannon
---

When you change the structure of your website, you should redirect the old URLs to the new pages.

To set up 301 redirects:

1. Create a file called `301.txt` at the root of your site
2. Specify the redirects in this file using the following syntax

{% highlight text %}
old-url new-url
{% endhighlight %}

CloudCannon supports redirects to external domains and wildcard matching with `*`. Here's an example file:

{% highlight text %}
/about.html /about/
/category/* /new-category
/should-have-been-elsewhere/ http://example.com
{% endhighlight %}

You can redirect to, but not from a URL fragment (e.g. `#example-heading`). The fragment is not passed to the server so cannot be processed by the redirect.
{: .info}

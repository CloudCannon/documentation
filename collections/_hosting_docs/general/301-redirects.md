---
title: 301 Redirects
category: General
new_docs_link: https://cloudcannon.com/documentation/host/routing/#301-redirects
canonical_url: https://cloudcannon.com/documentation/host/routing/#301-redirects
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
/should-have-been-elsewhere/ https://example.com
{% endhighlight %}

Redirects will only occur if the redirect-from page/location no longer exists within the site. If the page/location still exists within your site, this will be served instead of performing a redirect.

> You can redirect to, but not from a URL fragment (e.g. `#example-heading`). The fragment is not passed to the server so cannot be processed by the redirect.
{: .explainer}

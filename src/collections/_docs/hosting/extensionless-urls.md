---
title: Extensionless URLs
category: Hosting
order: 7
requirements:
  build: Any
  plan: Free
  hosting: CloudCannon
---

Extensionless URLs do not end with a trailing slash or a file extension. They map to the file in the same path with an `html`, `htm` or `xml` extension. For example, these URLs would serve the same file:

~~~
http://example.com/about
http://example.com/about.html
~~~

To serve files on extensionless URLs:

1. Go to *Site Settings* / *Hosting*
2. Enable **Serve Extensionless URLs** and optionally **Force Extensionless URLs**
3. Click **Update Hosting Details**

> **Serve Extensionless URLs** is on by default for new sites for compatibility with the latest Jekyll versions.
{: .explainer}

Enabling **Force Extensionless URLs** redirects URLs with `html`, `htm` or `xml` extensions to extensionless versions.
This ensures a single URL rather than serving the same file on two different URLs.

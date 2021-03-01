---
title: Web Robots
category: General
new_docs_link: https://cloudcannon.com/documentation/host/domains/#robots-txt
canonical_url: https://cloudcannon.com/documentation/host/domains/#robots-txt
order: 7
requirements:
  build: Any
  plan: Free
  hosting: CloudCannon
---
CloudCannon automatically serves a default *robots.txt* file on all [testing domains](/hosting/domains/testing-domains), to ensure that these sites are not indexed by search engines.

```
User-agent: *
Disallow: /
noindex: /
```

On a site with a [custom domain](/hosting/domains/custom-domains), you can override this by adding your own *robots.txt* file at the root of your site.
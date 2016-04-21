---
title: Pretty URLs
order: 4
requirements:
  build: Any
  plan: Free
  hosting: CloudCannon
---

Remove the `.html` extensions in the URLs on your site.

To prettify the URL for an about page:

1. Create a folder called `about` in the root directory of your site
2. Add the about page to the folder and name it `index.html`
3. Access your page at `/about/` or `http://example.org/about/`

Redirect any old URLs to the new locations with [301 Redirects](/hosting/301-redirects/).

Jekyll sites should use [permalinks](https://jekyllrb.com/docs/permalinks/), making this process more manageable.
{: .info}

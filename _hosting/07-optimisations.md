---
title: Optimisations
---
Only available for sites hosted by CloudCannon
{: .info}

CloudCannon optimises sites to make them load as fast as possible.

CloudCannon minifies CSS with [clean-css](https://github.com/GoalSmashers/clean-css) and JavaScript with [Uglifier](https://github.com/lautis/uglifier).
Assets referenced in the HTML and CSS are served from a CDN. External assets are not optimised.

Text based assets (e.g. HTML, CSS, JS, txt) are gzipped before being served.

All these optimisations are on by default, if you need to toggle optimisations for your site:

1. Go to the *Site Details* tab in site settings
2. Toggle *Minify and serve assets from CDN*
3. Click *Update Site*

![Optimisations Interface](/img/hosting/site-details.png){: .screenshot}

---
title: Optimisations
order: 7
requirements:
  build: Any
  plan: Free
  hosting: CloudCannon
---

CloudCannon optimises sites so they load as fast as possible.

CloudCannon minifies CSS with [clean-css](https://github.com/GoalSmashers/clean-css) and JavaScript with [Uglifier](https://github.com/lautis/uglifier). Externally hosted assets are not optimised.

Filenames containing **-min** or **.min** are not minified, as the filename suggests they have been minified already.
{: .info}

Assets referenced in the HTML and CSS are served from a CDN. Text based assets (e.g. HTML, CSS, and JavaScript) are gzipped before being served.

Optimisations are on by default, to toggle optimisations for your site:

1. Go to the *Site Details* tab in site settings
2. Toggle *Minify and serve assets from CDN*
3. Click *Update Site*

![Optimisations Interface](/img/hosting/site-details.png){: .screenshot}

---

To turn off optimisations on individual elements, add the `.cms-no-rewrite` class to the element.

~~~html
<a href="/newsletters/january-summary.pdf" class="cms-no-rewrite">Download Latest Newsletter</a>
~~~

The file will be optimised, but the reference on the element remains untouched.

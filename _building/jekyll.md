---
title: Jekyll
order: 2
---

CloudCannon builds any site that contains a `_config.yml` file in the root folder with Jekyll.

---

### Jekyll Versions

CloudCannon defaults to using Jekyll **2.4.0** but supports **2.5.3** and **3.0.3**. To configure the version:

1. Add a `version` key to your `_config.yml`
2. Set the `version` to **2.4.0**, **2.5.3** or **3.0.3**

~~~yaml
version: 3.0.3
~~~

Once the site has been built, the version is displayed on the *Site Status* page.

---

### Jekyll Plugins

CloudCannon does not support custom Jekyll plugins. With the exception of sites built with Jekyll **3.0.3** which includes `jekyll-paginate 1.1.0`. Contact support if you do require plugins for a site.

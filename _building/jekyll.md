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

CloudCannon plugin support is currently in private beta. To join, [contact support](mailto:support@cloudcannon.com) and request access.
{: .info}

To enable Jekyll plugins on a site:

1. Go to Site Settings / Details
2. Enable the Use Experimental Plugin Building option
3. Update the site.

Enabling Jekyll plugins will trigger a rebuild of the site.

![Enabling plugins](/img/building/plugins.png){: .screenshot srcset="/img/building/plugins.png 800w, /img/building/plugins@2x.png 1600w"}

Plugins can be added to a site in a couple ways:

- Add `.rb` files to the `_plugins` directory
- Add a `Gemfile`, this causes a `bundle install` to run before the build

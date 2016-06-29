---
title: Jekyll
order: 1
---

CloudCannon builds sites containing a `_config.yml` file in the root folder with Jekyll. Jekyll sites without plugins are built with the following command:

~~~bash
$ jekyll build --safe
~~~

---

### Versions

CloudCannon defaults to using Jekyll **2.4.0** but supports **2.5.3** and **3.0.3**.
The version is displayed in the *Status* section after each build.

To set the Jekyll version:

1. Add a `version` key to your `_config.yml`
2. Set the `version` to **2.4.0**, **2.5.3** or **3.0.3**

~~~yaml
version: 3.0.3
~~~

Use other Jekyll versions by adding `jekyll` to your `Gemfile` with [CloudCannon plugin support](#plugins).
{: .info}

Jekyll `3.1.0`, `3.1.1`, `3.1.2` and `3.1.3` are not supported due to a `jsonify` filter bug.
{: .warning}

---

### Plugins

Use community-contributed packages and run custom code to extend your Jekyll sites.

CloudCannon plugin support is in private beta. [Contact support](mailto:support@cloudcannon.com) to join.
{: .info}

To enable Jekyll plugins on a site:

1. Go to *Site Settings* / *Details*
2. Enable the **Use Experimental Plugin Building** option
3. Click **Update Site**

![Enabling plugins](/img/building/plugins.png){: .screenshot srcset="/img/building/plugins.png 800w, /img/building/plugins@2x.png 1600w"}

Enabling Jekyll plugins triggers a rebuild of the site. CloudCannon builds sites with plugins with the following commands:

~~~bash
$ bundle install
$ bundle exec jekyll build
~~~

Add plugins to a site in a couple of ways:

- Add `.rb` files to the `_plugins` directory
- Add plugins to your `Gemfile` in the root folder

Here's an example Gemfile:

~~~ruby
source 'https://rubygems.org'

group :jekyll_plugins do
  gem 'jekyll', '3.1.6'
  gem 'jekyll-sitemap', '0.10.0'
end
~~~

It's good practice to set your versions. Otherwise, Jekyll uses the latest version which could introduce breaking changes in future builds.
{: .info}

---
title: Versions
order: 2
requirements:
  build: Jekyll
  plan: Free
  hosting: Any
---

CloudCannon supports Jekyll versions between **2.4.0** and **3.2.1**.
New sites without the version specified default to version **3.2.1**.
The version is displayed in the *Status* section after each build.

To set the version **without** a `Gemfile`:

1. Add a `version` key to your `_config.yml`
2. Set the `version` as required

~~~yaml
version: 3.1.6
~~~

To set the version **with** a `Gemfile`:

1. Add the `jekyll` dependency to your `Gemfile`
2. Set the version as required

~~~ruby
source 'https://rubygems.org'
gem 'jekyll', '3.1.6'
~~~

Jekyll **3.1.0**, **3.1.1**, **3.1.2** and **3.1.3** are not supported due to a `jsonify` filter bug.
{: .warning}

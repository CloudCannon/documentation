---
title: Versions
category: Building
order: 2
requirements:
  build: Jekyll
  plan: Free
  hosting: Any
---

CloudCannon supports Jekyll versions after **2.4.0**.
New sites without the version specified default to version **3.2.1**.
The version is displayed in the *Status* section after each build.

To set the version:

1. Add a `Gemfile` to the root folder
2. Add the `jekyll` dependency to your `Gemfile`
3. Set the version as required

~~~ruby
source 'https://rubygems.org'
gem 'jekyll', '3.6.0'
~~~

> Jekyll **3.1.0**, **3.1.1**, **3.1.2** and **3.1.3** are not supported due to a `jsonify` filter bug.
{: .warning}

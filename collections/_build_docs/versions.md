---
title: Versions
category: Jekyll
order: 2
requirements:
  build: Jekyll
  plan: Free
  hosting: Any
---

CloudCannon supports Jekyll versions after **2.4.0**.
New sites without the version set use a default version.
The version is displayed in the *Status* section after each build.

> Set the version to avoid future breaking changes and version clashes across environments.
{: .explainer}

To set the version:

1. Add a `Gemfile` to the root folder
2. Add the `jekyll` dependency to your `Gemfile`
3. Set the version as required

~~~ruby
source "https://rubygems.org"
gem "jekyll", "~> 4.1.1"
~~~

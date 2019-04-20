---
title: Ruby Versions
category: General
order: 3
requirements:
  build: Jekyll
  plan: Free
  hosting: Any
---

CloudCannon supports Ruby versions using [rbenv](https://github.com/rbenv/rbenv). Sites without the version specified default to version **2\.5.x**.&nbsp;

Versions installed are:

1. 2\.3.8 (End of Life)
2. 2\.4.6
3. 2\.5.5
4. 2\.6.2

> If you require a Ruby version not listed above, please contact support. We will do our best to accommodate your needs.

### Setting your version

To set your version add a .ruby-version file in the root folder. This file should contain one of versions specified above.

Here's an example .ruby-version\:

2\.6.2

[Installing rbenv on your local environment](https://github.com/rbenv/rbenv#installation) will ensure the same version is used. It is considered best practice to set your ruby version per project. This ensures that local builds and CloudCannon builds use the same version of Ruby.
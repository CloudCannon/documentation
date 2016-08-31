---
title: Jekyll
order: 1
---

CloudCannon builds all new sites with Jekyll.

Sites **without** a `Gemfile` are built with:

~~~bash
$ jekyll build
~~~

Sites **with** a `Gemfile` are built with:

~~~bash
$ bundle install
$ bundle exec jekyll build
~~~

---

### Static

Static builds are supported for legacy reasons.
{: .info}

Static sites work in a [Jekyll](/building/jekyll/) build, gaining access to more editing features in CloudCannon.

In a static build, files are copied to the live site almost as is.
CloudCannon performs optimisations and processes static-specific hosting features on the files.

To force a static build for a site, add a file called `.nojekyll` to the root folder.

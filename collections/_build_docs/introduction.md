---
title: Introduction
category: General
order: 1
new_docs_link: https://cloudcannon.com/documentation/build/
canonical_url: https://cloudcannon.com/documentation/build/
---

CloudCannon builds all sites with Jekyll.

Sites **without** a `Gemfile` are built with:

```bash
$ jekyll build
```

Sites **with** a `Gemfile` are built with:

```bash
$ bundle install
$ bundle exec jekyll build
```

These commands are run in the root folder of your site.

> If your `Gemfile` isn’t in the root folder, set the `BUNDLE_GEMFILE` [environment variable](/builds/environments/) to tell the Bundler where to find it. Setting this requires that your gems are specified in the `_config.yml` file.
{: .explainer}

### Static

> Static sites work seamlessly in a [Jekyll](/builds/introduction/) build, gaining access to more editing features in CloudCannon.
{: .explainer}

In a legacy CloudCannon static build, files are copied to the live site almost as is. CloudCannon performs optimisations and processes static-specific hosting features on the files.

To force a legacy CloudCannon static build for a site, add a file called `.nojekyll` to the root folder. There's no need to set this except for sites built with legacy static features.
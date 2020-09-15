---
title: Configuration
category: Jekyll
order: 1
requirements:
  build: Jekyll
  plan: Free
  hosting: Any
---

Jekyll offers a number of configuration options for use on the command line. Configure these and other build options specific to CloudCannon per site.

To change a command line build option:

1. Go to the *Site Settings* / *Build* section
2. Change details for one or more options
3. Click **Update Build Details**

> See in-depth details for configuring [Environments](/builds/environments/) and [Optimisations](/builds/optimisations/).
{: .explainer}

![Site Settings Build Interface](/images/builds/configuration.png){: .screenshot srcset="/images/builds/configuration.png 800w, /images/builds/configuration@2x.png 1600w"}

### Custom Gemfile

By default CloudCannon uses `/Gemfile` as the gem source. To change this you can set the `BUNDLE_GEMFILE` environment variable. e.g. `BUNDLE_GEMFILE=src/Gemfile`.

> Setting the `BUNDLE_GEMFILE` environment variable requires that your gems are specified in the `_config.yml` file.
{: .explainer.warning}
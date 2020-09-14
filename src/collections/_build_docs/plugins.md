---
title: Plugins
category: General
order: 4
requirements:
  build: Jekyll
  plan: Free
  hosting: Any
---

Use community-contributed packages and run custom code to extend your sites. All sites on CloudCannon support Jekyll plugins.

Add plugins to a site in a couple of ways:

* Add `.rb` files to the `_plugins` folder
* Add plugins to your `Gemfile` in the root folder

Here's an example Gemfile:

```ruby
source 'https://rubygems.org'

gem 'jekyll', '3.1.6'

group :jekyll_plugins do
  gem 'jekyll-sitemap', '0.10.0'
end
```

> It's good practice to set your versions. Otherwise, Jekyll uses the latest version which could introduce breaking changes in future builds.
{: .explainer}

### Caching bundle installs

Installing your gems can take quite some time, to save time on consecutive builds CloudCannon does the following:

1. Installs your gem to a local folder
2. Caches that folder based on your Gemfile.lock
3. When no local gems are found, build your site using the cached installs from your previous builds

To disable this feature, go to *Site Settings / Build*.

> Older sites on CloudCannon will have this caching disabled to prevent changes to their build environment. Enabling this can greatly improve editing experience.
{: .explainer}

### The cloudcannon-jekyll gem

In order to optimise the editing interfaces for your site, CloudCannon injects an open source plugin called `cloudcannon-jekyll` before building your site.
This generates JSON files with titles, collections, build settings and other metadata that CloudCannon displays for your editors.

By default, data files are not included in the generated output. Including this would enable you to populate select and multiselect inputs from data files.

To include all `data`, add the following to your `_config.yml`:

```yaml
cloudcannon:
  data: true
```

Include only select `data` with specific keys:

```yaml
cloudcannon:
  data:
    authors: true
    offices: true
```

Although not necessary, if you would like to generate the details file locally, add the following to your `Gemfile`:

```ruby
gem 'cloudcannon-jekyll', :group => :jekyll_plugins
```


> Building with `safe: true` disables all plugins, including `cloudcannon-jekyll`. This is not recommended as it degrades the editing experience.
{: .explainer.warning }

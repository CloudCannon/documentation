---
title: Markdown
category: Jekyll
order: 5
new_docs_link: https://cloudcannon.com/documentation/build/setup/markdown/
canonical_url: https://cloudcannon.com/documentation/build/setup/markdown/
requirements:
  build: Jekyll
  plan: Free
  hosting: Any
---

CloudCannon officially supports two Markdown processors for Jekyll. Jekyll uses these to convert your Markdown for your live site, and CloudCannon uses it to convert your Markdown for your editors.

### Kramdown

Kramdown is the default Markdown processor for Jekyll.

To use Kramdown for your build and editors:

1. Remove or set the `markdown` field to `kramdown` in `_config.yml`
2. Set your [options](https://kramdown.gettalong.org/options.html){: target="_blank" rel="noopener"} in the `kramdown` field in `_config.yml` (optional)

#### _config.yml

~~~yaml
kramdown:
  input: GFM
  auto_ids: true
~~~

### CommonMark

CommonMark is new Markdown specification which aims to become standard and unambiguous.

To use CommonMark for your build and editors:

1. Add the `jekyll-commonmark` gem to your `Gemfile`
2. Set the `markdown` field to `CommonMark` in `_config.yml`
3. Set your options in the `commonmark` field in `_config.yml`

#### Gemfile

~~~ruby
source 'https://rubygems.org'

gem 'jekyll', '3.8.5'

group :jekyll_plugins do
  gem 'jekyll-commonmark', '1.3.1'
end
~~~

#### _config.yml

~~~yaml
markdown: CommonMark

commonmark:
  options: ["SMART", "UNSAFE"]
  extensions: ["strikethrough", "table"]
~~~

> The `UNSAFE` options is **required** for HTML content inside your Markdown files to render correctly.
{: .explainer}

CommonMark does not support a syntax to define attributes on elements, in order to preserve attributes, that content saves as HTML within your Markdown files.

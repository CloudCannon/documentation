---
title: Comments
category: Options
new_docs_link: https://cloudcannon.com/documentation/edit/editing/configuration/#comments
order: 6
requirements:
  build: Jekyll
  plan: Free
  hosting: Any
---

Helper text to provide additional context. Configured globally in `_config.yml` or per file in front matter with a `_comments` object:

~~~yaml
_comments:
  title: The page title
  output: Does this item have a dedicated page?
  brand_colour: The primary brand colour
  footer: Update the details in the footer
~~~

Alternatively, configure comments on a custom scope with Jekyll defaults:

~~~yaml
defaults:
  - scope:
      path: ''
      type: ''
    values:
      _comments:
        title: The page title
        output: Does this item have a dedicated page?
        brand_colour: The primary brand colour
        footer: Update the details in the footer
~~~

Comments are displayed for the same keys in the `_comments` object.

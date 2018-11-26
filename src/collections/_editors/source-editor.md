---
title: Source Editor
category: Editing
order: 3
requirements:
  build: Any
  plan: Free
  hosting: Any
---

The *Source Editor* is used to make edits within CloudCannon on any text-based file. It is available to the owner and developers of the site.
Features include syntax highlighting, line numbers, multiple cursors, code linting and find/replace.

![Source Editor](/images/editing/source-editor.png){: srcset="/images/editing/source-editor.png 800w, /images/editing/source-editor@2x.png 1600w"}{: .screenshot}

### Options

To change the appearance and behaviour of the *Source Editor*, add some or all of the following options to your `_config.yml` file:

{% highlight yaml %}
_source_editor:
  tab_size: 2
  show_gutter: false
  theme: dawn
{% endhighlight %}

| Option | Values |
| ------ | ------ |
| tab_size | Integer (optional, defaults to *4*) |
| theme | String, one from [themes](https://github.com/ajaxorg/ace/tree/v1.2.9/lib/ace/theme) (optional, defaults to *monokai*) |
| show_gutter | *true* or *false* (optional, defaults to *true*) |

`tab_size` controls how many spaces lines are auto indented.

`theme` controls the appearance of the editor.

`show_gutter` toggles line numbers and code folding controls.
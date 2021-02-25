---
title: Source Editor
category: Editors
new_docs_link: https://cloudcannon.com/documentation/edit/interfaces/source-editor/
canonical_url: https://cloudcannon.com/documentation/edit/interfaces/source-editor/
order: 3
themes:
- ambiance
- chaos
- chrome
- clouds
- clouds_midnight
- cobalt
- crimson_editor
- dawn
- dracula
- dreamweaver
- eclipse
- github
- gob
- gruvbox
- idle_fingers
- iplastic
- katzenmilch
- kr_theme
- kuroir
- merbivore
- merbivore_soft
- mono_industrial
- pastel_on_dark
- solarized_dark
- solarized_light
- sqlserver
- terminal
- textmate
- tomorrow
- tomorrow_night
- tomorrow_night_blue
- tomorrow_night_bright
- tomorrow_night_eighties
- twilight
- vibrant_ink
- xcode
---

The *Source Editor* is used to make edits within CloudCannon on any text-based file. It is available to the owner and developers of the site.
Features include syntax highlighting, line numbers, multiple cursors, code linting and find/replace.

![Source Editor](/images/editing/editors/source-editor.png){: srcset="/images/editing/editors/source-editor.png 800w, /images/editing/editors/source-editor@2x.png 1600w"}{: .screenshot}

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
| theme | String, one from [themes](#themes) (optional, defaults to *monokai*) |
| show_gutter | *true* or *false* (optional, defaults to *true*) |

`tab_size` controls how many spaces lines are auto indented.

`theme` controls the appearance of the editor.

`show_gutter` toggles line numbers and code folding controls.

![Customised Source Editor](/images/editing/editors/source-editor-customisation.png){: srcset="/images/editing/editors/source-editor-customisation.png 800w, /images/editing/editors/source-editor-customisation@2x.png 1600w"}{: .screenshot}

### Themes

Below are all other available themes:

{% for theme in page.themes %}`{{ theme }}` {% endfor %}

---
title: Rich Text Options
category: Options
order: 4
requirements:
  build: Any
  plan: Free
  hosting: Any
---

### Toolbars

Control the toolbar options for your clients or editors to increase focus on the content at hand.

Set toolbar options for the [Content Editor](/editing/editors/content-editor/) with the `content` key, and [Editable Regions](/editing/interfaces/editable-regions/) using the `_block` and `_text` keys. Options for Rich Text front matter interfaces are specified by matching key names.

```yaml
_options:
  some_markdown:
    bold: true
    table: true
  _text:
    italic: true
  _block:
    format: p h3
    undo: true
    redo: true
  content:
    format: p h1 h2 h3 h4 h5 h6 pre address div
    bold: true
    numberedlist: true
    code: true
    table: true
    right: align-to-right
    styles: /_sass/_content-typography.scss
    embed: true
```

You can also set options directly on elements for [Editable Regions](/editing/editable-regions/):

```html
<p class="editable" data-cms-options='{"bold": true, "italic": true}'>...</p>
```

> The most specific options that apply to an interface are used, less specific options that still apply are ignored. In order of specificity: `data-cms-options` attributes, front matter and Jekyll defaults, then globally in `_config.yml`.
{: .explainer}

The complete list of options follows, all values can either be *true* or *false* unless specified otherwise:

| Option | Values |
| --- | --- |
| bold | &nbsp; |
| italic | &nbsp; |
| removeformat | &nbsp; |
| link | &nbsp; |
| undo | &nbsp; |
| redo | &nbsp; |
| underline | &nbsp; |
| strike | &nbsp; |
| subscript | &nbsp; |
| superscript | &nbsp; |
| code (unavailable for `_text`) | &nbsp; |
| format (unavailable for `_text`) | *true*, *false* or space separated options |
| blockquote (unavailable for `_text`) | &nbsp; |
| horizontalrule (unavailable for `_text`) | &nbsp; |
| numberedlist (unavailable for `_text`) | &nbsp; |
| bulletedlist (unavailable for `_text`) | &nbsp; |
| outdent (unavailable for `_text`) | &nbsp; |
| indent (unavailable for `_text`) | &nbsp; |
| image (unavailable for `_text` or *Rich Text* fields) | &nbsp; |
| embed (unavailable for `_text`) | &nbsp; |
| table (unavailable for `_text`) | &nbsp; |
| styles (unavailable for `_text`) | *false*, or path to source CSS file |
| left (unavailable for `_text`) | *false* or string of class name |
| center (unavailable for `_text`) | *false* or string of class name |
| right (unavailable for `_text`) | *false* or string of class name |
| justify (unavailable for `_text`) | *false* or string of class name |

### Embedding Media

Allow your editors to embed YouTube, Vimeo, Tweets and other media into their content. Embedded content is sanitised to mitigate XSS risks, which includes removing `style` and `script` tags.

```yaml
_options:
  content:
    embed: true
```

> Add the scripts to the end of pages where embedded content is added to enable the same behaviour (e.g. link the Twitter script that transforms blockquotes into Tweets when a front matter field is **true**).
{: .explainer}

### Styles

Add predefined styles in plain CSS for your clients and team members to use in the Visual Editor, Content Editor and Front Matter interfaces.

```yaml
_options:
  content:
    styles: /css/content.css
```

The file can have any extension, but must contain only plain CSS and be a source file. Selectors must specify an element and one class in order to be included in the styles dropdown. Styles with incompatible selectors are included in the editor, but not shown as options.

```css
p.callout { /* Can be applied to blocks of content */
  margin: 10px;
  border: 1px solid #f5f5f5;
  background-color: #eee;
}

span.big-blue-text { /* Can be applied to inline content */
  font-size: 2rem;
  color: blue;
}

h2 { /* Applied to content, excluded from style dropdown */
  font-family: cursive;
}

.center-this-text { /* Excluded from style dropdown, used as center class described below */
  text-align: center;
}
```

> Custom styles in the Visual Editor requires the same styles on your live site, otherwise the class is applied but has no visual effect.
{: .explainer}

Use the justification options to specify classes for alignment rather than the dropdown for a better editing experience:

```yaml
_options:
  _block:
    left: align-left
    center: center-this-text
    right: align-right
    justify: full-width-text
```

> Be sure to include these classes in your styles CSS for them to take effect.
{: .explainer}
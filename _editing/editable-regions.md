---
title: Editable Regions
order: 4
---

Define *Editable Regions* to set the content clients and team members can update in the [Visual Editor](/editing/visual-editor/).

*Editable Regions* have yellow borders in the [Visual Editor](/editing/visual-editor/), indicating what areas are updatable. Define large sections to give full control, or limit access by defining select images and areas of text.

To define an *Editable Region*:

1. Identify the HTML element you want editable
2. Add `class="editable"` to the HTML element

Define multiple classes if the element already has a class, for example: `<div class="content editable">`.
{: .info}

The [Visual Editor](/editing/visual-editor/) supports JavaScript, however, HTML rendered with JavaScript is not editable.

The *Editable Region* interface used depends on the defined element:

---

### Text Elements

`p` `h1` `h2` `h3` `h4` `h5` `h6`

Editable text elements provide an interface to enter text, create hyperlinks, and format with bold and italics.

![Text editable region in the Visual Editor](/img/editing/editable-regions/text-editable.png){: .screenshot srcset="/img/editing/editable-regions/text-editable.png 800w, /img/editing/editable-regions/text-editable@2x.png 1600w"}

---

### Image Elements

`img`

Editable image regions provide options to replace or crop the existing image, and update the image description. Images can be replaced with an image from an external URL, file upload or a previously uploaded image.

CloudCannon ensures that new images do not break layouts by cropping them to the **size of the image being replaced**. Users move and resize images to specify how they are cropped in place.

![Image editable region in the Visual Editor](/img/editing/editable-regions/image-editable.png){: .screenshot srcset="/img/editing/editable-regions/image-editable.png 800w, /img/editing/editable-regions/image-editable@2x.png 1600w"}

---

### Block Elements

`div` `section` `article` `aside` `footer` `header` `nav`

Editable block elements are rich editable regions with options to format and add: headings, bold, italics, hyperlinks, quotes, lists and images.

![Block editable region in the Visual Editor](/img/editing/editable-regions/block-editable.png){: .screenshot srcset="/img/editing/editable-regions/block-editable.png 800w, /img/editing/editable-regions/block-editable@2x.png 1600w"}

---

### Inline Elements

`a` `span` `small` `strong` `em` `i` `b` `sub` `sup` `li` `dd` `dt` `td` `th`

Editable inline elements provide an interface to change smaller sections of text without formatting.

![Inline editable region in the Visual Editor](/img/editing/editable-regions/inline-editable.png){: .screenshot srcset="/img/editing/editable-regions/inline-editable.png 800w, /img/editing/editable-regions/inline-editable@2x.png 1600w"}

---

### Markdown Content Elements

~~~html
<div>{% raw %}{{ content }}{% endraw %}</div>
~~~

Markdown content elements are elements which only contain `{% raw %}{{ content }}{% endraw %}`. CloudCannon makes this element editable on any page with a Markdown file as the source. The editing controls are determined by the surrounding element: `div` elements are block level editables, `span` are inline level editables.

Elements containing other elements and `{% raw %}{{ content }}{% endraw %}` are not editable. Layouts containing more than one `{% raw %}{{ content }}{% endraw %}` are not editable. For these cases, the [Content Editor](/editing/content-editor/) is available for editing.
{: .info}

![Markdown content region editable in the Visual Editor](/img/editing/editable-regions/markdown-editable.png){: .screenshot srcset="/img/editing/editable-regions/markdown-editable.png 800w, /img/editing/editable-regions/markdown-editable@2x.png 1600w"}

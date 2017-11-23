---
title: Editable Regions
category: Editing
order: 4
requirements:
  build: Any
  plan: Free
  hosting: Any
---

Define *Editable Regions* to set the content clients and team members can update in the [Visual Editor](/editing/visual-editor/).

*Editable Regions* have yellow borders in the [Visual Editor](/editing/visual-editor/), indicating what areas are updatable. Define large sections to give full control, or limit access by defining select images and areas of text.

To define an *Editable Region*:

1. Identify the HTML element you want editable
2. Add `class="editable"` to the HTML element

> Define multiple classes if the element already has a class, for example: `<div class="content editable">`.

The [Visual Editor](/editing/visual-editor/) supports JavaScript, however, HTML rendered with JavaScript is not editable.

The *Editable Region* interface used depends on the defined element:


### Text Elements

`p` `h1` `h2` `h3` `h4` `h5` `h6`

Editable text elements provide an interface to enter text, create hyperlinks, and format with bold and italics.

![Text editable region in the Visual Editor](/images/editing/editable-regions/text-editable.png){: srcset="/images/editing/editable-regions/text-editable.png 800w, /images/editing/editable-regions/text-editable@2x.png 1600w"}
{: .has-screenshot}


### Image Elements

`img`

Editable image regions provide options to replace or crop the existing image, and update the image description. Images are replaced with external URLs, file uploads or previously uploaded images.

CloudCannon ensures that new images do not break layouts by cropping them to the **size of the image being replaced**. Users move and resize images to specify how they are cropped in place. The original and cropped images are placed inside the `uploads` and `uploads/versions` folders respectively.

To change the uploads folder:

1. Create or open `_config.yml` in the root folder
2. Add an `uploads_dir` variable with the path set as required

~~~
uploads_dir: "assets/images"
~~~

To enable the option to enter a URL directly:

1. Create or open `_config.yml` in the root folder
2. Set the `_editable_regions.image.url_src` to **true**

~~~
_editable_regions:
  image:
    url_src: true
~~~

> This option is disabled by default to avoid breaking design changes, since the image size can't be guaranteed when setting `src` directly.

![Image editable region in the Visual Editor](/images/editing/editable-regions/image-editable.png){: srcset="/images/editing/editable-regions/image-editable.png 800w, /images/editing/editable-regions/image-editable@2x.png 1600w"}
{: .has-screenshot}


### Block Elements

`div` `section` `article` `aside` `footer` `header` `nav`

Editable block elements are rich editable regions with options to format and add: headings, bold, italics, hyperlinks, quotes, lists and images.

![Block editable region in the Visual Editor](/images/editing/editable-regions/block-editable.png){: srcset="/images/editing/editable-regions/block-editable.png 800w, /images/editing/editable-regions/block-editable@2x.png 1600w"}
{: .has-screenshot}


### Inline Elements

`a` `span` `small` `strong` `em` `i` `b` `sub` `sup` `li` `dd` `dt` `td` `th`

Editable inline elements provide an interface to change smaller sections of text without formatting.

![Inline editable region in the Visual Editor](/images/editing/editable-regions/inline-editable.png){: srcset="/images/editing/editable-regions/inline-editable.png 800w, /images/editing/editable-regions/inline-editable@2x.png 1600w"}
{: .has-screenshot}


### Markdown Content Elements

~~~html
<div>{% raw %}{{ content }}{% endraw %}</div>
~~~

Markdown content elements are elements which only contain `{% raw %}{{ content }}{% endraw %}`. CloudCannon makes this element editable on any page with a Markdown file as the source. The editing controls are determined by the surrounding element: `div` elements are block level editables, `span` are inline level editables.

> Elements containing other elements and `{% raw %}{{ content }}{% endraw %}` are not editable. Layouts containing more than one `{% raw %}{{ content }}{% endraw %}` are not editable. For these cases, the [Content Editor](/editing/content-editor/) is available for editing.

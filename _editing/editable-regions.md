---
title: Editable Regions
order: 4
---

*Editable Regions* let you control what users can update using the [Visual Editor](/editing/visual-editor).

To add an editable region, add `class="editable"` to an HTML element. Define multiple classes if the element already has a class, for example: `<div class="content editable">`.

The [Visual Editor](/editing/visual-editor/) shows yellow boxes around editable elements to indicate they can be updated.

There are a number of ways to use editable regions. To allow everything to be updated, you could put an editable region on the main content `<div>` in your HTML. Alternatively, restrict the editable regions to specific parts of your site (e.g. select images, paragraphs and lists).

Editable regions behave differently depending on what element they are applied to:

### Image Elements: img

Image editable regions have options to replace/crop the existing image, update the image description. Images are replaced with another previously uploaded, from an external URL or a new upload.

![Upload Image](/img/editing/3.png)

CloudCannon ensures that new images do not break layouts by cropping them to the size of the image being replaced. Users move and resize images to specify how they are cropped in place.

![Crop](/img/editing/4.png)

---

### Text Elements: p, h1, h2, h3, h4, h5, h6

Editable text elements provide an interface to update text and format with bold, italics and hyperlinks.

![Text Elements](/img/editing/5.png)

---

### Inline Elements: a, span, small, strong, em, i, b, sub, sup, li, dd, dt, td, th
Editable inline elements provide an interface to update smaller sections of text without formatting.

![Inline Elements](/img/editing/6.png)

---

### Block Elements: div, section, article, aside, footer, header, nav

Editable block elements are rich editable regions with options to format and add: headings, bold, italics, hyperlinks, quotes, lists and images.

![Block Elements](/img/editing/7.png)

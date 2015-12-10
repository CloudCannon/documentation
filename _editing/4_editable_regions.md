---
title: Editable Regions
---

Editable regions let you control exactly what users can update using the [Visual Editor](/editing/visual-editor).

Adding an editable region is simple, just add `class="editable"` to an HTML element. If the element already has a class, you can have multiple classes like this: `<div class="content editable">`.

When you switch to the [Visual Editor](/editing/visual-editor), you’ll see a yellow box around that element, indicating that it is editable.

There are a number of ways to use editable regions. To allow everything to be updated, you could put an editable region on the main content `<div>` in your HTML. Alternatively, restrict the editable regions to specific parts of your site (e.g. select images, paragraphs and lists).

Editable regions behave differently depending on what element they are applied to:

### img

Gives user options to alter the current image, update the images description and replace the existing image with another previously uploaded, from the web or a new upload.

![Upload Image](/img/editing/3.png)

CloudCannon ensures that new images are the exact same size by cropping the image. The user can drag/move and resize the image to specify how it is cropped in place.

![Crop](/img/editing/4.png)

---

### Text Elements: p, h1, h2, h3, h4, h5, h6

Gives options for bold, italics and links.

![Text Elements](/img/editing/5.png)

---

### Inline Elements: span, strong, em

Restricted to updating text only.

![Inline Elements](/img/editing/6.png)

---

### Block Elements: div, section, article, aside, footer, header, nav

On block elements you can set headings, bold, italics, links, quotes, lists and images.

![Block Elements](/img/editing/7.png)

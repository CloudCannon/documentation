---
title: Editable Regions
---

Editable regions let your control exactly what users can update using the Visual Editor.

Adding an editable region is simple, just add `class="editable"` to an HTML element. If the element already has a class, you can have multiple classes like this: `<div class="content editable">`.

When you switch to the Visual Editor, you’ll see a yellow box around that element indicating it’s updatable.

There’s lots of ways you can use editable regions. To allow everything to be updated, you could put an editable region on the main content `<div>` in your HTML. To have only specific parts to be updated, you could put the editable region on specific images, paragraphs and lists.

Editable regions behave differently depending on what element you put them on. We current support:

### img

Gives user options to alter the current image, update the images description and replace the existing image with another previously uploaded, from the web or a new upload.

![Upload Image](/img/editing/3.png)

If you’ve specified a width and height on an image, CloudCannon ensures that new images are the exact same size by cropping the image. The user can drag and move the image to specify how it is cropped.

![Crop](/img/editing/4.png)

---

### Text Elements: p, h1, h2, h3, h4, h5, h6

Gives options for bold, italics and links

![Text Elements](/img/editing/5.png)

---

### Inline Elements: span, strong, em

Only allows updating text

![Inline Elements](/img/editing/6.png)

---

### Block Elements: div, section, article, aside, footer, header, nav

On block elements you can set headings, bold, italics, links, quotes, lists and images.

![Block Elements](/img/editing/7.png)
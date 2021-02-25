---
title: Upload Options
category: Options
new_docs_link: https://cloudcannon.com/documentation/edit/editing/configuration/#upload-options
canonical_url: https://cloudcannon.com/documentation/edit/editing/configuration/#upload-options
order: 3
requirements:
  build: Any
  plan: Free
  hosting: Any
---

### File Uploads

Keep a consistent file structure by setting up an uploads path structure. Images, documents and other files in the editor are uploaded to this location.

```yaml
_options:
  image: # Front matter field
    uploads_dir: "uploads/front-matter-images/:title"
  content: # Content Editor and block Editable Regions
    uploads_dir: "uploads/:year/:month/:day/:title"
```

The `:categories`, `:year`, `:month`, `:day` and `:title` dynamic fields resolve to the associated Jekyll fields for the containing file.

You can also set `site.uploads_dir` in your `_config.yml` to set it everywhere:

```yaml
uploads_dir: "uploads/:categories/:year/:month/:day/:title"
```

### Image Uploads

Control the size and format of images clients or team members upload through the interface. Images are resized and converted automatically.

Set options for images uploaded with the [Content Editor](/editing/editors/content-editor/) and [block element Editable Regions](/editing/interfaces/editable-regions/#block-elements) using the `content` key. Options for front matter interfaces are specified by matching key names.

```yaml
_options:
  image_path:
    width: 90
    height: 120
    resize_style: "contain"
    mime_type: "image/jpeg"
    expandable: true
  content:
    width: 90
    height: 120
    resize_style: "cover"
    mime_type: "image/png"
```

| Option | Values |
| --- | --- |
| width | Integer |
| height | Integer |
| resize\_style | *contain*, *cover* or *stretch* (optional, defaults to *contain*) |
| mime\_type | *image/jpeg*, *image/png* (optional, defaults to uploaded type if supported) |
| expandable | *true* or *false* (optional, defaults to *false*) |

`mime_type` sets what format the image is converted into on upload. `width` and `height` define a bounding box. `resize_style` defines how uploaded images are resized with respect to that box:

* `cover` ensures the image covers the bounding box
* `contain` ensures the image fits inside the bounding box
* `stretch` ignores aspect ratio to resize the image to the bounding box

`expandable` set to *true* allows images to be enlarged past original dimensions.

### Size Attributes

CloudCannon automatically adds size attributes (width, height, sizes) to the HTML for images uploaded in the [Content Editor](https://docs.cloudcannon.com/editing/editors/content-editor/) and [Editable Regions](https://docs.cloudcannon.com/editing/interfaces/editable-regions/).

This allows browsers to size `<img>` elements before CSS and images are loaded. Otherwise, the page can shift around in front of the viewer as images are loaded and elements are resized.

These attributes are also required for&nbsp;`srcset` attributes to work properly. Browsers assume by default that the width of an image is 100vw. If the image has a `srcset` but no explicit size attributes, it will appear full width regardless of the `srcset`.

In cases where these size attributes are not right for your layout, some simple CSS can ensure that your images are sized correctly on the page. Define a width for your images, then set `height` to `auto`. This will allow the browser to calculate the appropriate height for your image, based on the width.

```css
img {
    max-width: 100%;
    height: auto;
}
```
---
name: Image
elements:
  - img
image:
---

Image *Editable Regions* provide options to change the image and description. Images can be replaced with new file uploads, previously uploaded images or external URLs.

CloudCannon ensures that new images do not break layouts by cropping them to the **size of the image being replaced** (not the element). After choosing a replacement image, users move and resize images to specify how they are cropped in place. The original and cropped images are placed inside the `/uploads` folder, but this can be changed in [File Upload options](/editing/options/#file-uploads).

> Retina versions of images are generated from uploads and suffixed with `@2x`, resolution permitting.
{: .explainer}

To enable the option to enter a URL directly:

1. Create or open `_config.yml` in the root folder
2. Set the `_editable_regions.image.url_src` to **true**

~~~
_editable_regions:
  image:
    url_src: true
~~~

> This option is disabled by default to avoid breaking design changes, since the image size can't be guaranteed when setting `src` directly.
{: .explainer}

![Image editable region in the Visual Editor](/images/editing/editable-regions/image-editable.png){: srcset="/images/editing/editable-regions/image-editable.png 800w, /images/editing/editable-regions/image-editable@2x.png 1600w"}{: .screenshot}

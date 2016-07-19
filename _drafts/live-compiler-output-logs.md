---
title: Live Compiler Output Logs
type: minor
---

This release adds live output from jekyll builds. This also allows you to view output from successful builds not just errored builds.

![Markdown content region editable in the Visual Editor](/img/editing/editable-regions/markdown-editable.png){: .screenshot srcset="/img/editing/editable-regions/markdown-editable.png 800w, /img/editing/editable-regions/markdown-editable@2x.png 1600w"}

Features:

* Live outputs from jekyll builds. Click *Show Output* to view a live stream of logs during a build.
* Output of a successful build is available on the status page

Fixes:

* Apostrophes in post titles no longer slugify to a dash
* Better handling of invalid authentication states
* Image Cropper not working in certain cases
* Preventing move to new folder if the folder has the same name
* Missing images in the editor have a more informative error message
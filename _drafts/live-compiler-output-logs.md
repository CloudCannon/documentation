---
title: Live Compiler Build Logs
type: minor
---


This release adds live output from jekyll builds. This also allows you to view output from successful builds not just errored builds.

![View the live output from any build](/img/building/live-output.png){: .screenshot srcset="/img/building/live-output.png 800w, /img/building/live-output@2x.png 1600w"}

Features:

* Live outputs from jekyll builds. Click *Show Output* to view a live stream of logs during a build.
* Output of a successful build is available on the status page


Fixes:

* Apostrophes in post titles no longer slugify to a dash
* Better handling of invalid authentication states
* Image Cropper not working in certain cases
* Preventing move to new folder if the folder has the same name
* Missing images in the editor have a more informative error message
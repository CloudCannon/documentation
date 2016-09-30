---
title: Live Compiler Build Logs
type: minor
---


This release adds live output from Jekyll builds. This also allows you to view output from successful builds rather than only failed builds.

![View the live output from any build](/img/building/live-output.png){: srcset="/img/building/live-output.png 800w, /img/building/live-output@2x.png 1600w"}
{: .has-screenshot}

**Features:**

* Live outputs from Jekyll builds. Click **Show Output**&nbsp;in the sidebar or *Status* section to view a live stream of logs during a build
* Output of a successful build is available in the *Status* section


**Fixes:**

* Apostrophes in post titles no longer slugify to a dash
* Better handling of invalid authentication states
* Image cropper not working in certain cases
* Preventing **Move to new folder** if the folder has the same name
* Missing images in the *Visual* and *Content Editors* have a more informative error message
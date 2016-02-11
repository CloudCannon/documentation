---
title: Colour Picker
type: minor
---

This release adds a colour picker to the range of interfaces for Jekyll front matter and YAML.

![CloudCannon front matter interface including new colour picker](/img/editing/front-matter/overview.png){: .screenshot srcset="/img/editing/front-matter/overview.png 800w, /img/editing/front-matter/overview@2x.png 1600w"}

Features:

* Check for changes call on Status page for Dropbox connected sites.
* Colour picker added to [front matter interfaces](/editing/front-matter/).
* Improved performance when syncing from storage provider webhooks.
* Switch to Bitbucket webhooks from Bitbucket services (deprecated).
* Branch connected shown on storager provider settings for GitHub and Bitbucket sites.

Fixes:

* Fixed error appearing the first time image button was activated in the content editor.
* Fixed an issue where site icons were not displayed correctly on the base domain section.
* Fixed an issue when HTML was escaped in Liquid `highlight` tags.

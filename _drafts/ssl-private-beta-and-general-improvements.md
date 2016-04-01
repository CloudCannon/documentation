---
title: SSL Private Beta and General Improvements
type: major
---


This release announces the start of our SSL private beta, new filetypes, better pasting from word, a new collection configure interface and general improvements/fixes. To join the beta contact support.

Features:

* Custom SSL support released.
* Better Word pasting
* Configuring collection metadata is now edited in a sidebar consistent with the editor views
* Added `webp` and `cur` file types
* Added support for empty arrays in front matter (defaults to string entries)
* Improved documentation


Fixes:

* Collections tab visible when _defaults are the only entries
* Empty strong, em and u tags removed from Markdown output
* DNS configuration preventing invalid spacing
* Fixed issues with windows line endings
* Entities not escaped when displaying breadcrumb in editor
* Spacing around images in Markdown editor adjusted to represent position relative to text
* Dragging an image onto and image editable is handled more gracefully
* Potential memory leaks fixed
* Empty strings or nulls in the front matter now result in no value in yaml
* Issues with pages without front matter fixed
* Multiselect input fixes, including object support, and spacing
* Safari style on DNS settings
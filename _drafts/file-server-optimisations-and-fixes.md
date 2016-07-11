---
title: File server optimisations and post publish improvements
type: minor
---


This release contains SEO improvements for the file server and a better publish workflow.

Features:

* Improved publish for draft posts. When a date is specified in the front matter, CloudCannon will use that for the published filename. When the date field is empty, CloudCannon will populate it with today's date and use that in the filename. If there is no date field, CloudCannon will use today's date in the filename.
* YAML/CSV only copies the structure from previous entry when creating a new array entry
* HTML files are served with a utf-8 character encoding
* URLs ending with /index.html redirect to a version without that included


Fixes:

* Better preloading on route changes after uploading large lists of files
* @import no longer prevents compression if the imports are external URLs
* Context menu missing for folders in file browser
* Fixed error messages on file browser load
* Protected GitHub branches now disconnect if a push fails
* Code tags no longer escape html characters when saving to markdown
* Fixed issue preventing compression on a few sites
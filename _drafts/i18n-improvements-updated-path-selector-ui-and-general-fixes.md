---
title: 'I18n improvements, updated path selector UI and general fixes'
type: minor
---


This release includes a number improvements to i18n, source configurations and an updated path selector UI.

Features:

* _path front matter now defaults to upload from computer and has select from browser as a sub option.
* Localised sites now inject the language code onto the html lang attribute
* i18n state added to the status page of localised sites


Fixes

* Full page activity feed for non-developers
* Collection tab broken when source is set to . or ./
* i18n options are now only shown for enterprise sites with locales
* CSS compressor no longer makes unsafe optimisations
* Embedded data urls no longer break after CSS compression
* Path correction in i18n produces the correct url
* Assets within the editor are no longer cached
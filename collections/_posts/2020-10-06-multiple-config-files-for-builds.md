---
title: Multiple config files for builds
type: minor
---

This release enables multiple config options for builds, access to compiled CSS on the editor and general bug fixes.

**Features:**

* Enabled option for multiple config files for the build configuration.
* Using compiled CSS files for \`\_options.styles\` toolbar selector.
* Added session timeout validations and messaging.

**Fixes:**

* Fixed cursor focus when creating a new file on file browser.
* Fixed CSV parser breaking on content editor for \`\_time\` fields with incorrect values.
* Fixed country class not being added for some pages when Geolocation enabled.
* Fixed pre-build script not failing the build step when erred.&nbsp;
* Fixed checks on form submissions not filtering spam messages accordingly.&nbsp;
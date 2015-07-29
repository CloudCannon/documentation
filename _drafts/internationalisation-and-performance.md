---
title: Internationalisation and Performance improvements
type: major
---
Internationalisation needed an overhaul. The new Internationalisation uses 302 redirects over the transparent internal redirect that occured. The new implementation uses redirects and different paths for each language. If https://example.com/ is requested in NZ a 302 redirect will occur to https://example.com/en_nz/ and it will served the NZ locale. If https://example.com/es/ is requested the ES version will be served with no redirect as the locale is already defined in the path. Due to this change a default locale setting has been added which is available once a locale has been added to the **_locale** folder.

On top of Internationalisation come the usual performance and usability fixes:

*   Link selector in the visual editor got a slight tidy up
*   Better mobile response for context buttons
*   The file browser retains your current folder allowing better use of the back button
*   Better permalink detection for HTML visual editing
*   General Bug fixes

 
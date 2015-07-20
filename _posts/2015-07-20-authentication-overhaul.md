---
title: Authentication Overhaul
type: major
---

This release has a complete overhaul of the site authentication. This includes:

* [User accounts](/authentication/user-accounts/) allowing you to limit access to your site based on an email address
* [Authenticated routes](/authentication/custom-routes/) allows you to have private sections of a site
* [Date/time front matter interfaces](/editing/front-matter/)
* [Prototyping sites](authentication/none/) no longer require a password. Instead viewers will be presented with a splash screen before viewing the site.
* Internationalisation language detection incorporates the country more effectively.
* Disabled HTTP access on app.cloudcannon.com
* Better date handling on draft posts. If a date is already defined when published it will maintain that date
* Syncing with GitHub handles force pushes
* General bug fixes

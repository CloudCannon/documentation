---
title: Attaching
category: Internationalisation
order: 4
requirements:
  build: Any
  plan: Pro
  hosting: CloudCannon
---

Attaching is the last step in the i18n process and will generate a static site per locale.

### Adding the locale files

Upload the locales to `/_translations` in the site directory

### Generating the localised site on CloudCannon

[Ensure I18n is enabled](/i18n/introduction/#enabling-i18n-on-cloudcannon). If the locales are added to `/_translations` in the site directory, the translated site will be generated.

To view the languages used by CloudCannon:

1. Go to *Translate*
2. All languages in the *Languages* section
3. Choosing a language give an overview of that locale

---- IMAGE HERE ----

### Generating the localised site without CloudCannon

To acheive the same results without CloudCannon you can use our open source gulp setup.

.... This will be easy but I haven't done it yet

### Added Metadata

- Lang on HTML element
- metadata in HEAD

---

Once you have completed Attaching, review [Hosting](/i18n/hosting/) if you are using an external host.
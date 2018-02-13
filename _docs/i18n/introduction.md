---
title: Introduction
category: Internationalisation
order: 1
requirements:
  build: Any
  plan: Pro
  hosting: CloudCannon
---

> This guide describes the recommended workflow for translation of a Jekyll Site. For other impl

Internationalisation (I18n) helps you reach your customers in their language. Our recommended approach is broken down into three steps:

1. [Tagging](/i18n/tagging/)
2. [Translating](/i18n/translating/)
3. [Attaching](/i18n/attaching/)

The entire process will tag the content to be translated, export that content to the correct tools, and then generate a static version of the site per locale.

This approach uses the compiled Jekyll site to keep the work isolated. Work on the site in the base language should be completed before translation. Once the site is completed in the base language, you can start [Tagging](/i18n/tagging/).

### Enabling I18n on CloudCannon

Once the tagging is complete a locale file can be generated. On CloudCannon this is done automatically if i18n has been enabled.

To enable i18n on a CloudCannon Site:

1. Go to *Site Settings* / *I18n*
2. Ensure **Enable I18n Workflows** is checked
3. Set the default locale to your language (This defaults to English)

IMAGE HERE


### Other implementations

#### Jekyll plugins

Describe. Disadvantages


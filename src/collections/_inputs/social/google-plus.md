---
title: Social
details: |
  Text field with avatar for various social handles and full URLs.
  Displayed for keys ending in one of the following: `_twitter`, `_twitter_username`, `_twitter_url`, `_facebook`, `_facebook_username`, `_facebook_url`, `_google_plus`, `_google_plus_username`, `_google_plus_url`, `_instagram`, `_instagram_username`, `_instagram_url`, `_github`, `_github_username`, `_github_url`, `_email` and `_email_address`.
  Alternatively, you can use the variations without underscores as keys (e.g. `twitter_username` or `facebook_url`).
info: |
  For compatibility with popular Jekyll plugins, the Twitter **@** symbol is stripped from the value on save. The Twitter interfaces display a placeholder symbol.

  In order to support both custom and default Google user ID variations, the **+** is part of the value in the Google+ interfaces.
yaml_code_block: |
  ---
  twitter: CloudCannon
  twitter_url: 'https://twitter.com/@jekyllrb'
  facebook: CloudCannon
  facebook_url: 'https://www.facebook.com/CloudCannon'
  google_plus: +CloudCannon
  default_google_plus: '117511497981903622103'
  google_plus_url: 'https://plus.google.com/+CloudCannon'
  github_username: CloudCannon
  github_url: 'https://github.com/jekyll'
  docs_github_url: 'https://github.com/CloudCannon/Documentation'
  instagram_url: 'https://www.instagram.com/purenewzealand/'
  email: support@cloudcannon.com
  email_address: support@cloudcannon.com
  ---
image_paths:
  - /images/editing/front-matter/social.png
---

---
title: Bearer Tokens
category: Authentication
new_docs_link: https://cloudcannon.com/documentation/host/authentication/bearer-token/
order: 5
requirements:
  build: Any
  plan: Basic
  hosting: CloudCannon
---

Bearer tokens allow you to bypass your site authentication with a secret token in your request headers.

To set up bearer tokens for your site:

1. Go to the *Site Settings* / *Bearer Tokens* section
3. Enter a token name and click **Create Bearer Token**

![Bearer tokens authentication](/images/hosting/authentication/bearer-tokens.png){: .screenshot srcset="/images/hosting/authentication/bearer-tokens.png 800w, /images/hosting/authentication/bearer-tokens@2x.png 1600w"}

You'll now need to send through an `Authorization` header to access the site. This is mostly intended for scripts or machine users. For example:

~~~bash
curl -H "Authorization: Bearer xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" https://example.com/products.json
~~~

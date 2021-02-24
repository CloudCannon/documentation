---
title: SAML
category: Authentication
new_docs_link: https://cloudcannon.com/documentation/host/authentication/saml/
order: 4
requirements:
  build: Any
  plan: Pro
  hosting: CloudCannon
---

SAML authentication restricts access to your site by using a third party login service. CloudCannon uses SAML to authenticate users from your organisation.

To set up SAML account authentication for your site:

1. Go to the *Site Settings* / *Authentication* section
2. Select *SAML* and click **Switch to SAML authentication**

![SAML authentication](/images/hosting/authentication/saml.png){: .screenshot srcset="/images/hosting/authentication/saml.png 800w, /images/hosting/authentication/saml@2x.png 1600w"}

To configure SAML authentication:

1. Create a [CloudCannon Site App](https://www.onelogin.com/connector/cloudcannonsite-single-sign-on) in OneLogin
2. Copy details from SSO tab to *Site Settings* / *Authentication* section

![Adding SAML configuration](/images/hosting/authentication/saml-added.png){: .screenshot srcset="/images/hosting/authentication/saml-added.png 800w, /images/hosting/authentication/saml-added@2x.png 1600w"}

Visitors to your site now need to authenticate as a member of your organisation before viewing the site.
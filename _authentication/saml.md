---
title: SAML
order: 4
requirements:
  build: Any
  plan: Enterprise
  hosting: CloudCannon
---

SAML authentication restricts access to your site by using a third party login service. CloudCannon uses [OneLogin](https://www.onelogin.com/connector/cloudcannonsite-single-sign-on) to authenticate users from your organisation.

SAML authentication requires a [OneLogin](https://www.onelogin.com/connector/cloudcannonsite-single-sign-on) organisation and CloudCannon Enterprise.
{: .info}

To set up SAML account authentication for your site:

1. Go to the *Site Settings* / *Authentication* section
2. Select *SAML* and click **Switch to SAML authentication**

![SAML authentication](/img/authentication/saml.png){: .screenshot srcset="/img/authentication/saml.png 800w, /img/authentication/saml@2x.png 1600w"}

To configure SAML authentication:

1. Create a [CloudCannon Site App](https://www.onelogin.com/connector/cloudcannonsite-single-sign-on) in OneLogin
2. Copy details from SSO tab to *Site Settings* / *Authentication* section

![Adding SAML configuration](/img/authentication/saml-added.png){: .screenshot srcset="/img/authentication/saml-added.png 800w, /img/authentication/saml-added@2x.png 1600w"}

Visitors to your site now need to authenticate as a member of your organisation before viewing the site.

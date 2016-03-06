---
title: SAML
order: 4
requirements:
  build: Any
  plan: Enterprise
  hosting: CloudCannon
---

SAML authentication restricts access to your site by using a third party login service. CloudCannon uses [OneLogin](https://www.onelogin.com/connector/cloudcannonsite-single-sign-on) to authenticate users from your organisation.

SAML authentication requires a [OneLogin](https://www.onelogin.com/connector/cloudcannonsite-single-sign-on) organisation and CloudCannon Enterprise
{: .info}

To set up SAML account authentication for your site:

1. Go to the *Authentication* tab in site settings
2. Select *SAML* and click *Switch to SAML authentication*

![SAML authentication](/img/authentication/saml.png){: .screenshot}

To configure SAML authentication:

1. Create a [CloudCannon Site App](https://www.onelogin.com/connector/cloudcannonsite-single-sign-on) in OneLogin
2. Copy details from SSO Tab to *Authentication* tab.

![Adding SAML configuration](/img/authentication/saml-added.png){: .screenshot}

Visitors to your site will now need to authenticate as a member of your organisation before viewing the site.

![CloudCannon's SAML login](/img/authentication/saml-login.png){: .screenshot}

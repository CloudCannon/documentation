---
title: SAML
category: General
new_docs_link: https://cloudcannon.com/documentation/edit/organization/saml/
canonical_url: https://cloudcannon.com/documentation/edit/organization/saml/
order: 4
requirements:
  build: Any
  plan: Free
  hosting: Any
---

CloudCannon is set up as a Service Provider (SP) to allow Single Sign On (SSO) for your organisation. To use this feature you must already have your own Identity Provider (IdP).

### Configuring SAML

> SAML can be a tricky thing to configure with only one end of debugging. If you would prefer manual assistance with setting up, please [contact support](mailto:support@cloudcannon.com).
{: .explainer}

To configure SAML with your IdP you will need the following details:

* SAML 2.0 Endpoint (HTTP)
* Issuer
* X.509 Certificate

> The issuer is configurable to allow multiple organisations from the same IdP. It must start with `cloudcannon.com/`. Leaving this blank will configure it as `cloudcannon.com`.
{: .explainer}

To add these details:

1. Go to *Organisation Settings* / *SAML*
2. Fill in all of the fields available and submit the form

![SAML Details](/images/organisations/saml.png){: .screenshot srcset="/images/organisations/saml.png 800w, /images/organisations/saml@2x.png 1600w"}

Once configured you will get a screen defining any information you will need. If you require more information than displayed please [contact support](mailto:support@cloudcannon.com).

### Okta Setup

Okta is a popular Identity Provider. To use Okta SAML with CloudCannon follow these instructions:

#### Create app

Create a new SAML 2.0 application on Okta for CloudCannon.

![Create app](/images/organisations/saml/1-create-app.png){: .screenshot srcset="/images/organisations/saml/1-create-app.png 800w, /images/organisations/saml/1-create-app@2x.png 1600w"}

#### Configure Okta

Go to CloudCannon and open *Organisation Settings* / *SAML*. Copy your Issuer and Consume URL. If you do not have a SAML option in your menu contact support to get this enabled.

![SAML details](/images/organisations/saml.png){: .screenshot width="800" height="500"}

Enter the Issuer and Consume URL information into Okta.

![Okta details](/images/organisations/saml/3-copy.png){: .screenshot srcset="/images/organisations/saml/3-copy.png 800w, /images/organisations/saml/3-copy@2x.png 1600w"}

And confirm you're using CloudCannon as an internal applicaiton.

![Okta confirm](/images/organisations/saml/4-confirm.png){: .screenshot srcset="/images/organisations/saml/4-confirm.png 800w, /images/organisations/saml/4-confirm@2x.png 1600w"}

#### CloudCannon Configure

View the setup instructions for your newly created application on Okta.

![Okta confirm](/images/organisations/saml/5-view.png){: .screenshot srcset="/images/organisations/saml/5-view.png 800w, /images/organisations/saml/5-view@2x.png 1600w"}

Copy the Identity Provider Single Sign-On URL and X.509 Certificate.

![Okta configuration details](/images/organisations/saml/6-copy.png){: .screenshot srcset="/images/organisations/saml/6-copy.png 800w, /images/organisations/saml/6-copy@2x.png 1600w"}

Enter the Identity Provider Single Sign-On URL and X.509 Certificate information into CloudCannon.

![Okta configuration details](/images/organisations/saml/7-cc.png){: .screenshot srcset="/images/organisations/saml/7-cc.png 800w, /images/organisations/saml/7-cc@2x.png 1600w"}
---
title: SAML
category: Organisations
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

- SAML 2.0 Endpoint (HTTP)
- Issuer
- X.509 Certificate

> The issuer is configurable to allow multiple organisations from the same IdP. It must start with `cloudcannon.com/`. Leaving this blank will configure it as `cloudcannon.com`.
{: .explainer}

To add these details:

1. Go to *Organisation Settings* / *SAML*
2. Fill in all of the fields available and submit the form

![The Details form in the Organisation Settings](/images/organisations/saml.png){: srcset="/images/organisations/saml.png 800w, /images/organisations/saml@2x.png 1600w"}{: .screenshot}

Once configured you will get a screen defining any information you will need. If you require more information than displayed please [contact support](mailto:support@cloudcannon.com).
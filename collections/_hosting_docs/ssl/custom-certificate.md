---
title: Custom Certificate
category: SSL
new_docs_link: https://cloudcannon.com/documentation/host/ssl/#custom-ssl
order: 2
requirements:
  build: Any
  plan: Free
  hosting: CloudCannon
---

### Adding a new SSL certificate

To add a new custom SSL certificate:

1. Go to *Site Settings* / *SSL* / *Custom*
2. Click the **Add SSL Certificate** button
3. Fill in all of the fields available and submit the form

Once added, the SSL certificate needs to be attached to the site.

> All certificates must be in PEM encoding. The placeholder text indicates the correct start and end headers.
{: .explainer}

![Adding a new SSL certificate](/images/hosting/ssl/adding.png){: srcset="/images/hosting/ssl/adding.png 800w, /images/hosting/ssl/adding@2x.png 1600w"}{: .screenshot}

### Attaching an SSL certificate to a site

To add an existing custom SSL certificate to a site:

1. Go to *Site Settings* / *SSL* / *Custom*
2. Click **Attach** on any SSL certificate

![Attaching an SSL certificate](/images/hosting/ssl/attaching.png){: srcset="/images/hosting/ssl/attaching.png 800w, /images/hosting/ssl/attaching@2x.png 1600w"}{: .screenshot}

### Redirecting HTTP to HTTPS

To redirect all HTTP traffic to HTTPS:

1. Go to *Site Settings* / *SSL* / *Settings*
2. Enable the *Redirect all HTTP traffic to HTTPS* option
3. Click **Update SSL**

![SSL Settings](/images/hosting/ssl/settings.png){: srcset="/images/hosting/ssl/settings.png 800w, /images/hosting/ssl/settings@2x.png 1600w"}{: .screenshot}

---
title: Let's Encrypt
category: SSL
order: 1
requirements:
  build: Any
  plan: Free
  hosting: CloudCannon
---

[Let's Encrypt](https://letsencrypt.org/) is a fresh kind of Certificate Authority, it's free, automated and open.

CloudCannon automatically generates Let's Encrypt SSL certificates for your sites and serves them over HTTPS. These certificates are automatically renewed before they expire.

![SSL details](/images/ssl/details.png){: srcset="/images/ssl/details.png 800w, /images/ssl/details@2x.png 1600w"}{: .screenshot}

### Toggling HTTPS

To toggle autogenerating Let's Encrypt SSL certificates on your site:

1. Go to *Site Settings* / *SSL* / *Settings*
2. Toggle the *Autogenerate SSL Certificate* option
3. Click **Update SSL**

![SSL Settings](/images/ssl/settings.png){: srcset="/images/ssl/settings.png 800w, /images/ssl/settings@2x.png 1600w"}{: .screenshot}

### Redirecting HTTP to HTTPS

To redirect all HTTP traffic to HTTPS:

1. Go to *Site Settings* / *SSL* / *Settings*
2. Enable the *Redirect all HTTP traffic to HTTPS* option
3. Click **Update SSL**

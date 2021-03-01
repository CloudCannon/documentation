---
title: Automatic SSL
category: SSL
new_docs_link: https://cloudcannon.com/documentation/host/ssl/#automatic-ssl
canonical_url: https://cloudcannon.com/documentation/host/ssl/#automatic-ssl
order: 1
requirements:
  build: Any
  plan: Free
  hosting: CloudCannon
---

CloudCannon offers free SSL by default on every site and serves them over HTTPS. This is made possible by [Let's Encrypt](https://letsencrypt.org/), which is a new age Certificate Authority. It's free, automated and open. These certificates are automatically renewed before they expire.

![SSL details](/images/hosting/ssl/details.png){: srcset="/images/hosting/ssl/details.png 800w, /images/hosting/ssl/details@2x.png 1600w"}{: .screenshot}

### Toggling HTTPS

To toggle autogenerating Let's Encrypt SSL certificates on your site:

1. Go to *Site Settings* / *SSL* / *Settings*
2. Toggle the *Autogenerate SSL Certificate* option
3. Click **Update SSL**

![SSL Settings](/images/hosting/ssl/settings.png){: srcset="/images/hosting/ssl/settings.png 800w, /images/hosting/ssl/settings@2x.png 1600w"}{: .screenshot}

### Redirecting HTTP to HTTPS

To redirect all HTTP traffic to HTTPS:

1. Go to *Site Settings* / *SSL* / *Settings*
2. Enable the *Redirect all HTTP traffic to HTTPS* option
3. Click **Update SSL**

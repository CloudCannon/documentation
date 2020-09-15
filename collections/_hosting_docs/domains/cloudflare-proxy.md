---
title: Cloudflare Proxy
category: Domains
order: 5
requirements:
  build: Any
  plan: Free
  hosting: CloudCannon
---
CloudCannon hosting uses Cloudflare. If your site is hosted externally on Cloudflare already, and you are using Cloudflare's orange cloud feature on your DNS records, you will not be able to proxy directly to the normal CloudCannon CNAME.

Instead, you can use a custom CNAME which connects directly to our origin. Click *Cloudflare Proxy* under *Hosting / Domain* in your site settings. This will show you the CNAME value you should use.

![Site Settings / Cloudflare proxy section](/images/hosting/domains/cloudflare-proxy.png)
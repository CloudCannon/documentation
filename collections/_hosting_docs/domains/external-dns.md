---
title: External DNS
category: Domains
new_docs_link: https://cloudcannon.com/documentation/host/dns/external-dns/
canonical_url: https://cloudcannon.com/documentation/host/dns/external-dns/
order: 4
requirements:
  build: Any
  plan: Free
  hosting: CloudCannon
---
> [*CloudCannon DNS*](/hosting/domains/cloudcannon-dns) is strongly recommended for sites on apex domains (no subdomain). *External DNS* relies on an A record mapped to a single server. This cannot be dynamically load balanced, reducing redundancy and increasing potential down time risk.
{: .explainer.warning}

> If you are using **Cloudflare** as your DNS provider, you will need to configure your DNS records differently. See our guides for using a [Cloudflare Proxy with CloudCannon](/hosting/domains/cloudflare-proxy).
{: .explainer.warning}

If you want to host a site on CloudCannon, but manage your DNS records externally, you can use *External DNS*. To configure your domain with *External DNS*, follow these steps:

1. Ensure you are using *External DNS*. Otherwise click **External DNS** and *Switch to External DNS*.
2. Note the CNAME and A records provided by CloudCannon.
2. Go to your external DNS provider and find the DNS settings for your domain.
3. Set the CNAME and A records to match those provided by CloudCannon.

![Site Settings / Domain section with external DNS](/images/hosting/domains/external-dns.png){: .screenshot srcset="/images/hosting/domains/external-dns.png 800w, /images/hosting/domains/external-dns@2x.png 1600w"}

> The CNAME record maps your subdomains to CloudCannon servers. The A record maps your apex domain to a specific CloudCannon server.
{: .explainer}

Here is the DNS documentation from a few domain registrars:

* [iwantmyname](https://help.iwantmyname.com/customer/en/portal/topics/93994-dns-nameserver/articles){: target="_blank"}
* [Namecheap](https://www.namecheap.com/domains/freedns.aspx){: target="_blank"} (can be used with any domain registrar)
* [GoDaddy](https://www.godaddy.com/help/managing-dns-for-your-domain-names-680){: target="_blank"}
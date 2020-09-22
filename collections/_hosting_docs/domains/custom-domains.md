---
title: Custom Domains
category: Domains
order: 2
requirements:
  build: Any
  plan: Free
  hosting: CloudCannon
---

Give your live site a professional look with a unique domain name.

To add a custom domain:

1. Purchase a domain from a domain registrar
2. Go to the *Site Settings* / *Domain* section for your site
3. Enter your domain with or without a subdomain in the *Domain Name* box
4. Click **Add Domain**

Once you have added your domain, you will see instructions for configuring your DNS and name servers.

![Site Settings / Domain section with subdomain](/images/hosting/domains/empty.png){: .screenshot srcset="/images/hosting/domains/empty.png 800w, /images/hosting/domains/empty@2x.png 1600w"}

#### Subpaths

When you add a custom domain, you have the option to use a subpath. This option is for serving multiple sites under the same domain name, at different paths. A main site must exist on the base url before sites can be added at subpaths.

### Configuring your domain

> Changes to DNS can take up to 48 hours to propagate, depending on the previous TTL set. Test your site is configured correctly with the [pingdom DNS checker](https://dnscheck.pingdom.com/){: target="_blank"}.
{: .explainer.warning}

Configuration instructions are shown after adding a domain. There are two choices:

#### CloudCannon DNS (recommended)

Using **CloudCannon DNS** allows you to manage your DNS records within CloudCannon. This option automatically provides wildcard SSL certificates for your domain, so all your subdomain sites can be served over HTTPS without extra configuration.

See here for more information about [configuring CloudCannon DNS](/hosting/domains/cloudcannon-dns).

#### External DNS

If you want to manage your DNS records outside CloudCannon, you can use **External DNS**. See here for more information about [configuring external DNS](/hosting/domains/external-dns).

> If you are using Cloudflare as your DNS provider, you will need to configure your DNS records differently. See our guide for using a [Cloudflare Proxy with CloudCannon](/hosting/domains/cloudflare-proxy).
{: .explainer.warning}

> Verisign provides a [guide](https://www.verisign.com/en_US/domain-names/online/how-dns-works/index.xhtml){: target="_blank"} to learn how DNS works.
{: .explainer}

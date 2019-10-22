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

1. Purchase a domain from a domain registrar (e.g. [iwantmyname](http://www.shareasale.com/r.cfm?B=210738&amp;U=852853&amp;M=25581&amp;urllink=https://iwantmyname.com/services/developer/cloud-cannon-custom-domains))
2. Go to the *Site Settings* / *Domain* section for your site
3. Enter your domain with or without a subdomain in the *Domain Name* box 
4. Click **Add Domain**

![Site Settings / Domain section with subdomain](/images/hosting/domains/empty.png){: .screenshot srcset="/images/hosting/domains/empty.png 800w, /images/hosting/domains/empty@2x.png 1600w"}

#### Subpaths

When you add a custom domain, you have the option to use a subpath. This option is for serving multiple sites under the same domain name, at different paths. A main site must exist on the base url before sites can be added at subpaths.

When serving a site on a subpath, make sure to use a custom source directory with the same path.

### Configuring your domain

> Changes to DNS can take up to 48 hours to propagate, depending on the previous TTL set. Test your site is configured correctly with the [pingdom DNS checker](http://dnscheck.pingdom.com/){: target="_blank"}.
{: .explainer.warning}

Configuration instructions are shown after adding a domain. There are two choices:

* CloudCannon DNS **(recommended)**
* External DNS

> Verisign provides a [guide](http://www.verisign.com/en_US/domain-names/online/how-dns-works/index.xhtml){: target="_blank"} to learn how DNS works.
{: .explainer}

### CloudCannon DNS

Once you have added your domain name, you can configure your domain for *CloudCannon DNS*.

* Access the settings for your domain via the *Domains* button (globe icon) on the left sidebar. 
* Select your domain, then open the *Configuration* tab.
* Ensure you are using *CloudCannon DNS*. Otherwise click **CloudCannon DNS** and *Switch to CloudCannon DNS*.

![Site Settings / Domain section with CloudCannon DNS](/images/hosting/domains/cloudcannon-dns-bad-nameservers.png){: .screenshot srcset="/images/hosting/domains/cloudcannon-dns-bad-nameservers.png 800w, /images/hosting/domains/cloudcannon-dns-bad-nameservers@2x.png 1600w"}

Your DNS records will be updated. The next step is to configure your name servers, which cannot be done in CloudCannon. You will see instructions for this in your domain settings if you need to do this.

* Find the list of *Expected Name Servers* in the settings for your domain.
* Go to your domain registrar's settings for the domain, and add the *Expected Name Servers* provided by CloudCannon.
* Save the changes.

> If you are not sure which domain registrar you are using, check with [ICANN Lookup](https://lookup.icann.org/lookup).
{: .explainer}

![Site Settings / Domain section with CloudCannon DNS](/images/hosting/domains/cloudcannon-dns.png){: .screenshot srcset="/images/hosting/domains/cloudcannon-dns.png 800w, /images/hosting/domains/cloudcannon-dns@2x.png 1600w"}

> See [here](/hosting/domains/dns/) for more information about setting additional DNS records for external services or ownership validation.
{: .explainer}

### External DNS

> *CloudCannon DNS* is strongly recommended for sites on apex domains (no subdomain). *External DNS* relies on an A record mapped to a single server. This cannot be dynamically load balanced, reducing redundancy and increasing potential down time risk.
{: .explainer.warning}

To configure your domain with *External DNS*:

1. Ensure you are using *External DNS*. Otherwise click **External DNS** and *Switch to External DNS*.
2. Note the CNAME and A records provided by CloudCannon.
2. Go to your external DNS provider and find the DNS settings for your domain. 
3. Add the provided CNAME and A records to your DNS records.

![Site Settings / Domain section with external DNS](/images/hosting/domains/external-dns.png){: .screenshot srcset="/images/hosting/domains/external-dns.png 800w, /images/hosting/domains/external-dns@2x.png 1600w"}

> The CNAME record maps your subdomains to CloudCannon servers. The A record maps your apex domain to a specific CloudCannon server.
{: .explainer}

Here is the DNS documentation from a few domain registrars:

* [iwantmyname](https://help.iwantmyname.com/customer/en/portal/topics/93994-dns-nameserver/articles){: target="_blank"}
* [Namecheap](https://www.namecheap.com/domains/freedns.aspx){: target="_blank"} (can be used with any domain registrar)
* [GoDaddy](https://www.godaddy.com/help/managing-dns-for-your-domain-names-680){: target="_blank"}

### Cloudflare Proxy

CloudCannon hosting uses Cloudflare. If your site is hosted externally on Cloudflare already, and you are using Cloudflare's orange cloud feature on your DNS records, you will not be able to proxy directly to the normal CloudCannon CNAME.

Instead, you can use a custom CNAME which connects directly to our origin. Click *Cloudflare Proxy* under *Hosting / Domain* in your site settings. This will show you the CNAME value you should use.

![Site Settings / Cloudflare proxy section](/images/hosting/domains/cloudflare-proxy.png)

### Single Origin

In some cases, you may configure your DNS to point directly at CloudCannon's host origin, bypassing many of the normal benefits of CloudCannon hosting. This is not recommended, but fits a select *set* of use cases.

Click *Single Origin* under *Hosting / Domain* in your site settings. This will show you the DNS records you should use.

![Site Settings / Single Origin](/images/hosting/domains/single-origin.png)

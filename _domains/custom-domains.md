---
title: Custom Domains
order: 2
requirements:
  build: Any
  plan: Free
  hosting: CloudCannon
---

Give your live site a professional look with a unique domain name.

To add a custom domain:

1. Purchase a domain from a domain registrar (e.g.  [iwantmyname](http://www.shareasale.com/r.cfm?B=210738&U=852853&M=25581&urllink=https://iwantmyname.com/services/developer/cloud-cannon-custom-domains))
2. Go to the *Site Settings* / *Domain* section for your site
3. Enter your domain with or without a subdomain
3. Click **Add Domain**

![Site Settings / Domain section with subdomain](/img/domains/empty.png){: .screenshot srcset="/img/domains/empty.png 800w, /img/domains/empty@2x.png 1600w"}

[iwantmyname](http://www.shareasale.com/r.cfm?B=210738&U=852853&M=25581&urllink=https://iwantmyname.com/services/developer/cloud-cannon-custom-domains) domains have a one click install to simplify configuring your domain.
{: .info}

---

### Configuring your domain

Changes to DNS can take up to 48 hours to propagate, depending on the previous TTL set. Test your site is configured correctly with the [pingdom DNS checker](http://dnscheck.pingdom.com/){: target="_blank"}.
{: .warning}

Configuration instructions are shown after adding a domain. There are two choices:

* CloudCannon DNS **(recommended)**
* External DNS

Verisign provides a [guide](http://www.verisign.com/en_US/domain-names/online/how-dns-works/index.xhtml){: target="_blank"} to learn how DNS works.
{: .info}

---

### CloudCannon DNS

To configure your domain with *CloudCannon DNS*:

1. Ensure you are using *CloudCannon DNS*, otherwise click **Use CloudCannon DNS**
2. Go to your domain registrar's *DNS Server Settings* or *Nameservers*
3. Enter the nameservers CloudCannon provides in *Site Settings* / *Domain*
4. Save the changes

![Site Settings / Domain section with CloudCannon DNS](/img/domains/cloudcannon-dns.png){: .screenshot srcset="/img/domains/cloudcannon-dns.png 800w, /img/domains/cloudcannon-dns@2x.png 1600w"}

Set additional DNS records for external services or ownership validation with CloudCannon [DNS](/domains/dns/).
{: .info}

---

### External DNS

*CloudCannon DNS* is strongly recommended for sites on apex domains (no subdomain). *External DNS* relies on an A record mapped to a single server. This cannot be dynamically load balanced, reducing redundancy and increasing potential down time risk.
{: .warning}

To configure your domain with *External DNS*:

1. Ensure you are using *External DNS*, otherwise click **Use External DNS**
2. Go into the DNS settings for your domain
3. Add the CNAME and A records provided to your DNS records

![Site Settings / Domain section with external DNS](/img/domains/external-dns.png){: .screenshot srcset="/img/domains/external-dns.png 800w, /img/domains/external-dns@2x.png 1600w"}

The CNAME record maps your subdomains to CloudCannon servers, the A record maps your apex domain to a specific CloudCannon server.
{: .info}

Here is the DNS documentation from a few domain registrars:

* [iwantmyname](https://help.iwantmyname.com/customer/en/portal/topics/93994-dns-nameserver/articles){: target="_blank"}
* [Namecheap](https://www.namecheap.com/domains/freedns.aspx){: target="_blank"} (can be used with any domain registrar)
* [GoDaddy](https://www.godaddy.com/help/managing-dns-for-your-domain-names-680){: target="_blank"}

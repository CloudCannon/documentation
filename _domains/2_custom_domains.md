---
title: Custom Domains
---

Using a custom domain requires you to purchase one from an external domain registrar. We recommend [iwantmyname](http://www.shareasale.com/r.cfm?B=210738&U=852853&M=25581&urllink=https://iwantmyname.com/services/developer/cloud-cannon-custom-domains).
{: .info}

To add a custom domain:

1. Go to the *Domain* section in *Site Settings*.
2. Enter the domain name with or without a subdomain

![Site settings domain tab with subdomain](/img/domains/example-entered.png){: .screenshot}


[iwantmyname](http://www.shareasale.com/r.cfm?B=210738&U=852853&M=25581&urllink=https://iwantmyname.com/services/developer/cloud-cannon-custom-domains) domains have a one click install for which avoids the following steps.
{: .info}

---

## Configuring your domain

All changes to a domains DNS can take up to 48 hours to propagate. This is the upper range and depends on the previous TTL set on the domain. To test your site is configured correctly use the [pingdom DNS checker](http://dnscheck.pingdom.com/).
{: .warning}

Once a domain has been added, configuration instructions will become available. You will have two choices:

* Use CloudCannon's DNS **(recommend)**
* Use your own DNS

If you are unfamiliar with DNS see [Verisign's DNS explainer](http://www.verisigninc.com/en_US/domain-names/online/how-dns-works/index.xhtml).
{: .info}

---

### Using CloudCannon DNS

Go to the *Site Settings* / *Domain* section and ensure it looks like the following screenshot. Otherwise, click **Use CloudCannon's DNS**.

![Site settings domain tab with own DNS](/img/domains/cloudcannon-dns.png){: .screenshot}

To configure your domain:

1. Go to your domain registrar *DNS Server Settings* or *Nameservers*.
2. Enter the nameservers provided and enter the nameservers provided.
3. (Optional) Add additional DNS records got to the *DNS* section in *Site Settings*

Here are some domain registrars documentation:

* [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/767/10/how-can-i-change-the-nameservers-for-my-domain)
* [GoDaddy](https://www.godaddy.com/help/setting-nameservers-for-your-domain-names-664)

---

### Using your own DNS

If you are using the naked domain we recommend using CloudCannon DNS. This allows us dynamically load balance your site across multiple servers.
{: .warning}

Go to the *Site Settings* / *Domain* section and ensure it looks like the following screenshot. Otherwise, click **I have my own DNS**.

![Site settings domain tab with own DNS](/img/domains/own-dns.png){: .screenshot}

1. Go into the DNS settings for your domain
2. Add a CNAME record with the following details:

**Name/Alias**: *.example.com using your domain name

**Type**: Set to CNAME.

**Value**: Set to sites.cloudcannon.com

![DNS](/img/common_tasks/1.png)

See DNS instructions for your domain registrar:

* [Namecheap](https://www.namecheap.com/domains/freedns.aspx) which can be used with any provider
* [GoDaddy](https://www.godaddy.com/help/managing-dns-for-your-domain-names-680)

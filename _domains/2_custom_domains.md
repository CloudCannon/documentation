---
title: Custom Domains
---

Only relevant for sites hosted by CloudCannon
{: .info}

## Purchasing a domain

When purchasing a domain we recommend using [iwantmyname](http://www.shareasale.com/r.cfm?B=210738&U=852853&M=25581&urllink=https://iwantmyname.com/services/developer/cloud-cannon-custom-domains). Using iwantmyname will allow you to use a one click install for CloudCannon which avoids the following steps. CloudCannon will however work with any domain registrar.

---

## Attaching a domain to a site

Once you have your domain name you can go ahead and add it to your site. You can do this in your site settings under the *domain* tab.

![Site settings domain tab with subdomain](/img/domains/example-entered.png){: .screenshot}

Once you have entered your domain and submitted the form

---

## Pointing the domain at CloudCannon

Now that you have your domain we need to configure it to point at CloudCannon. This uses DNS, whether it is your own DNS or CloudCannon's DNS this will work all the same way. If you have used iwantmyname this has been done automatically for you by using the once click installer. For more on how DNS works see [Verisign's DNS explainer](http://www.verisigninc.com/en_US/domain-names/online/how-dns-works/index.xhtml).

All changes to a domains DNS can take up to 48 hours to propagate. This is the upper range and depends on the previous TTL set on the domain. To test your site is configured correctly the [pingdom DNS checker](http://dnscheck.pingdom.com/).
{: .warning}

To redirect subdomains to [the main domain](/domains/subdomains/) create DNS records for each domain you want to redirect.
{: .info}

---

### Using your own DNS

Make sure that you are using the your own DNS in the site settings under the *domain* tab. The interface will look like this:

![Site settings domain tab with own DNS](/img/domains/own-dns.png){: .screenshot}

Most domain registrars offer a DNS service. To setup:

1. Go into the DNS settings for your domain on your domain registrar's website.
2. Add a new record.
3. Enter the following details:

**Name/Alias** - leave blank to configure the root domain (e.g. mysite.com) or enter a value for a subdomain (e.g. enter www to point www.mysite.com at CloudCannon).

**Type** - Set to A.

**Value** - Set to 184.169.135.34.

![DNS](/img/common_tasks/1.png)

See DNS instructions for your domain registrar:

* [Namecheap](https://www.namecheap.com/domains/freedns.aspx) which can be used with any provider
* [GoDaddy](https://www.godaddy.com/help/managing-dns-for-your-domain-names-680)

---

### Using CloudCannon's DNS

Because all domain registrars do not have DNS we have built in DNS for your convenience. Make sure that you are using the CloudCannon's DNS in the site settings under the *domain* tab. The interface will look like this:

![Site settings domain tab with own DNS](/img/domains/cloudcannon-dns.png){: .screenshot}

Once this is selected go to your domain registrar and enter the nameservers provided. This will be under *DNS Server Settings* or *Nameservers*. Enter each value in order. This will tell anyone viewing your domain to look at CloudCannon's DNS for more information. See nameserver configuration instructions for your domain registrar:

* [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/767/10/how-can-i-change-the-nameservers-for-my-domain)
* [GoDaddy](https://www.godaddy.com/help/setting-nameservers-for-your-domain-names-664)

That's it your DNS has automatically been configured by CloudCannon. To add extra DNS records access the *DNS* section in the site settings. This is useful for mail servers(MX) and webmaster tools(TEXT).

![Site settings DNS tab](/img/domains/cloudcannon-dns-extra.png){: .screenshot}

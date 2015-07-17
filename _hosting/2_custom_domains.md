---
title: Custom Domains
---

Only relevant for sites hosted by CloudCannon
{: .info}

First off you need to buy your domain name. We recommend using [iwantmyname](http://www.shareasale.com/r.cfm?B=210738&U=852853&M=25581&urllink=https://iwantmyname.com/services/developer/cloud-cannon-custom-domains) because they have CloudCannon integration which automatically does the steps that follow below.

Now we need to set up your domain's DNS. What is DNS you ask? The Domain Name System (DNS) translates Internet domain and host names to IP addresses. DNS converts the names we type in our Web browser address bar to the IP addresses of Web servers hosting those sites.

Most domain registrars offer a DNS service. If your provider doesn't then try using [namecheap's free DNS service](https://www.namecheap.com/domains/freedns.aspx).

To setup:

* Go into the DNS settings for your domain on your domain registrar's website.
* Add a new record.
* Enter the following details:

**Name/Alias** - leave blank to configure the root domain (e.g. mysite.com) or enter a value for a subdomain (e.g. enter www to point www.mysite.com at CloudCannon).

**Type** - Set to A.

**Value** - Set to 184.169.135.34.

![DNS](/img/common_tasks/1.png)

**One last thing to note**: Sometimes you'll want to redirect subdomains to the main domain. For example, let's say you have www.mysite.com and you want visitors who go to mysite.com to redirect to www.mysite.com. Setting this up on CloudCannon is easy, just create DNS records for each domain you want to redirect to your main domain and CloudCannon will handle the redirects.

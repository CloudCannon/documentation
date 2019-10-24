---
title: CloudCannon DNS
category: Domains
order: 3
requirements:
  build: Any
  plan: Free
  hosting: CloudCannon
---
Using CloudCannon DNS allows you to manage your DNS records within CloudCannon, and provides a wildcard SSL certificate for your domain.

Once you have added your domain name, follow these steps to start using *CloudCannon DNS*:

* Access the settings for your domain via the *Domains* button (globe icon) on the left sidebar. 
* Select your domain, then open the *Configuration* tab.
* Ensure you are using *CloudCannon DNS*. Otherwise click **CloudCannon DNS** and *Switch to CloudCannon DNS*.

![Site Settings / Domain section with CloudCannon DNS](/images/hosting/domains/cloudcannon-dns-bad-nameservers.png){: .screenshot srcset="/images/hosting/domains/cloudcannon-dns-bad-nameservers.png 800w, /images/hosting/domains/cloudcannon-dns-bad-nameservers@2x.png 1600w"}

Your DNS records will be updated. 

The next step is to configure your name servers, which cannot be done in CloudCannon. You will see instructions for this in your domain settings if you need to do this.

* Find the list of *Expected Name Servers* in the settings for your domain.
* Go to your domain registrar's settings for the domain, and add the *Expected Name Servers* provided by CloudCannon.
* Save the changes.

> If you are not sure which domain registrar you are using, check with [ICANN Lookup](https://lookup.icann.org/lookup).
{: .explainer}

![Site Settings / Domain section with CloudCannon DNS](/images/hosting/domains/cloudcannon-dns.png){: .screenshot srcset="/images/hosting/domains/cloudcannon-dns.png 800w, /images/hosting/domains/cloudcannon-dns@2x.png 1600w"}

> See our guide about [setting additional DNS records](/hosting/domains/dns/) for external services or ownership validation.
{: .explainer}
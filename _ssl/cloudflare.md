---
title: CloudFlare
order: 3
---

CloudFlare is service which works as a reverse proxy for your website. What that means is when someone visits your website, the request will go to CloudFlare, then CloudFlare will download the website from the hosting provider and serve it to the user.

The advantage of doing this is CloudFlare does many performance and security enhancements so your website will load faster and be more immune to malicious attacks. They've also recently added free SSL support.

---

### Adding SSL

First off, head over to CloudFlare and register a new account:

![CloudFlare](/img/ssl/cloudflare/2.png){: .screenshot}

Next it'll ask for your website address:

![CloudFlare](/img/ssl/cloudflare/3.png){: .screenshot}

After this CloudFlare will take about a minute to scan your existing DNS records. Once it's finished it, it'll show you the DNS records it's found. You need to verify these records are correct. For CloudCannon websites the DNS records are fairly simple, usually the setup is:

* an A record for the root domain pointing to 184.169.135.34
* an A record for *.rootdomain pointing to 184.169.135.34
* perhaps an MX record if you have email set up for that domain

Once you're happy these are correct, click the continue button:

![CloudFlare](/img/ssl/cloudflare/4.png){: .screenshot}

Next up is configuring CloudFlare. I switched the plan to **Free** and the performance to **CDN + Full optimizations**:

![CloudFlare](/img/ssl/cloudflare/5.png){: .screenshot}

Now you need to update your nameservers. Log in to your domain provider and change the nameservers to the ones that CloudFlare gives you:

![CloudFlare](/img/ssl/cloudflare/6.png){: .screenshot}

Almost finished! Now go into your CloudFlare settings:

![CloudFlare](/img/ssl/cloudflare/7.png)

Find the SSL section and change it to **Flexible SSL**:

![CloudFlare](/img/ssl/cloudflare/8.png)

That's it! Changing your DNS can take up to 48 hours to propagate and CloudFlare's free SSL can take up to 24 hours to set up. There should be no downtime, but it could take a day or two before you have SSL and CloudFlare serving your website.

---

### Redirecting HTTP to HTTPS

To redirect all HTTP traffic to HTTPS:

1. Set up CloudFlare SSL
2. Add [this page rule](https://support.cloudflare.com/hc/en-us/articles/200170536-How-do-I-redirect-all-visitors-to-HTTPS-SSL-) to your CloudFlare configuration

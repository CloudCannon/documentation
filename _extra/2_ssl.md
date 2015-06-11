---
title: SSL Support
---

#### What's SSL?

SSL is a way of ensuring all the data passed between a website visitor and the server remains private. For websites with login passwords and private data, SSL is essential. For static websites it’s not so important as the website is already public. However, for visitors there’s an extra level of trust from seeing the padlock in their browser.

![browser bar](/img/ssl/1_a.png)

#### What’s CloudFlare?

CloudFlare is service which works as a reverse proxy for your website. What that means is when someone visits your website, the request will go to CloudFlare, then CloudFlare will download the website from the hosting provider and serve it to the user.

The advantage of doing this is CloudFlare does many performance and security enhancements so your website will load faster and be more immune to malicious attacks. They’ve also recently added free SSL support.

![CloudFlare](/img/ssl/1.png)

#### Why should I care?

Google recently [announced](http://googlewebmastercentral.blogspot.co.nz/2014/08/https-as-ranking-signal.html) that it will prioritize sites that use SSL. Web designers should be approaching clients about SSL to ensure that their clients sites continue to rank well. Given that CloudFlare offers SSL for free AND you get the malicious traffic buffer of their CDN, using it is almost a no-brainer.

#### Let’s add SSL!

First off, head over to CloudFlare and register a new account

![CloudFlare](/img/ssl/2.png)

Next it'll ask for your website address.

![CloudFlare](/img/ssl/3.png)

After this CloudFlare will take about a minute to scan your existing DNS records. Once it’s finished it, it’ll show you the DNS records it’s found. You need to verify these records are correct. For CloudCannon websites the DNS records are fairly simple, usually the setup is:

* an A record for the root domain pointing to 184.169.135.34
* an A record for *.rootdomain pointing to 184.169.135.34
* perhaps an MX record if you have email set up for that domain

Once you’re happy these are correct click the continue button.

![CloudFlare](/img/ssl/4.png)

Next up is configuring CloudFlare. I switched the plan to 'Free' and the 'Performance' to CDN + Full optimizations.

![CloudFlare](/img/ssl/5.png)

Now you need to update your nameservers. To do this log in to your domain provider and change the nameservers to the ones that CloudFlare gives you.

![CloudFlare](/img/ssl/6.png)

Almost finished! Now go into your CloudFlare Settings

![CloudFlare](/img/ssl/7.png)

Find the SSL section and change it to "Flexible SSL"

![CloudFlare](/img/ssl/8.png)

That’s it! Changing your DNS can take up to 48 hours to propagate and CloudFlare’s free SSL can take up to 24 hours to set up. So while there should be no downtime, it might be a day or two before you have SSL and CloudFlare serving your website. 

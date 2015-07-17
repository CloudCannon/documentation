---
title: Subdomains
---

Adding a subdomain is the same as adding a domain. Go to the *domain* tab in the site settings.

![Site settings domain tab](/img/domains/empty.png){: .screenshot}

Once here enter the domain including the subdomain. For example if your domain is example.com add www. to the front to define www as the subdomain.

![Site settings domain tab with subdomain](/img/domains/example-entered.png){: .screenshot}

---

## Multiple Subdomains

When working with multiple subdomains from the same domain a subdomain will be delegated the main domain. One of the sites with a subdomain attached will have all other unallocated domains redirected to it. For example:

* Site 1 has www.example.com attached
* Site 2 has docs.example.com attached
* www.example.com is set to the main domain

Visiting any subdomain other than www.example.com or docs.example.com will redirect to www.example.com.

Once there is a second subdomain used on CloudCannon a *base domain* option we be available in the site settings.

![CloudCannon's base domain settings](/img/domains/base-domains.png){: .screenshot}

Clicking *Set Main Domain* will make the site attached the main domain and redirect all unused subdomains to that site.

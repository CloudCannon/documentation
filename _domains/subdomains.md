---
title: Subdomains
order: 3
requirements:
  build: Any
  plan: Free
  hosting: CloudCannon
---

Adding a subdomain is the same as adding a [Custom Domain](/domains/custom-domains/). To add a subdomain:

1. Go to the *Site Settings* / *Domain* section
2. Enter the domain including the subdomain

![Site settings domain section with subdomain](/img/domains/empty.png){: .screenshot srcset="/img/domains/empty.png 800w, /img/domains/empty@2x.png 1600w"}

If your domain is **example.com**, adding **www.** to the front defines **www** as the subdomain.
{: .info}

---

### Multiple Subdomains

When there are multiple sites with subdomains on the same domain, a subdomain is delegated as the main domain. All unallocated subdomains redirect to the sites with the main domain. For example:

* A site has **www.example.com** attached
* Another site has **docs.example.com** attached
* **www.example.com** is set as the main domain

Visiting any subdomain other than **www.example.com** or **docs.example.com** will redirect to **www.example.com**.

To set a site with a subdomain as the main domain:

1. Create at least two sites with the same domain and different subdomains
2. Navigate to the *Site Settings* / *Base Domain* section
3. Click **Set Main Domain** on a site to redirect all unused subdomains there

![CloudCannon Base Domain interface](/img/domains/base-domains.png){: .screenshot srcset="/img/domains/base-domains.png 800w, /img/domains/base-domains@2x.png 1600w"}


---
title: Custom Certificate
order: 1
---

CloudCannon SSL support is in private beta. To join, [contact support](mailto:support@cloudcannon.com) and request access.
{: .info}

### Adding a new SSL certificate

To add a new SSL Certificate:

1. Go to *Site Settings* / *SSL*
2. Click the **Add SSL Certificate** button
3. Fill in all of the fields available and submit the form

All certificates must be in PEM encoding. The placeholder text indicates the correct start and end headers.
{: .info}

Once added, the SSL certificate needs to be attached to the site.
{: .info}

![Adding a new SSL certificate](/img/ssl/adding.png){: srcset="/img/ssl/adding.png 800w, /img/ssl/adding@2x.png 1600w"}
{: .has-screenshot}

---

### Attaching an SSL certificate to a site

To add SSL to a site:

1. Go to *Site Settings* / *SSL*
2. Click **Attach** on any SSL certificate

![Attaching an SSL certificate](/img/ssl/attaching.png){: srcset="/img/ssl/attaching.png 800w, /img/ssl/attaching@2x.png 1600w"}
{: .has-screenshot}

---

### Redirecting HTTP to HTTPS

To redirect all HTTP traffic to HTTPS:

1. Ensure an SSL certificate is attached
2. Go to *Site Settings* / *Hosting*
2. Enable the **Redirect all HTTP traffic to HTTPS** option
3. Update the site.

![Redirecting HTTP to HTTPS](/img/ssl/redirecting.png){: srcset="/img/ssl/redirecting.png 800w, /img/ssl/redirecting@2x.png 1600w"}
{: .has-screenshot}

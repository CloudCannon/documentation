---
title: Let's Encrypt
order: 2
---

[Let’s Encrypt](https://letsencrypt.org/) is a new Certificate Authority: It’s free, automated, and open. This document will detail the steps to generating a free SSL Certificate for use on CloudCannon. [Let’s Encrypt](https://letsencrypt.org/) has many clients, for this example [certbot](https://certbot.eff.org/about/) will be used.

---

### Installing certbot

If you have previously installed an older version of [certbot](https://certbot.eff.org/about/) or the letsencryptclient, run `rm -rf ~/.local/share/letsencrypt` to clear conflicting data.
{: .info}

~~~bash
cd /tmp
git clone https://github.com/certbot/certbot.git
cd certbot
./certbot-auto --no-self-upgrade --debug renew --dry-run
~~~

---

### Running certbot

Running [certbot](https://certbot.eff.org/about/) will generate SSL Certificates for the domains we specify.

~~~bash
./certbot-auto --no-self-upgrade --debug certonly --manual
~~~

![Choosing the domain name](/img/ssl/letsencrypt/domain.png){: .screenshot srcset="/img/ssl/letsencrypt/domain.png 800w, /img/ssl/letsencrypt/domain@2x.png 1600w"}

Once the domain has been specified we must verify that we have access to that domain. Below is example output shown after the prompt:

~~~
Make sure your web server displays the following content at
http://letsencrypt.cloudcannon.com/.well-known/acme-challenge/34sS6lKqRtmEH6nccSVNF8ifykpAAueVhHz0yvheY0o before continuing:

34sS6lKqRtmEH6nccSVNF8ifykpAAueVhHz0yvheY0o.3-40nFYEAf5ItpgZuuISWUhg4fNm-vVW3T0RXmdzNkU

If you don't have HTTP server configured, you can run the following
command on the target server (as root):

mkdir -p /tmp/certbot/public_html/.well-known/acme-challenge
cd /tmp/certbot/public_html
printf "%s" 34sS6lKqRtmEH6nccSVNF8ifykpAAueVhHz0yvheY0o.3-40nFYEAf5ItpgZuuISWUhg4fNm-vVW3T0RXmdzNkU > .well-known/acme-challenge/34sS6lKqRtmEH6nccSVNF8ifykpAAueVhHz0yvheY0o
# run only once per server:
$(command -v python2 || command -v python2.7 || command -v python2.6) -c \
"import BaseHTTPServer, SimpleHTTPServer; \
s = BaseHTTPServer.HTTPServer(('', 80), SimpleHTTPServer.SimpleHTTPRequestHandler); \
s.serve_forever()"
Press ENTER to continue
~~~

Before pressing ENTER, add a `letsencrypt.txt` to the site. Add the values from the above output in the following format:

~~~markdown
---
permalink: /.well-known/acme-challenge/34sS6lKqRtmEH6nccSVNF8ifykpAAueVhHz0yvheY0o/ # Ensure the trailing slash remains
---
34sS6lKqRtmEH6nccSVNF8ifykpAAueVhHz0yvheY0o.3-40nFYEAf5ItpgZuuISWUhg4fNm-vVW3T0RXmdzNkU
~~~

Once compiled, return to the console and press ENTER:

~~~
IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at
   /etc/letsencrypt/live/letsencrypt.cloudcannon.com/fullchain.pem.
   Your cert will expire on 2016-09-06. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot-auto
   again. To non-interactively renew *all* of your ceriticates, run
   "certbot-auto renew"
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
~~~

This completes the use of [certbot](https://certbot.eff.org/about/) with a free cert for our domain. All parts of the cert are available at `/etc/letsencrypt/live/DOMAIN_NAME/`.

---

### Converting the Private Key to RSA

Before uploading to CloudCannon we must convert the private key into the correct format. This is done using the following command:

~~~bash
sudo openssl rsa -inform pem -in /etc/letsencrypt/live/DOMAIN_NAME/privkey.pem -outform pem
~~~

This command will output the key in RSA format, use this output when installing the cert onto CloudCannon.

---

### Installing onto CloudCannon

To install the newly generated SSL Certificate to CloudCannon:

- Follow the instructions for [Adding a new SSL Certificate](/ssl/custom-certificate/)
- Copy `/etc/letsencrypt/live/DOMAIN_NAME/cert.pem` to the public key field
- Copy the RSA format of the private key to the private key field
- Copy `/etc/letsencrypt/live/DOMAIN_NAME/chain.pem` to chain
- Save and attach the cert

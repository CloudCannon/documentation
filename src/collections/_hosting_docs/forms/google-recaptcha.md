---
title: Google reCAPTCHA
category: Forms
order: 6
requirements:
  build: Any
  plan: Free
  hosting: CloudCannon
---

[reCAPTCHA](https://developers.google.com/recaptcha/) embeds a CAPTCHA in your page preventing targeted and untargeted spam. CloudCannon does **not** send the email if the CAPTCHA fails to validate. [reCAPTCHA](https://developers.google.com/recaptcha/) requires additional configuration in the *Site Settings*.

![reCAPTCHA Example](/images/hosting/forms/captcha.gif)

To add [reCAPTCHA](https://developers.google.com/recaptcha/) to your site:

1. Sign up for an API key at [https://developers.google.com/recaptcha/](https://developers.google.com/recaptcha/)
2. Add the form element by following the instructions at the [reCAPTCHA documentation](https://developers.google.com/recaptcha/docs/display).
3. Add the secret and key to *Site Settings* / *Forms*

![reCAPTCHA Configuration](/images/hosting/forms/recaptcha.png){: .screenshot srcset="/images/hosting/forms/recaptcha.png 800w, /images/hosting/forms/recaptcha@2x.png 1600w"}

Once configured, any form submissions that fail to validate will return a 401 error page.

![401 Error Page](/images/hosting/forms/401-error.png){: .screenshot srcset="/images/hosting/forms/401-error.png 800w, /images/hosting/forms/401-error@2x.png 1600w"}

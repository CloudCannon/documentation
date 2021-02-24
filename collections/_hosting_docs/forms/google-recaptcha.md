---
title: Google reCAPTCHA
category: Forms
new_docs_link: https://cloudcannon.com/documentation/host/forms/google-recaptcha/
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

### reCAPTCHA v3

&nbsp;

Additional JavaScript is required to use reCAPTCHA v3 with CloudCannon forms. This is to add the required input named `g-recaptcha-response` before submitting. An example of how to set this up is:

1. Add your form to the HTML
2. Include the reCAPTCHA script tag with your Site ID
3. Add JavaScript to catch form submissions
4. Generate the recaptcha token
5. Add token to a new input named `g-recaptcha-response`
6. Resubmit the form

HTML Form:

&nbsp;

~~~html
{% raw %}<form method="post" id="my-form" action="/contact-success">
  <label for="email_address">Email Address</label>
  <input id="email_address" type="text" name="email">

  <label for="message">Message</label>
  <textarea id="message" name="message"></textarea>

  <input type="hidden" name="_to" value="{{ site.data.company.contact_email_address }}">
  <input type="text" name="_gotcha" style="display: none;">

  <input type="submit" value="Send Message">
</form>{% endraw %}
~~~

JavaScript:

~~~html
<script src="https://www.google.com/recaptcha/api.js?render=SITE_ID"></script>
<script>
    var submitted = false;
    var tokenCreated = false;
    var formEl = document.getElementById('my-form');

    formEl.addEventListener("submit", function (event) {

        // Check if the recaptcha exists
        if (!tokenCreated) {

            // Prevent submission
            event.preventDefault();

            // Prevent more than one submission
            if (!submitted) {
                submitted = true;
                // needs for recaptacha ready
                grecaptcha.ready(function() {
                    // do request for recaptcha token
                    // response is promise with passed token
                    grecaptcha.execute('SITE_ID', {action: 'create_comment'}).then(function (token) {
                        // add token to form
                        var input = document.createElement("input");
                        input.type = "hidden";
                        input.name = "g-recaptcha-response";
                        input.value = token;
                        formEl.appendChild(input);

                        // resubmit the form
                        tokenCreated = true;
                        formEl.submit();
                    });;
                });
            }
        }
  });
</script>
~~~
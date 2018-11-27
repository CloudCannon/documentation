---
title: Contact Forms
category: General
order: 4
requirements:
  build: Any
  plan: Free
  hosting: CloudCannon
---

Create contact forms for your sites. CloudCannon sends named form data to email addresses of your choosing.

To create a contact form:

1. Add an HTML form to a file
2. Set the `method` attribute to **post**
3. Set the `action` to where the visitor is redirected after the form submission
4. Add form fields with `name` attributes to collect data from visitors

{% highlight html %}
<form method="post" action="/success.html">
  <label>Email Address</label>
  <input type="text" name="email">

  <label>Name</label>
  <input type="text" name="name">

  <label>Message</label>
  <textarea name="message"></textarea>

  <label>Urgent</label>
  <input type="checkbox" name="urgent">

  <label>Type of Enquiry</label>
  <input type="radio" name="_subject" value="Sales Enquiry"> Sales
  <input type="radio" name="_subject" value="General Enquiry"> General

  <input type="hidden" name="_to" value="sales@example.com,support@example.com">
  <input type="hidden" name="_cc" value="sales.tracker@example.com">
  <input type="hidden" name="_hook" value="https://hooks.zapier.com/hooks/catch/1234567/abcdef/">
  <input type="text" name="_gotcha" style="display: none;">

  <input type="submit" value="Send Message">
</form>
{% endhighlight %}

### Special Fields

Use these fields to customise the email CloudCannon sends through the form. The fields can be hidden or visible depending on your requirements.

#### `_to`
{: .required}

The address (or addresses) that CloudCannon sends the email to. Send the email to multiple addresses by separating them with commas.

If a&nbsp;`_hook`&nbsp;is defined, this field will not be used.

{% highlight html %}
<input type="hidden" name="_to" value="contact@example.com">
{% endhighlight %}

#### `_replyto` or `email`

The value used for the Reply-To header in the email. Use this to ensure clients reply to the visitor rather than a default CloudCannon address.

{% highlight html %}
<label>
  Your Email Address
  <input type="text" name="_replyto">
 </label>
{% endhighlight %}

#### `_subject`

The subject of the email.

{% highlight html %}
<select name="_subject">
  <option>General Enquiry</option>
  <option>Quote Request</option>
  <option>Support</option>
</select>
{% endhighlight %}

#### `_cc`

The value used for the CC header in the email. Use this to send a copy in another address (or addresses) without sending it directly. Send a copy of the email to multiple addresses by separating them with commas.

{% highlight html %}
<input type="hidden" name="_cc" value="contact@example.com">
{% endhighlight %}

#### `_hook`

Instead of sending an email, a webhook can be supplied for the data to be sent to.&nbsp;

{% highlight html %}
<input type="hidden" name="_hook" value="https://hooks.zapier.com/hooks/catch/1234567/abcdef/">
{% endhighlight %}

> See [Webhooks](#webhooks).
{: .explainer}

#### `_gotcha`

Honeypot field for preventing untargeted spam. CloudCannon does **not** send the email if this field has a value. Hide it with CSS to prevent visitors filling it out.

{% highlight html %}
<input type="text" name="_gotcha" style="display: none;">
{% endhighlight %}

> For better spam prevention try using [Google reCAPTCHA](#google-recaptcha).
{: .explainer}

### Submitting with AJAX

Submitting a form with JavaScript saves a page load after sending a message, providing a more seamless experience. Viewers without JavaScript enabled fall back to the normal flow.

To submit your contact form with JavaScript:

1. Build and test your contact form
2. Override the submit event on your form
3. Change the page to notify your viewers the message was sent

Start with this JavaScript snippet and adapt it for your site:

{% highlight javascript %}
// Helper function to get form data in the supported format
function getFormDataString(formEl) {
  var formData = new FormData(formEl),
      data = [];

  for (var keyValue of formData) {
    data.push(encodeURIComponent(keyValue[0]) + "=" + encodeURIComponent(keyValue[1]));
  }

  return data.join("&");
}

// Fetch the form element
var formEl = document.getElementById("contact-form");

// Override the submit event
formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  if (grecaptcha) {
    var recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) { // reCAPTCHA not clicked yet
      return false;
    }
  }

  var request = new XMLHttpRequest();

  request.addEventListener("load", function () {
    if (request.status === 302) { // CloudCannon redirects on success
      // It worked
    }
  });

  request.open(formEl.method, formEl.action);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send(getFormDataString(formEl));
});
{% endhighlight %}

### Security

To protect your information and prevent spam these fields are encrypted before being served to the user.

* `_to`
* `_cc`
* `_hook`

### Webhooks

The `_hook` field allows you to supply a webhook that you control in order to process the form submission outside of email. The data is sent as a **POST** request with the Content Type `application/json`.

For security, we currently allow hooks from the following platforms to be used:

* [Zapier](https://zapier.com/){: target="_blank"}
  * [Documentation](https://zapier.com/help/webhooks/){: target="_blank"}
* [Automate](https://automate.io/){: target="_blank"}
  * [Documentation](https://docs.automate.io/apps/webhooks){: target="_blank"}
* [IFTTT](https://ifttt.com/){: target="_blank"}
  * [Help Page](https://help.ifttt.com/hc/en-us/articles/115010230347-The-Webhooks-Service){: target="_blank"}

If you have use cases beyond these platforms, [send us a message](https://cloudcannon.com/contact/).

#### IFTTT

Note that IFTTT does not support custom **JSON** keys. Webhook Applets have access to the three keys `value1`, `value2` and `value3`, the quantity and naming of which is fixed. This means that you will have to reflect this structure in your form, i.e.

{% highlight html %}
<label>Email Address</label>
<input type="email" name="value1">
{% endhighlight %}

Zapier and Automate do not have a limitation on the number of fields or custom keys.

### Google reCAPTCHA

[reCAPTCHA](https://developers.google.com/recaptcha/) embeds a CAPTCHA in your page preventing targeted and untargeted spam. CloudCannon does **not** send the email if the CAPTCHA fails to validate. [reCAPTCHA](https://developers.google.com/recaptcha/) requires additional configuration in the *Site Settings*.

![reCAPTCHA Example](/images/hosting/captcha.gif)

To add [reCAPTCHA](https://developers.google.com/recaptcha/) to your site:

1. Sign up for an API key at [https://developers.google.com/recaptcha/](https://developers.google.com/recaptcha/)
2. Add the form element by following the instructions at the [reCAPTCHA documentation](https://developers.google.com/recaptcha/docs/display).
3. Add the secret and key to *Site Settings* / *Forms*

![reCAPTCHA Configuration](/images/hosting/recaptcha.png){: .screenshot srcset="/images/hosting/recaptcha.png 800w, /images/hosting/recaptcha@2x.png 1600w"}

Once configured, any form submissions that fail to validate will return a 401 error page.

![401 Error Page](/images/hosting/401-error.png){: .screenshot srcset="/images/hosting/401-error.png 800w, /images/hosting/401-error@2x.png 1600w"}
---
title: Using Forms
category: Forms
order: 1
requirements:
  build: Any
  plan: Free
  hosting: CloudCannon
---

Create forms for your sites. CloudCannon sends named form data to email addresses of your choosing. Alternatively, [use a hook](/hosting/forms/using-webhooks/) to integrate with services like Zapier or IFTTT.

To create a form:

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

> See [Webhooks](/hosting/forms/using-webhooks/).
{: .explainer}

#### `_gotcha`

Honeypot field for preventing untargeted spam. CloudCannon does **not** send the email if this field has a value. Hide it with CSS to prevent visitors filling it out.

{% highlight html %}
<input type="text" name="_gotcha" style="display: none;">
{% endhighlight %}

> For better spam prevention try using [Google reCAPTCHA](/hosting/forms/google-recaptcha/).
{: .explainer}

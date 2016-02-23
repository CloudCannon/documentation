---
title: Form Submissions
order: 6
requirements:
  build: Any
  plan: Free
  hosting: CloudCannon
---

Add a contact form to your site.

Create a normal form element. Make the `method` attribute **post** and the `action` attribute point to the page you want the visitor to be redirected to after the form submission.

Add the input elements for your contact form. Finally, add a hidden field with a name of **cc_emails[]** and a value of the email address to send the form submission to.

Here's an example form:

{% highlight html %}
<form method="post" action="/success.html">
  <label>First Name</label><input type="text" name="first_name" />
  <label>Surname</label><input type="text" name="surname" />
  <label>Message</label><textarea name="message"></textarea>
  <input type="hidden" name="cc_emails[]" value="mike@cloudcannon.com" />
  <input type="hidden" name="cc_emails[]" value="george@cloudcannon.com" />

  <input type="submit" value="Send Message" />
</form>
{% endhighlight %}

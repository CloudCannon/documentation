---
title: Using Webhooks
category: Forms
new_docs_link: https://cloudcannon.com/documentation/host/forms/webhooks/
order: 3
requirements:
  build: Any
  plan: Free
  hosting: CloudCannon
---

The `_hook` field allows you to supply a webhook that you control in order to process the form submission outside of email. The data is sent as a **POST** request with the Content Type `application/json`.

For security, we currently allow hooks from the following platforms to be used:

* [Zapier](https://zapier.com/){: target="\_blank"}
  * [Documentation](https://zapier.com/help/webhooks/){: target="\_blank"}
* [Automate](https://automate.io/){: target="\_blank"}
  * [Documentation](https://docs.automate.io/apps/webhooks){: target="\_blank"}
* [IFTTT](https://ifttt.com/){: target="\_blank"}
  * [Help Page](https://help.ifttt.com/hc/en-us/articles/115010230347-The-Webhooks-Service){: target="\_blank"}

If you have use cases beyond these platforms, [send us a message](https://cloudcannon.com/contact/).

#### IFTTT

Note that IFTTT does not support custom **JSON** keys. Webhook Applets have access to the three keys `value1`, `value2` and `value3`, the quantity and naming of which is fixed. This means that you will have to reflect this structure in your form, i.e.

{% highlight html %}
<label>Email Address</label>
<input type="email" name="value1">
{% endhighlight %}

Zapier and Automate do not have a limitation on the number of fields or custom keys.

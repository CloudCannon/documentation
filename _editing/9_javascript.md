---
title: JavaScript
---

CloudCannon's Visual Editor works with JavaScript, you just need to make sure that the editable content is in the DOM at page load.

HTML that you render with JavaScript is not editable.

If you want to detect if you're in the CloudCannon editor you can do this:

{% highlight javascript %}
if (window.location.host === "app.cloudcannon.com") {
  alert("I'm in CloudCannon!");
} else {
  alert("I'm NOT in CloudCannon");
}
{% endhighlight %}

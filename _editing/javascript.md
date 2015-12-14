---
title: JavaScript
---

The CloudCannon editor works with JavaScript, as long as the editable content is in the DOM on page load.

HTML rendered with JavaScript is not editable.

To detect if a page is accessed inside the CloudCannon editor, use this snippet:

{% highlight javascript %}
if (window.location.host === "app.cloudcannon.com") {
  alert("I'm in CloudCannon!");
} else {
  alert("I'm NOT in CloudCannon");
}
{% endhighlight %}

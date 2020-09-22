---
title: Submitting with AJAX
category: Forms
order: 5
requirements:
  build: Any
  plan: Free
  hosting: CloudCannon
---

Submitting a form with JavaScript saves a page load after sending a message, providing a more seamless experience. Viewers without JavaScript enabled fall back to the normal flow.

To submit your form with JavaScript:

1. Build and test your form
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

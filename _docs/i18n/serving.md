---
title: Serving
category: Internationalisation
order: 5
requirements:
  build: Any
  plan: Pro
  hosting: CloudCannon
---


### Detecting the current locale

Localised sites inject the lang into the HTML elements class. For example:

{% highlight html %}
<html lang="de">
{% endhighlight %}

Using CSS you can alter anything from font-size to text direction:

{% highlight css %}
/* Arabic */
[lang=ar] .content {
  direction: rtl;
}
{% endhighlight %}

Run some custom JavaScript based on language:

{% highlight js %}
var lang = document.documentElement.lang;

if (lang) {
  console.log(lang); // logs your locale - check your console
} else {
  console.log("Using default locale");
}
{% endhighlight %}

<script>
var lang = document.documentElement.lang;

if (lang) {
  console.log(lang); // logs your locale - check your console
} else {
  console.log("Using default locale");
}
</script>

### Using an External Host

TODO run through how the redirects work and what data it runs off. Add an example NGINX config
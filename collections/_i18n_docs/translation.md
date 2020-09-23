---
title: Translation
category: General
order: 2
requirements:
  build: Any
  plan: Pro
  hosting: CloudCannon
---

CloudCannon Internationalisation allows you to serve your site in different languages based on the viewers browser settings.

You can enable Internationalisation in *Site Settings* / *i18n*.

![Enable i18n in i18n settings](/images/i18n/enable-i18n.png){: srcset="/images/i18n/enable-i18n.png 800w, /images/i18n/enable-i18n@2x.png 1600w"}{: .screenshot}


### Tagging content for translation

First we must add a key to each element we want internationalised. To do this add a `data-i18n` attribute with a unique key. For example:

{% highlight html %}
<h2 class="editable" data-i18n="welcome_message">Hello, welcome to my website</h2>
{% endhighlight %}


### Obtaining the current locale

Once you have tagged the elements that needs translation, CloudCannon can generate a lookup of the content. CloudCannon supports three file extensions: `.json`, `.yml` and `.properties`. These files are called locales.

To obtain the current locale you can visit any of these URLs on your site:

<ul>
	<li>
		/cms-current-locale.properties
{% highlight properties %}welcome_message = Hello, welcome to my website{% endhighlight %}
	</li>
	<li>
		/cms-current-locale.json
{% highlight json %}{"welcome_message": "Hello, welcome to my website"}{% endhighlight %}
	</li>
	<li>
		/cms-current-locale.yml
{% highlight yaml %}welcome_message: "Hello, welcome to my website"{% endhighlight %}
	</li>
</ul>


### Providing alternative locales

Once you have the current locale you can start creating new ones. For each new locale:

1. Create the file with your chosen format (either `.yml`, `.json` or `.properties`).
2. Name that file the locale that matches it. This locale should be a in the format `language[_territory]`. For example, general English is `en` and English specific to New Zealand should be `en_NZ`.
3. Use the current locale as a template and update the values for the new locale.
4. Add each file to the `_locales` directory in the root of your site.

Here are some example locales:

<ul>
	<li>
		/_locales/de.properties
{% highlight properties %}
welcome_message = Hallo, herzlich willkommen auf meiner Website
{% endhighlight %}
	</li>
	<li>
		/_locales/es.properties
{% highlight properties %}
welcome_message = Hola, bienvenido a mi página web
{% endhighlight %}
	</li>
</ul>

CloudCannon generates a new version of the HTML per locale and route visitors based on their accept-language header and country.


### Detecting the current locale

CloudCannon automatically injects the viewers locale into the HTML elements class as it is served. If a site has en_NZ support and the viewer accepts that language it looks like:

{% highlight html %}
<html class="language-en_nz">
{% endhighlight %}

Using CSS you can alter anything from font-size to text direction:

{% highlight css %}
/* Arabic */
.language-ar .content {
  direction: rtl;
}
{% endhighlight %}

Run some custom JavaScript based on language:

{% highlight js %}
var htmlElement = document.documentElement,
  languageClass = htmlElement.className.match(/language-([^\s]+)\b/);

if (languageClass) {
  console.log(languageClass[1]); // logs your locale - check your console
} else {
  console.log("Using default locale");
}
{% endhighlight %}

<script>
var htmlElement = document.documentElement,
  languageClass = htmlElement.className.match(/language-([^\s]+)\b/);

if (languageClass) {
  console.log(languageClass[1]); // logs your locale - check your console
} else {
  console.log("Using default locale");
}
</script>

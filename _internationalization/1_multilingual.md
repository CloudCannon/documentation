---
title: Multilingual
---

Support multiple languages on your site using CloudCannon Multilingual. To use multilingual you must be on CloudCannon's enterprise pricing plan and the site needs to be hosted on CloudCannon.

To begin making a site multilingual, we need to mark the content that needs to be translated. To do this add an attribute of `data-i18n` with a value of a unique identifier key for that item.

For example, I want this heading to be translated:

{% highlight liquid %}
<h2 class="editable"> Hello, welcome to my website </h2>
{% endhighlight %}

So I would add the `data-il8n` attribute:

{% highlight liquid %}
<h2 class="editable" data-il8n="main_welcome_heading"> Hello, welcome to my website </h2>
{% endhighlight %}

To translate the site, the translator or translation service needs a list of text snippets to translate. CloudCannon generates  a [properties file](https://en.wikipedia.org/wiki/.properties) which fits this purpose. It takes the keys you specified in the `il8n` and matches them with the text of the element.

The properties file for the example above is:

{% highlight liquid %}
main_welcome_heading = Hello, welcome to my website
{% endhighlight %}

To access the properties file go to: `http://yourwebsite.com/cms-current-locale.properties`.

I'll send this file to my translator who's going to translate it into two languages, spanish and german. The format I need back from the translator is two property files named the [short code of the language](http://www.metamodpro.com/browser-language-codes) with a properties extension (de.properties and es.properties in this case).

Inside these files the keys are exactly the same but the text is translated into the specified language.

de.properties:
{% highlight liquid %}
main_welcome_heading = Hallo, herzlich willkommen auf meiner Website
{% endhighlight %}

es.properties:
{% highlight liquid %}
main_welcome_heading = Hola, bienvenido a mi página web
{% endhighlight %}

Next I'll add those files to my site in a `_locales` directory.

CloudCannon now generates a version of the site for each language. It serves the translated versions based on the user's language setting in their browser.

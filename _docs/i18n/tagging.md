---
title: Tagging
category: Internationalisation
order: 2
requirements:
  build: Any
  plan: Pro
  hosting: CloudCannon
---

Tagging is the first step in the i18n process and will generate a source locale. You will define the content that needs to be translated by tagging the HTML of the site with a `data-i18n` attribute. This will allow a JSON file called a source locale. The source locale will contain a key for each one of the strings in your site that needs to be translated. Below is an example JSON file for an english source:

{% highlight json %}
{
    "welcome": "Hello, welcome to my website",
    "sign-up-button": {
        "value": "Sign Up",
        "title": "Click to create account"
    }
}
{% endhighlight %}

To begin, identify all of the elements that need translation. This will include HTML, text content and element attributes (alt, title).

### Tagging elements

To tag an element for translation, add a `data-i18n` attribute. For example:

{% highlight html %}
<h2 class="editable" data-i18n>Hello, welcome to my website</h2>
{% endhighlight %}

A unique hash will be generated for the translation key. If you want to specify the key for translation, add a `data-i18n` attribute with a value:

{% highlight html %}
<h2 class="editable" data-i18n="welcome">Hello, welcome to my website</h2>
{% endhighlight %}

For element attributes, add a `data-i18n-attrs` attribute. For example, the input below has a `value` and `title` that needs translation:

{% highlight html %}
<input type="submit" value="Sign Up"
    title="Click to create account"
    data-i18n="sign-up-button"
    data-i18n-attrs="value,title">
{% endhighlight %}


### Generating the locale file on CloudCannon

> YO! This feature could also work by pushing the source.json into the source repo. This would mean that the repo has `_translations/source.json` which would be tracked with source control. Then the added languages would be in `_translations/locales/__locale__.json`.

[Ensure I18n is enabled](/i18n/introduction/#enabling-i18n-on-cloudcannon). To download the current locale:

1. Go to *Translate* / *Source Translations*
2. Click **Download Source Locale**

IMAGE HERE

### Generating the locale file without CloudCannon

To achieve the same results without CloudCannon you can use our open source gulp setup.

> YO! This feature will work. It will be pretty straight forward to document since the repo will have a readme.

---

Once you have completed Tagging you can move on to [Translating](/i18n/translating/) the content.
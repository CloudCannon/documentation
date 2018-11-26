---
title: Geolocation
category: Internationalisation
order: 1
requirements:
  build: Any
  plan: Pro
  hosting: CloudCannon
---

Geolocation on CloudCannon allows you to detect which country your viewers are coming from. CloudCannon automatically injects the viewers country code into the HTML elements class as it is served.

If a viewer is from New Zealand, the class `country-nz` is added to look like this:

{% highlight html %}
<html class="country-nz">
{% endhighlight %}

Use CSS to show and hide elements:

{% highlight css %}
.new-zealand-content {
  display: none;
}

.country-nz .new-zealand-content {
  display: block;
}
{% endhighlight %}

Run custom JavaScript based on country code:

{% highlight js %}
var htmlElement = document.documentElement,
  countryClass = htmlElement.className.match(/\bcountry\-([a-z0-9]{2})\b/);

if (countryClass) {
  console.log(countryClass[1]); // logs your country code - check your console
} else {
  console.log("No country found :(");
}
{% endhighlight %}

<script>
var htmlElement = document.documentElement,
  countryClass = htmlElement.className.match(/\bcountry\-([a-z0-9]{2})\b/);

if (countryClass) {
  console.log(countryClass[1]);
} else {
  console.log("No country found :(");
}
</script>

Here are the country codes supported:

<table>
  <tr>
    <th>Code</th>
    <th>Country</th>
  </tr>
  {% for country in site.data.countries %}
  <tr>
    <td>{{ country.code }}</td>
    <td>{{ country.name }}</td>
  </tr>
  {% endfor %}
</table>

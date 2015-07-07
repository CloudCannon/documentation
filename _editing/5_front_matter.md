---
title: Front Matter
warning: This feature is only available on Jekyll sites.
---

Front Matter is a [Jekyll feature](http://jekyllrb.com/docs/frontmatter/) which allows you to set any sort of custom variables on a page.

Here is a basic example. I've inserted this at the top of my `index.html` file:

{% highlight liquid %}
---
title: Blogging Like a Hacker
---
{% endhighlight %}

The triple dashes indicate we're using Front Matter. Inside we can set our own variables which can be used throughout the rest of the page using [Liquid](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers).

For example, later in `index.html` I could use that variable:

{% highlight liquid %}
{% raw %}
<title>{{ page.title }}</title>
{% endraw %}
{% endhighlight %}

Using CloudCannon you can update Front Matter by clicking the &#39;Toggle Settings&#39; button at top right when you have a file open.

<img alt="Settings" src="/img/jekyll/front-matter/1.png" class="screenshot">

You have complete control over how your data is structured and the interface used to update it.

The available types of data are:

### Small text field
A small field for text.

#### Usage
Have a small amount of text on a variable.

#### Front Matter
{% highlight liquid %}
---
short_description: The finest hand-crafted clothing
---
{% endhighlight %}

#### Liquid
{% highlight liquid %}
{% raw %}
<p>{{ page.short_description }}</p>
{% endraw %}
{% endhighlight %}

<img alt="Front matter" src="/img/editing/front_matter/small_text_field.png" class="screenshot">

***

### Large text field
A text field which is expanded for longer text.

#### Usage
This is automatically used when there is too much text for a small text field.

#### Front Matter
{% highlight liquid %}
---
long_description: Products are crafted in-house by hand, making each piece a labor of love and an exercise in craftsmanship
---
{% endhighlight %}

#### Liquid
{% highlight liquid %}
{% raw %}
<p>{{ page.long_description }}</p>
{% endraw %}
{% endhighlight %}

<img alt="Front matter" src="/img/editing/front_matter/large_text_field.png" class="screenshot">

***

### Boolean
A Checkbox which can be triggered on or off.

#### Usage
Set a variable to true or false.

#### Front Matter
{% highlight liquid %}
---
show_feature: true
---
{% endhighlight %}

#### Liquid
{% highlight liquid %}
{% raw %}
{% if page.show_feature %}
  <div class="feature">
    The Feature!
  </div>
{% endif %}
{% endraw %}
{% endhighlight %}

<img alt="Front matter" src="/img/editing/front_matter/check_box.png" class="screenshot">

***

### Image / File
Select an image or file.

#### Usage
Add **_path** to the end of your variable name.

#### Front Matter
{% highlight liquid %}
---
background_image_path: /image/bg.png
---
{% endhighlight %}

#### Liquid
{% highlight liquid %}
{% raw %}
<img src="{{ page.background_image_path }}" alt="BG image" />
{% endraw %}
{% endhighlight %}

<img alt="Front matter" src="/img/editing/front_matter/image.png" class="screenshot">

***

### Date
Shows a date picker.

#### Usage
Add **_on** to the end of your variable name.

#### Front Matter
{% highlight liquid %}
---
sale_starts_on: 2015-01-09
---
{% endhighlight %}

#### Liquid
{% highlight liquid %}
{% raw %}
<p>Big sale starts on {{ page.sale_starts_on | date: '%B %d, %Y' }}</p>
{% endraw %}
{% endhighlight %}

<img alt="Front matter" src="/img/editing/front_matter/date.png" class="screenshot">

***

### Select
Shows as a select box.

#### Usage
There's two ways of populating data in the select box.

The first is to add an array to `_config.yml`:

{% highlight liquid %}
{% raw %}
styles:
  - Red
  - Blue
  - Green
{% endraw %}
{% endhighlight %}

The second is to have your data in a Collection. Let's say we have a Collection of products, the select box will be populated with items from the products Collection.

#### Front Matter
You reference the singular version of the data array you set in `_config.yml` or your Collection.

{% highlight liquid %}
---
style: Green
product: beanie
---
{% endhighlight %}

#### Liquid
{% highlight liquid %}
{% raw %}
<p> Only available in {{ page.style }} </p>
{% endraw %}
{% endhighlight %}

<img alt="Front matter" src="/img/editing/front_matter/select.png" class="screenshot">

***

### Hash
Hash groups related data in its own interface.

#### Usage
Set a hash in the Front Matter.

#### Front Matter
{% highlight liquid %}
---
footer:
  copyright: LionWear Inc.
  since: 2004
---
{% endhighlight %}

#### Liquid
{% highlight liquid %}
{% raw %}
<footer> &copy; {{ page.footer.since }}{{ page.footer.copyright }} </footer>
{% endraw %}
{% endhighlight %}

<img alt="Front matter" src="/img/editing/front_matter/hash_1.png" class="screenshot">

<img alt="Front matter" src="/img/editing/front_matter/hash_2.png" class="screenshot">

***

### Array
Similar to a hash, it separates the data into a different interface. Items in the array can be
reordered and deleted and new items can be added.

#### Usage
Set an array in the Front Matter.

#### Front Matter
{% highlight liquid %}
---
staff:
  - Bill
  - Ben
  - Badger
---
{% endhighlight %}

#### Liquid
{% highlight liquid %}
{% raw %}
<ul class="staff">
  {% for staff_member in page.staff %}
    <li> {{ staff_member }} </li>
  {% endfor %}
</ul>
{% endraw %}
{% endhighlight %}

<img alt="Front matter" src="/img/editing/front_matter/simple_array_1.png" class="screenshot">

<img alt="Front matter" src="/img/editing/front_matter/simple_array_2.png" class="screenshot">

***

### Advanced Array
Any data structures are possible. You can even have nested arrays.

#### Usage
Set an array, hash or any data type inside an existing array.

#### Front Matter
{% highlight liquid %}
---
testimonials:
  - name: Beans
    quote: LionWear is my favourite way to buy clothes online
    photo_path: "/image/beans_profile.jpg"
    favourite_items:
      - Blue Hoodie
      - Pink Beanie
  - name: Peanut
    quote: "Next day deliver is amazing!"
    photo_path: "/image/peans_profile.jpg"
    favourite_items:
      - Skinny Jeans
      - Woolen Socks
---
{% endhighlight %}

#### Liquid
{% highlight liquid %}
{% raw %}
<div class="testimonials">
  {% for testimonial in page.testimonials %}
    <blockquote>{{ testimonial.quote }}</blockquote>
    <p><img src="{{ testimonial.photo_path }}" alt="{{ testimonial.name }}" /> {{ testimonial.name }} </p>
    <ul>
      {% for item in testimonial.favourite_items %}
        <li>{{ item }}</li>
      {% endfor %}
    </ul>
  {% endfor %}
</div>
{% endraw %}
{% endhighlight %}


<img alt="Front matter" src="/img/editing/front_matter/advanced_array_1.png" class="screenshot">

<img alt="Front matter" src="/img/editing/front_matter/advanced_array_2.png" class="screenshot">

<img alt="Front matter" src="/img/editing/front_matter/advanced_array_3.png" class="screenshot">

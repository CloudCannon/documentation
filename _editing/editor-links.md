---
title: Editor Links
order: 10
---

*Editor Links* allow you to link to other sections of the CloudCannon interface from within the [Visual Editor](/editing/visual-editor/). Use them to create edit buttons for your collection items and blog posts that are not visible on your live site.

*Editor Links* are prefixed with `cloudcannon:` and match the URL structure of the CloudCannon app, for example:

* `<a href="cloudcannon:collections/_staff/">Edit all staff</a>`
* `<a href="cloudcannon:collections/_staff/jane-doe.md">Edit Jane Doe</a>`
* `<a href="cloudcannon:collections/_posts/2015-07-30-welcome-post.md">Edit Welcome Post</a>`
* `<a href="cloudcannon:status">Link to Site Status and Recent Activity</a>`


---

To have edit links for posts in a list, add an Editor Link in the blog post loop:

{% highlight liquid %}
<ul class="blog-posts">
  {% raw %}{% for post in site.posts %}
    <li class="blog-post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.excerpt }}</p>
      <a href="{{ post.url }}">Read more</a>

      <!-- Editor Link -->
      <a href="cloudcannon:collections/{{ post.path }}" class="editor-link">Edit</a>
    </li>
  {% endfor %}{% endraw %}
</ul>
{% endhighlight %}

![CloudCannon blog posts with edit buttons](/img/editing/editor-links/blog-posts.png){: .screenshot srcset="/img/editing/editor-links/blog-posts.png 800w, /img/editing/editor-links/blog-posts@2x.png 1600w"}

---

To have an edit link on a collection item page, add the following to the page:

{% highlight liquid %}
{% raw %}<a href="cloudcannon:collections/{{ page.relative_path }}" class="editor-link">Edit</a>{% endraw %}
{% endhighlight %}

![Netflix case study collection item with edit button](/img/editing/editor-links/collection-item.png){: .screenshot srcset="/img/editing/editor-links/collection-item.png 800w, /img/editing/editor-links/collection-item@2x.png 1600w"}

When generating *Editor Links* in Jekyll, collection items should use `relative_path`, while posts and pages should use `path`.
{: .info}

---

To show *Editor Links* inside the editor and hide them on the live site:

1. Give the links an appropriate class name (e.g. `.editor-link`).
2. Use the following CSS to show the links inside the editor only:


{% highlight css %}
.editor-link {
  display: none;
}

.cms-editor-active .editor-link {
  display: block;
}
{% endhighlight %}

CloudCannon adds the `.cms-editor-active` class to the `body` of your site in the [Visual Editor](/editing/visual-editor/). The class is not on the live site.
{: .info}
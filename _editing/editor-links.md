---
title: Editor Links
---

Editor Links allow you to link to other sections of the CloudCannon interface from within the [Visual Editor](/editing/visual-editor/). Use them to create edit buttons for your collection items and blog posts that are not visible on your live site.

Editor Links are prefixed with `cloudcannon:` and match the URL structure of the CloudCannon app, for example:

* `&lt;a href="cloudcannon:collections/_staff/"&gt;Edit all staff&lt;/a&gt;`
* `&lt;a href="cloudcannon:collections/_staff/jane-doe.md"&gt;Edit Jane Doe&lt;/a&gt;`
* `&lt;a href="cloudcannon:collections/_posts/2015-07-30-my-blog-post.md"&gt;Edit my blog post&lt;/a&gt;`
* `&lt;a href="cloudcannon:status"&gt;Link to Site Status and Recent Activity&lt;/a&gt;`


---

To have edit links for posts in a list, add an Editor Link in the blog post loop:

{% highlight liquid %}
&lt;ul class="blog-posts"&gt;
  {% raw %}{% for post in site.posts %}
    &lt;li class="blog-post"&gt;
      &lt;h3&gt;{{ post.title }}&lt;/h3&gt;
      &lt;p&gt;{{ post.excerpt }}&lt;/p&gt;
      &lt;a href="{{ post.url }}"&gt;Read more&lt;/a&gt;

      &lt;!-- Editor Link --&gt;
      &lt;a href="cloudcannon:collections/{{ post.path }}" class="editor-link"&gt;Edit&lt;/a&gt;
    &lt;/li&gt;
  {% endfor %}{% endraw %}
&lt;/ul&gt;
{% endhighlight %}

![CloudCannon blog posts with edit buttons](/img/editing/editor-links/blog-posts.png){: .screenshot srcset="/img/editing/editor-links/blog-posts.png 800w, /img/editing/editor-links/blog-posts@2x.png 1600w"}

---

To have an edit link on a collection item page, add the following to the page:

{% highlight liquid %}
{% raw %}&lt;a href="cloudcannon:collections/{{ page.relative_path }}" class="editor-link"&gt;Edit&lt;/a&gt;{% endraw %}
{% endhighlight %}

![Netflix case study collection item with edit button](/img/editing/editor-links/collection-item.png){: .screenshot srcset="/img/editing/editor-links/collection-item.png 800w, /img/editing/editor-links/collection-item@2x.png 1600w"}

When generating Editor Links in Jekyll, collection items should use `relative_path`, while posts and pages should use `path`.
{: .info}

---

To show Editor Links inside the editor and hide them on the live site:

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
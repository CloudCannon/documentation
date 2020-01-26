---
title: Editor Links
category: Experience
order: 2
requirements:
  build: Any
  plan: Free
  hosting: Any
---

*Editor Links* allow you to link to other sections of the CloudCannon interface from within the [Visual Editor](/editing/editors/visual-editor/). Use them to create edit buttons for your collection items and blog posts that are not visible on your live site. You can also add front matter *Editor Links* to open the front matter editor at specified fields.

*Editor Links* are prefixed with `cloudcannon:` and match the URL structure of the CloudCannon app, for example:

~~~html
<a href="cloudcannon:collections/_staff/">
  Edit all staff
</a>

<a href="cloudcannon:collections/_staff/jane-doe.md">
  Edit Jane Doe
</a>

<a href="cloudcannon:collections/_posts/2015-07-30-welcome-post.md">
  Edit Welcome Post
</a>

<a href="cloudcannon:status">
  Link to Site Status and Recent Activity
</a>
~~~

Front matter *Editor Links* are prefixed with `cloudcannon:#` and match the Liquid format used to reference them, for example:

~~~html
<!-- Inputs -->
<a href="cloudcannon:#title">
  Edit the title
</a>

<!-- Arrays -->
<a href="cloudcannon:#array[1]">
  Edit the first array item
</a>

<a href="cloudcannon:#array[+]">
  Create a new item in an array
</a>

<!-- Inputs within an Object -->
<a href="cloudcannon:#object.title">
  Edit a variable within an object
</a>

<a href="cloudcannon:#object.array">
  Edit an array within an object
</a>

<!-- Inputs within an Array inside an Object -->
<a href="cloudcannon:#object.array[0].title">
  Edit the title of the first array item within an object
</a>
~~~

Instead of only anchor tags, any element can have an *Editor Link* by using the `data-cms-editor-link` attribute, for example:

~~~html
<h1 data-cms-editor-link="cloudcannon:#title">
  Editor Links
</h1>
~~~

### Posts[\#](#posts){: .header-link}[\#](#posts){: .header-link}

To have edit links for posts in a list, add an Editor Link in the blog post loop:

{% highlight liquid %}
<ul class="blog-posts">

    <li class="blog-post">
      <h3></h3>
      <p></p>
      <a href="">Read more</a>

      <!-- Editor Link -->
      <a href="cloudcannon:collections/" class="editor-link">Edit post</a>
    </li>

</ul>
{% endhighlight %}

![CloudCannon blog posts with edit buttons](/images/editing/editor-links/blog-posts.png){: .screenshot srcset="/images/editing/editor-links/blog-posts.png 800w, /images/editing/editor-links/blog-posts@2x.png 1600w"}

### Data Files[\#](#data-files){: .header-link}

You can make an editor link to a file in the \_data directory, such as `_data/company.yml`. Just make the link like so:

~~~
<a href="cloudcannon:collections/_data/company.yml" class="btn">Update Company</a>
~~~

### Collection Items[\#](#collection-items){: .header-link}[\#](#collection-items){: .header-link}

To have an edit link on a collection item page, add the following to the page:

{% highlight liquid %}
<a href="cloudcannon:collections/" class="editor-link">Edit</a>
{% endhighlight %}

If you are using a custom `collections_dir` include `site.collections_dir` in your editor link:

{% highlight liquid %}
<a href="cloudcannon:collections//" class="editor-link">Edit</a>
{% endhighlight %}

> When generating *Editor Links* in Jekyll, collection items should use `relative_path`, while posts and pages should use `path`.
{: .explainer}

### Toggling Visiblilty[\#](#toggling-visiblilty){: .header-link}[\#](#toggling-visiblilty){: .header-link}

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

> CloudCannon adds the `.cms-editor-active` class to the `body` of your site in the [Visual Editor](/editing/visual-editor/). The class is not on the live site.
{: .explainer}

### Editor Link Behaviour[\#](#editor-link-behaviour){: .header-link}[\#](#editor-link-behaviour){: .header-link}

Front matter can be highlighted within the sidebar or displayed standalone in a modal pop up. To change how an editor link opens:

1. Add the `data-cms-editor-link-style` attribute
2. Set the attribute’s value to **modal** or **sidebar** (optional)

~~~html
<a href="cloudcannon:#title" data-cms-editor-link-style="modal">
  Edit the title
</a>

<h1 data-cms-editor-link="cloudcannon:#title" data-cms-editor-link-style="modal">
  Editor Links
</h1>
~~~

> Using modal-style editor links that point directly to [hidden fields](/editing/editors/front-matter-editor/#hidden) show the field in the pop up.
{: .explainer}

CloudCannon adds the `cms-editor-link-dirty` class to *Editor Links* after changes are made using the modal style. Use this to add styles indicating that changes are pending in the editor.

### Styling[\#](#styling){: .header-link}[\#](#styling){: .header-link}

You can give *Editor Links* our default styles by adding the `cms-editor-link` class. This provides a seamless experience alongside [Editable Regions](/editing/interfaces/editable-regions/) by using the same styles.

~~~html
<a href="cloudcannon:#title" class="cms-editor-link">
  Edit the title
</a>

<h1 data-cms-editor-link="cloudcannon:#title" class="cms-editor-link">
  Editor Links
</h1>
~~~

> `cms-editor-link-dirty` is also handled with the default styles.
{: .explainer}
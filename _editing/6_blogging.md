---
title: Blogging
warning: This feature is only available on Jekyll sites.
---

Blog posts are [Markdown](https://help.github.com/articles/markdown-basics/) files which live in the `_posts` folder of your site.

Jekyll expects the file name to be in a particular format for blog posts. The format is: `YEAR-MONTH-DAY-title.md`. For example: `_posts/2015-03-06-my-first-post.md`.

The format of a blog is Front Matter at the top, then the content is written in Markdown. Like so:

{% highlight text %}
---
layout: post
title: My First Blog Post
---
You'll find this post in your `_posts` directory. Go ahead and edit it and re-build
the site to see your changes. You can rebuild the site in many different ways, but
the most common way is to run `jekyll serve`, which launches a web server and
auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the
convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter.
Take a look at the source for this post to get an idea about how it works.
{% endhighlight %}

In CloudCannon, go to the **Collections** tab for your website where there will be two items: Draft Posts and Published Posts. Draft posts are hidden when your site is published.

<img alt="Draft post" src="/img/jekyll/blogging/1.png" class="screenshot">

Let's add a new Draft post. Click the **Start a new draft** button and enter a title for the post.

<img alt="Naming draft post" src="/img/jekyll/blogging/3.png" class="screenshot">

Now click on the file you've just created. It'll open our stripped-back markdown editor. Enter the content for your blog post here.

<img alt="Editing" src="/img/jekyll/blogging/4.png" class="screenshot">

If you ever want to see the raw Markdown go to the Code Editor.

<img alt="Code Editor" src="/img/jekyll/blogging/6.png" class="screenshot">

You can always configure the layout, blog title and any other Front Matter you've defined by going to the **Settings** tab.

<img alt="Code Editor" src="/img/jekyll/blogging/5.png" class="screenshot">

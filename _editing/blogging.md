---
title: Blogging
order: 6
requirements:
  build: Jekyll
  plan: Free
  hosting: Any
---

Create and manage Jekyll blogs with CloudCannon.

Jekyll blog posts are [Markdown](https://help.github.com/articles/markdown-basics/) files located in the `_posts` folder, with filenames in the `YEAR-MONTH-DAY-title.MARKUP` format. The contents of a post file starts with front matter, and has the content underneath. For example:

{% highlight text %}
---
title: My First Blog Post
---
The content for my post is here.

* Markdown is great for developers
* CloudCannon has an easy-to-use interface for non-developers to write Markdown
{% endhighlight %}



To access the CloudCannon blogging interface:

1. Add a Jekyll site with at least one published post or draft
2. Go to the *Collections* / *Posts* or *Drafts* section

![Empty blogging interface](/img/editing/blogging/posts-interface.png){: .screenshot srcset="/img/editing/blogging/posts-interface.png 800w, /img/editing/blogging/posts-interface@2x.png 1600w"}



To start a new draft from the *Collections* / *Posts* or *Drafts* sections:

1. Open the *Add Files* menu in the top right corner and select **Add Draft**
2. Enter a title/filename for the post and press enter

Your file will be opened in the CloudCannon content editor. Front matter for the file is populated from [Collection Defaults](/editing/collection-defaults/) or an existing item to keep the structure consistent.

Draft posts are hidden on your live site unless set otherwise in *Site Settings* / *Details*.
{: .info}

![Creating a new draft](/img/editing/blogging/adding-draft.png){: .screenshot srcset="/img/editing/blogging/adding-draft.png 800w, /img/editing/blogging/adding-draft@2x.png 1600w"}



There are a number of ways to add content for your new draft:

* Type the main content directly onto the page
* Insert images, links, and style your text with the editor controls above

Once the content is finished, publish your post with the button provided in the top right. Posts can always be edited after publishing.

The owner and developers of a site can access the raw Markdown via the **Switch to Source Editor** button.
{: .info}

![Editing draft](/img/editing/blogging/edit-draft.png){: .screenshot srcset="/img/editing/blogging/edit-draft.png 800w, /img/editing/blogging/edit-draft@2x.png 1600w"}



[Front matter](/editing/front-matter/) (e.g. title, description and thumbnail) can be updated in the *Settings Panel*, accessed by selecting the **Toggle Settings** button in the top right corner.

Hide front matter by putting it in [Jekyll Defaults](http://jekyllrb.com/docs/configuration/#front-matter-defaults){: target="_blank"} instead.
{: .info}

![Editing draft with Settings Panel open](/img/editing/blogging/edit-draft-settings.png){: .screenshot srcset="/img/editing/blogging/edit-draft-settings.png 800w, /img/editing/blogging/edit-draft-settings@2x.png 1600w"}

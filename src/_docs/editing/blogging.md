---
title: Blogging
category: Editing
order: 7
requirements:
  build: Jekyll
  plan: Free
  hosting: Any
---

Create and manage Jekyll blogs with CloudCannon.

Jekyll blog posts are files located in the `_posts` folder, with filenames in the `YEAR-MONTH-DAY-title.MARKUP` format. The contents of a post file starts with front matter, and has the content underneath. For example:

{% highlight text %}
---
title: My First Blog Post
---
The content for my post is here.

* Markdown is great for developers
* CloudCannon has an easy-to-use interface for non-developers to write Markdown
{% endhighlight %}



To access the CloudCannon blogging interface:

1. Add a Jekyll site with at least one post or draft
2. Go to the *Explore* / *Posts* or *Drafts* section

![Empty blogging interface](/images/editing/blogging/posts-interface.png){: srcset="/images/editing/blogging/posts-interface.png 800w, /images/editing/blogging/posts-interface@2x.png 1600w"}{: .screenshot}



To start a new draft from the *Explore* / *Posts* or *Drafts* sections:

1. Open the *Add Files* menu in the top right corner and select **Add Draft**
2. Enter a title/filename for the post and press enter

Your file is opened in the [Content Editor](/editing/content-editor/). Front matter for the file is populated from [Collection Defaults](/editing/collection-defaults/) or an existing item to keep the structure consistent.

> Draft posts are hidden on your live site unless set otherwise in *Site Settings* / *Build*.
{: .explainer}

![Creating a new draft](/images/editing/blogging/adding-draft.png){: srcset="/images/editing/blogging/adding-draft.png 800w, /images/editing/blogging/adding-draft@2x.png 1600w"}{: .screenshot}



There are a number of ways to add content for your new draft:

* Type the main content directly onto the page
* Insert images, links, and style your text with the editor controls above

Once the content is finished, publish your post with the button provided in the top right. Posts can always be edited after publishing.

> The owner and developers of a site can access the source via the **Switch to Source Editor** button.
{: .explainer}

![Editing draft](/images/editing/blogging/edit-draft.png){: srcset="/images/editing/blogging/edit-draft.png 800w, /images/editing/blogging/edit-draft@2x.png 1600w"}{: .screenshot}



[Front matter](/editing/front-matter/) (e.g. title, description and thumbnail) is updated in the *Settings Panel*, accessed by selecting the **Toggle Settings** button in the top right corner.

> Hide front matter by putting it in [Jekyll Defaults](http://jekyllrb.com/docs/configuration/#front-matter-defaults){: target="_blank"} instead.
{: .explainer}

![Editing draft with Settings Panel open](/images/editing/blogging/edit-draft-settings.png){: srcset="/images/editing/blogging/edit-draft-settings.png 800w, /images/editing/blogging/edit-draft-settings@2x.png 1600w"}{: .screenshot}

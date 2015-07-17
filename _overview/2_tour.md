---
title: Tour
---

This tour will give you a glimpse of the features on CloudCannon and walk you through the different editing modes.

Download the [Creative site](/creative.zip).

Creative is a [Jekyll](http://jekyllrb.com) site. Jekyll sites are similar to static sites (websites with just HTML, CSS and Javascript files) but much more powerful. You can have a blog, layouts and complex generated pages.

This website started off as a free HTML5 template. It's been converted to a Jekyll website with a blog, layouts and other features.

For a full guide how to convert a HTML5 template to a Jekyll site check out our [Getting Started Guide](/getting_started/introduction/).

## CloudCannon Overview

Sign up for a CloudCannon account.

![Sign Up](/img/overview/sign_up.png){: .screenshot}

Create a new site.

![Create a new site](/img/overview/creative.png){: .screenshot}

Now we need to upload our site to CloudCannon. There's a few ways of doing this. We could sync with GitHub, BitBucket or Dropbox. The advantage of doing this is you'll have a full history of changes on your website and you can revert to anytime. It also makes it easier to work with a team of developers because everyone can pull and push changes to the website on their local machine.

For this site we'll just upload the files from our computer.

Click the file upload button.

![Upload](/img/overview/upload.png){: .screenshot}

Go to upload folder (This is only supported in some browsers. If it's greyed out use one of the storage providers mentioned above).

Select the folder of the unzipped Creative website.

![Upload Folder](/img/overview/upload_folder.png){: .screenshot}

All the files are in CloudCannon now.

![File Browser](/img/overview/file_browser.png){: .screenshot}

Click on `index.html`. This opens the website in a live preview. You can navigate around the site as if it's a live website.

![preview](/img/overview/preview.png){: .screenshot}

Go to the Visual Editor at the top right. In the Visual Editor you can make content changes inline on the website. The yellow boxes indicate the updatable areas of the page.

![Visual Editor](/img/overview/visual_editor.png){: .screenshot}

Front Matter is a Jekyll feature which allows you to configure variables like the page title on a page. CloudCannon provides the settings view where you can easily update the front matter.

![Front Matter](/img/overview/front_matter.png){: .screenshot}

Go to the Code Editor at the top right. The Code Editor gives access to the source code of the site. Notice how the h1 and p have `class="editable"`, this is how you control what elements are updated in the Visual Editor.

![Code Editor](/img/overview/code_editor.png){: .screenshot}

Let's get into some blogging. Click the Collections tab on the left. This brings up your draft posts.

![Draft Posts](/img/overview/draft_posts.png){: .screenshot}

Click on the draft post. This will open it up in a Markdown editor. Try making a few edits and clicking Publish Post when you're finished.

![Draft Posts](/img/overview/blog_post.png){: .screenshot}

To finish off the tutorial we'll go through Collections. Collections are a way of grouping related data, on this site we're using it to list the services this agency offers.

Click Collections and go to services. You can update items in the collection in a similar way to the blog post.

![services](/img/overview/services.png){: .screenshot}

That's it for the overview. You can view the live website by clicking the *yoursite*.cloudvent.net link at the top of CloudCannon.

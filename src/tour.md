---
title: Tour
---

This tour sets up your first site on CloudCannon, showcases some of the features and demonstrates different editors.

Download the [creative site](/creative.zip) and follow along, or just read through the steps.
The creative site is a free HTML template enhanced with Jekyll features.

### Preparation

[Sign up](https://app.cloudcannon.com/users/sign_up) for a CloudCannon account, then create a new site from the *Sites List*:

1. Select **Add Site**
2. Type a name for your site (e.g. Creative)
3. Press **Enter** to confirm

![Creating a new site from the Sites List](/images/overview/sites-list-empty.png){: srcset="/images/overview/sites-list-empty.png 800w, /images/overview/sites-list-empty@2x.png 1600w"}{: .screenshot}

### Adding Files

CloudCannon works directly with the static or Jeykll source files you provide. To upload the creative site source files:

1. Select the **Upload folder** option
2. Select the extracted **creative** folder

> Alternatively, drag and drop files into the *File Browser*.
{: .explainer}

![File Browser with Add Files menu open](/images/overview/file-browser-add-menu.png){: srcset="/images/overview/file-browser-add-menu.png 800w, /images/overview/file-browser-add-menu@2x.png 1600w"}{: .screenshot}

> Some browsers do not support folder upload. The best alternative in this case is syncing with a storage provider.
{: .explainer .warning}

Each file uploads individually to CloudCannon through your web browser.
After the uploads finish, CloudCannon builds the site and deploys it to a test domain.

![File Browser with files](/images/overview/file-browser-complete.png){: srcset="/images/overview/file-browser-complete.png 800w, /images/overview/file-browser-complete@2x.png 1600w"}{: .screenshot}

View the live site on the test domain by clicking the ***.cloudvent.net** link in the top left.

> Keep a full history of changes and work on your local machine by syncing files with a storage provider instead.
{: .explainer}

### Inline Editing

Open the *Visual Editor* by selecting **Edit** in the left sidebar.

The *Visual Editor* is for making content changes inline on the website.
Yellow boxes indicate *Editable Regions* in each page.
Navigate around the site to make changes to other pages.

![Visual Editor](/images/overview/visual-editor.png){: srcset="/images/overview/visual-editor.png 800w, /images/overview/visual-editor@2x.png 1600w"}{: .screenshot}

*Front Matter* is a Jekyll feature for defining custom metadata on a page (e.g. title or layout).
CloudCannon provides the *Settings Panel* to update front matter within the *Visual Editor*.
Open it with the **Toggle Settings** button in the top right for pages with front matter.

![Editing front matter in the Settings Panel](/images/overview/settings-panel.png){: srcset="/images/overview/settings-panel.png 800w, /images/overview/settings-panel@2x.png 1600w"}{: .screenshot}

### Code Editing

The *Source Editor* provides developer-access to the raw source code of a file.
To open files in the source editor, open files from the *File Browser*, or select **Switch to Source Editor** in the top right of the *Visual Editor*.

If you're editing `/index.html`, the `h1` and `p` have `class="editable"`, defining those elements as editable in the *Visual Editor*.

![Source Editor](/images/overview/source-editor.png){: srcset="/images/overview/source-editor.png 800w, /images/overview/source-editor@2x.png 1600w"}{: .screenshot}

> Clients and non-developers don't have access to the *Source Editor*.
{: .explainer}

### Content Editing

Open the *Explore* section by selecting **Explore** in the left sidebar.
This section contains your pages, drafts, posts, collections items and data files.

![Explore section with Pages group open](/images/overview/pages.png){: srcset="/images/overview/pages.png 800w, /images/overview/pages@2x.png 1600w"}{: .screenshot}

Select the **Drafts** group and open the **Second Blog Post** draft.
The draft opens in the *Content Editor*, a distraction-free WYSIWYG editor that saves to Markdown.

Draft posts are hidden on the live site until published. To publish the draft:

1. Make final edits to the main content and front matter
2. Select **Publish Post** in the top right

> Make future changes to published posts with the *Content Editor* or inline with the *Visual Editor*.
{: .explainer}

![Content Editor](/images/overview/content-editor.png){: srcset="/images/overview/content-editor.png 800w, /images/overview/content-editor@2x.png 1600w"}{: .screenshot}

Open the *Explore* section again and select the **Services** group.

Services is a Jekyll collection, a feature used to group related items in a scalable way.
This collection is for listing the services offered on the creative site.

![Collections section with Services group open](/images/overview/services.png){: srcset="/images/overview/services.png 800w, /images/overview/services@2x.png 1600w"}{: .screenshot}

Open any of the collection items in *Services*.
Collection items are updated in the *Content Editor* the same way as drafts and posts.

### Next Steps

This tour only covers some of the features available to you.

Explore the features CloudCannon offers at your own pace through this documentation. Extend this tour by providing editing access to clients with [Client Sharing](/sharing/client-sharing/) or look through the [overview](/#features) for a summary of each section.

[CloudCannon Academy](https://learn.cloudcannon.com/) has vast range of curated resources, guides and videos for Jekyll. Improving your Jekyll skills allows you to build better sites and editing experiences with CloudCannon for your team and clients.

> Contact us at [support@cloudcannon.com](mailto:support@cloudcannon.com) with any questions or feedback.
{: .explainer}

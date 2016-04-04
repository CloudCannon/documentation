---
title: Visual Editor
order: 1
---


The *Visual Editor* is the main way to edit content in CloudCannon. [Editable Regions](/editing/editable-regions/) have yellow borders. To make an update, click inside a yellow box and edit the content inline. Navigate to other pages by clicking links on the site.

The *Page Selector* shows a list of pages, posts, drafts and collection items to navigate to.
Use the **Toggle Pages** button in the top right corner to access it.

![Visual Editor](/img/editing/visual-editor.png){: .screenshot srcset="/img/editing/visual-editor.png 800w, /img/editing/visual-editor@2x.png 1600w"}

---

### Editor Content

Create content that only appears in the *Visual Editor* with CSS or JavaScript.

The *Visual Editor* adds the `.cms-editor-active` class to the `body` of the page. Use this to show elements that are hidden on the live site:

{% highlight css %}
.editor-content {
  display: none;
}

.cms-editor-active .editor-content {
  display: block;
}
{% endhighlight %}

Alternatively, check `window.location.host` with JavaScript to find out if a page is being viewed inside the *Visual Editor*:

{% highlight javascript %}
if (window.location.host === "app.cloudcannon.com") {
  alert("Inside CloudCannon!");
} else {
  alert("Not in CloudCannon.");
}
{% endhighlight %}

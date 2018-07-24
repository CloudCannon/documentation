---
title: Dashboard
category: Navigation
order: 0
requirements:
  build: Any
  plan: Free
  hosting: Any
---

The Dashboard is used to give editors a breakdown of all thats important on their site.

![Source Editor](/images/editing/source-editor.png){: srcset="/images/editing/source-editor.png 800w, /images/editing/source-editor@2x.png 1600w"}{: .screenshot}

This has 3 main components; Site Breakdown, Main Actions, and Recent Activity.

### Site Breakdown

The site breakdown is a representation of the [Explore](navigation/explore) navigation. Icons are attached to each file type. Icons can be configured by adding an `_icon` key to your collections. The value of `_icon` is any icon from [Google's Material Icons](https://material.io/tools/icons/).

```
collections:
  staff_members:
    _icon: people
```

### Main Actions

This sits below the site breakdown. This defaults to having a single action (View live site). Two more options can be added by [configuring the client interface](/sharing/client-sharing/#interface).

### Recent Activity

This is a summary of the last 6 actions to occur on the site. A more full history can be viewed in the *Developer / Reports* section.

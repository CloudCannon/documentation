---
title: Dashboard
category: Navigation
order: 0
requirements:
  build: Any
  plan: Free
  hosting: Any
---

The Dashboard gives editors a breakdown of the main sections of the site.

![Example Dashboard](/uploads/screen-shot-2018-07-25-at-9-06-55-am.png){: .screenshot srcset="/uploads/screen-shot-2018-07-25-at-9-06-55-am.png 800w, /uploads/screen-shot-2018-07-25-at-9-06-55-am@2x.png 1600w"}

This has three main sections: Site Breakdown, Main Actions, and Recent Activity.

### Site Breakdown

The site breakdown is a representation of the [Explore](navigation/explore) navigation. CloudCannon provides default icons for each file type. You can override these icons by adding an `_icon` key to your collections. The value of `_icon` is any icon from [Google's Material Icons](https://material.io/tools/icons/).

```
collections:
  staff_members:
    _icon: people
```

### Main Actions

Sits below the site breakdown and defaults to having a single action (View live site). You can configure two more options in the&nbsp;[client interface](/sharing/client-sharing/#interface).

### Recent Activity

This is a summary of the last six actions to occur on the site. You can view a full history in the *Developer / Reports* section.
---
title: Collection Defaults
order: 9
requirements:
  build: Jekyll
  plan: Free
  hosting: Any
---

Provide default front matter and/or content for new drafts and collection items.
Defaults for collection item files are copied from `_defaults.md` in the root collection folder.
Defaults files are hidden in the *Collections* section to prevent changes from non-developers and clients.

Set the default extension for new files to `.html` by using `_defaults.html` instead.
{: .info}

For example:

* `/_staff/_defaults.md` contains defaults for new staff members
* `/_posts/_defaults.md` contains defaults for new draft posts

New items created will use these values. If the `title` and `name` attributes are present, they are set to the name used when a user creates a file.

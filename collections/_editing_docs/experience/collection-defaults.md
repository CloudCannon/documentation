---
title: Collection Defaults
category: Experience
new_docs_link: https://cloudcannon.com/documentation/edit/editing/collections/#defaults
canonical_url: https://cloudcannon.com/documentation/edit/editing/collections/#defaults
order: 1
requirements:
  build: Jekyll
  plan: Free
  hosting: Any
---

Provide default front matter and/or content for new drafts and collection items. Defaults for collection item files are copied from `_defaults.md` in the root collection folder. Defaults files are hidden in the *Explore* section to prevent changes from non-developers and clients.

> Set the default extension for new files to `.html` by using `_defaults.html` instead.
{: .explainer}

For example:

* `/_staff/_defaults.md` contains defaults for new staff members
* `/_posts/_defaults.md` contains defaults for new draft posts

New items created use these values. If the `title` and `name` attributes are present, they are set to the name used when a user creates a file.

> Looking to set the default values for new array items? Use [Array Structures](/editing/options/input-options/#array-structures) instead.
{: .explainer}
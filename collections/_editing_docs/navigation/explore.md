---
title: Explore
category: Navigation
order: 1
requirements:
  build: Any
  plan: Free
  hosting: Any
---

Explore allows navigation of all pages, collections and data in your site. This generates automatically based on your site configuration. Images and titles come from the corresponding file's front matter.

![Explore section](/images/editing/navigation/explore.png){: .screenshot srcset="/images/editing/navigation/explore.png 800w, /images/editing/navigation/explore@2x.png 1600w"}

### Grouping

CloudCannon splits your collections, pages and data into three default groups. Customise these groups to tailor the editing experience to your site. Reorder, hide, group or display items differently with the following options.

### Collections

These options are set in `_config.yml` on the top level, and affect the *Explore* section navigation.

| Option | Values |
| --- | --- |
| \_explore | Object |

`_explore.groups` defines the groups shown in the *Explore* navigation.

```yaml
_explore:
  groups:
    - heading: Blogging
      collections:
        - posts
        - drafts
    - heading: Other
      collections:
        - pages
        - staff
        - features
```

### Collection

These options are set in `_config.yml` inside specific collection metadata, and affect the item lists within each *Explore* group.

| Option | Values |
| --- | --- |
| \_sort\_key | String, matching a front matter field of the collection items |
| \_subtext\_key | String, matching a front matter field of the collection items |
| \_image\_key | String, matching a front matter field of the collection items |
| \_image\_size | *cover*, *contain* or unset (default) |
| \_singular\_name | String |
| \_singular\_key | String |
| \_disable\_add | *true* or *false* (default) |
| \_icon | String, matching [Material Icon](https://material.io/tools/icons/) name |
| \_add_options | Array of objects, see format below |

`_sort_key` sets the sorting of the collection inside *Explore*.

`_subtext_key` defines a front matter field to use when displaying subtext on an item.

`_image_key` defines a front matter field to use when displaying an image on an item.

`_image_size` sets how images are displayed in the list.

`_singular_name` overrides the default singular display name of the collection.

`_singular_key` overrides the default singular input key of the collection.

`_disable_add` prevents users from adding new collection items.

`_icon` overrides the default collection icon with an icon from [Google's Material Icons](https://material.io/tools/icons/).

`_add_options` changes the options presented in the add dropdown menu list.

```yaml
collections:
  staff:
    output: true
    _sort_key: surname
    _subtext_key: role
    _image_key: profile_image
    _image_size: cover
    _singular_name: Staff Member
    _singular_key: staff_member
    _disable_add: false
    _icon: people
    _add_options:
      - name: Add Staff Member
        icon: person_add
        href: "cloudcannon::editor/:collections_dir/_staff/.:extension🆕"
```


#### Add Options

Create or change actions for the current collection in the add dropdown menu list with `_add_options`. Define them with the following format:

| Field | Values |
| --- | --- |
| name | String, the text used in the menu |
| icon | String, matching [Material Icon](https://material.io/tools/icons/) name |
| href | String, the link opened when the option is clicked |

> Add options can include actions on the current collection, other collections and external links.
{: .explainer}

The `href` field is formatted as an [Editor Link](/editing/experience/editor-links/) or external link. There are a number of variables you can use to make these links more flexible:

| Placeholder | Values |
| --- | --- |
| :editor | Usually **explore**, is **update** if creating an HTML file |
| :collections_dir | The Jekyll `collections_dir` path defined in `_config.yml` |
| :base_path | The path the editor is currently viewing in the *Explore* section, not including the `source` or `collections_dir` |
| :base_path_postify | Same as `:base_path`, with **/_drafts** changed to **/_posts** |
| :base_path_draftify | Same as `:base_path`, with **/_posts** changed to **/_drafts** |
| :source | The Jekyll `source` path defined in `_config.yml` |
| :extension | The extension of the default content file |

The default content file is the file listed after 🆕 in your [Editor Link](/editing/experience/editor-links/), or the [Collection Defaults](/editing/experience/collection-defaults/) file if not listed.

Defaults:

```
collections:
  posts:
    _add_options:
      - name: Add Post
        href: "cloudcannon::editor/:collections_dir/:base_path/.:extension🆕"
      - name: Add Draft
        href: "cloudcannon::editor/:collections_dir/:base_path_draftify/.:extension🆕:base_path_postify/_defaults.:extension"
  <collection-name>: (for all collections)
    _add_options:
      - name: Add <collection-name>
        href: "cloudcannon::editor/:collections_dir/:base_path/.:extension🆕"
```

Extended example:

```
collections:
  posts:
    _add_options:
      - name: Add Post
        href: "cloudcannon:explore/_posts/.md🆕"
      - name: Add Draft
        href: "cloudcannon:explore/_drafts/.md🆕/_posts/_defaults.md"
  staff:
    _add_options:
      - name: Add Staff Member
        href: "cloudcannon:explore/_staff/.md🆕"
      - name: Add Author
        icon: edit
        href: "cloudcannon:explore/_staff/.md🆕/_staff/_defaults-author.md"
  offices:
    _add_options:
      - name: Add Office
        href: "cloudcannon:explore/_offices/.md🆕"
      - name: Add Office Location
        icon: public
        href: "cloudcannon:explore/_data/office-locations.yml"
      - name: Search on Google
        icon: search
        href: "https://www.google.com/"
```


#### File

These options are set in the front matter (or with Jekyll Defaults) of specific files, and affect individual items in the *Explore* group lists.

| Option | Values |
| --- | --- |
| \_unlisted | *true* or *false* (default) |
| \_enabled_editors | Array of strings (*visual* and *content*), enabled and/or preferred editors |

`_unlisted` hides specific files from the *Explore* section (still accessible from [Visual Editor](/editing/editors/visual-editor/) and direct links).

`_enabled_editors` controls how your team edits specific files, use this to set a preferred editor and/or disable the others. The first value sets which editor opens from the Explore section, the other values specify which editors are accessible. Available values are *visual* and *content*, for the [Visual Editor](/editing/editors/visual-editor/) and [Content Editor](/editing/editors/content-editor/) respectively. The [Source Editor](/editing/editors/source-editor/) is always available for those with permission.

```yaml
---
_unlisted: true
_enabled_editors:
  - visual
  - content
---
```

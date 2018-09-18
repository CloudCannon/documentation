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

![Explore section](/images/navigation/explore.png){: .screenshot srcset="/images/navigation/explore.png 800w, /images/navigation/explore@2x.png 1600w"}

### Grouping

CloudCannon splits your collections, pages and data into three default groups. Customise these groups to tailor the editing experience to your site. Reorder, hide, group or display items differently with the following options.


#### Collections

These options are set in `_config.yml` on the top level, and affect the *Explore* section navigation.

| Option | Values |
| ------ | ------ |
| _explore | Object |

`_explore.groups` defines the groups shown in the *Explore* navigation.

```yaml
_explore:
  groups:
    - heading: Blogging
      collections:
        - _posts
        - _drafts
    - heading: Other
      collections:
        - pages
        - _staff
        - _features
```


#### Collection

These options are set in `_config.yml` inside specific collection metadata, and affect the item lists within each *Explore* group.

| Option | Values |
| ------ | ------ |
| _sort_key | String, matching a front matter field of the collection items |
| _subtext_key | String, matching a front matter field of the collection items |
| _image_key | String, matching a front matter field of the collection items |
| _image_size | *cover*, *contain* or unset (default) |
| _singular_name | String |
| _disable_add | *true* or *false* (default) |

`_sort_key` sets the sorting of the collection inside *Explore*.

`_subtext_key` defines a front matter field to use when displaying subtext on an item.

`_image_key` defines a front matter field to use when displaying an image on an item.

`_image_size` sets how images are displayed in the list.

`_singular_name` overrides the default singular name of the collection.

`_disable_add` prevents users from adding new collection items.

```yaml
collections:
  staff:
    output: true
    _sort_key: surname
    _subtext_key: role
    _image_key: profile_image
    _image_size: cover
    _singular_name: Staff Member
    _disable_add: false
```

#### File

These options are set in the front matter (or with Jekyll Defaults) of specific files, and affect individual items in the *Explore* group lists.

| Option | Values |
| ------ | ------ |
| _unlisted | *true* or *false* (default) |

`_unlisted` hides specific files from the *Explore* section (still accessible from [Visual Editor](/editing/visual-editor) and direct links).

```yaml
---
_unlisted: true
---
```

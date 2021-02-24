---
title: Data Editor
category: Editors
new_docs_link: https://cloudcannon.com/documentation/edit/interfaces/content-editor/
order: 9
---

The *Data Editor* is a group of input fields. The inputs shown are dependent on your keys and values. See [Inputs](/editing/interfaces/inputs/) for a list of choices to tune the experience.

YAML, JSON and CSV files open in the *Data Editor*, most commonly in the `_data` directory (configurable in `_config.yml` as `data_dir`). The use cases for data files include: office locations, restaurant menus, staff members and opening hours.

`/_data/staff.yml`:

{% highlight yaml %}
- name: George Phillips
  email: george@cloudcannon.com
- name: Mike Neumegen
  email: mike@cloudcannon.com
- name: Ross Phillips
  email: ross@cloudcannon.com
{% endhighlight %}

`/_data/staff.json`:

{% highlight json %}
[
  {
    "name": "George Phillips",
    "email": "george@cloudcannon.com"
  },
  {
    "name": "Mike Neumegen",
    "email": "mike@cloudcannon.com"
  },
  {
    "name": "Ross Phillips",
    "email": "ross@cloudcannon.com"
  }
]
{% endhighlight %}

![YAML/JSON interface](/images/editing/editors/yaml-json.png){: srcset="/images/editing/editors/yaml-json.png 800w, /images/editing/editors/yaml-json@2x.png 1600w"}{: .screenshot}

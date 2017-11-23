---
title: Data Files
category: Editing
order: 9
requirements:
  build: Jekyll
  plan: Free
  hosting: Any
---

Create and manage [Jekyll data files](https://jekyllrb.com/docs/datafiles/) in CloudCannon.

Data files are YAML, JSON or CSV files located in the `_data` directory (configurable in `_config.yml` as `data_dir`). Use them to separate content from source code.
The use cases for data files include: office locations, restaurant menus, staff members and opening hours.

The [Content Editor](/editing/content-editor/) is an easy-to-use editor that supports data files. To access the interface:

1. Add a Jekyll site with at least one data file
2. Open the file from *Explore* / *Data* section

![Data files interface](/images/editing/data-files/data-files-interface.png){: srcset="/images/editing/data-files/data-files-interface.png 800w, /images/editing/data-files/data-files-interface@2x.png 1600w"}
{: .has-screenshot}

> Developers have access to the raw contents with the [Source Editor](/editing/source-editor/).

The editor adapts to the type of data file opened:


### CSV

A spreadsheet-like interface.

`/_data/offices.csv`:

{% highlight text %}
latitude,longitude,name
-45.878760,170.502798,Dunedin
-41.286460,174.776236,Wellington
-46.098799,168.945819,Gore
-46.413187,168.353773,Invercargill
-35.117330,173.267559,Kaitaia
{% endhighlight %}

![CSV interface](/images/editing/data-files/csv.png){: srcset="/images/editing/data-files/csv.png 800w, /images/editing/data-files/csv@2x.png 1600w"}
{: .has-screenshot}


### YAML and JSON

Group of input fields, similar to [Front Matter](/editing/front-matter/).

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

![YAML/JSON interface](/images/editing/data-files/yaml-json.png){: srcset="/images/editing/data-files/yaml-json.png 800w, /images/editing/data-files/yaml-json@2x.png 1600w"}
{: .has-screenshot}
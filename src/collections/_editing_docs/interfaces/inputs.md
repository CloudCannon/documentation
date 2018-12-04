---
title: Inputs
category: Interfaces
order: 2
requirements:
  build: Any
  plan: Free
  hosting: Any
---

Inputs are interfaces for different types of content. Use a different key for a different input. Use these conventions to customise the editor for your team and clients. This is used in the [Front Matter](/editing/editors/front-matter-editor/), [Data Editor](/editing/editors/data-editor/) and [CSV Editor](/editing/editors/csv-editor/).

> There are some exceptions where the value itself dictates the input (e.g. booleans)
{: .explainer}

The available inputs are listed below:

| {% assign grouped = site.inputs</td><td>group_by: 'category'</td><td>sort_by_array: 'name', site.data.docs_order %} |

* {% for group in grouped %}
* [{{ group.name }}](#{{ group.name | slugify }})
  * {% assign inputs = group.items | sort: 'order' %} {% for input in inputs %}
  * [{{ input.title }}](#{{ group.name | slugify }}/{{ input.title | slugify }})
  * {% endfor %}
* {% endfor %}

> Customise these interfaces further by adding sizes, formats, comments and defaults with [Options](https://staging-docs.cloudcannon.com/editing/options/options/).
{: .explainer}

{% for group in grouped %}

---

### {{ group.name }}

{% assign inputs = group.items | sort: 'order' %} {% for input in inputs %}

#### {{ input.title }}

<div class="settings-panel-example"><div class="details">{{ input.details | markdownify }}<pre><code class="highlight-tag language-yaml">{{ input.yaml_code_block }}</code></pre> {% if input.info %}<blockquote class="explainer">{{ input.info | markdownify }}</blockquote>{% endif %}</div><div class="example">{% for image in input.image_paths %} <img alt="{{ input.title }} interface" src="{{ image }}" /> {% endfor %}</div></div>

{% endfor %} {% endfor %}
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

{% assign grouped = site.inputs | group_by: 'category' | sort_by_array: 'name', site.data.docs_order %}

<ul>
{% for group in grouped %}
	<li>
		<a href="#{{ group.name | slugify }}">{{ group.name }}</a>
		<ul>
			{% assign inputs = group.items | sort: 'order' %}
			{% for input in inputs %}
				<li><a href="#{{ group.name | slugify }}/{{ input.title | slugify }}">{{ input.title }}</a></li>
			{% endfor %}
		</ul>
	</li>
{% endfor %}
</ul>

> Customise these interfaces further by adding sizes, formats, comments and defaults with [Options](/editing/options/).
{: .explainer}

{% for group in grouped %}
<hr>
<h3 id="{{ group.name | slugify }}">{{ group.name }}</h3>

{% assign inputs = group.items | sort: 'order' %}
{% for input in inputs %}
<h4 id="{{ group.name | slugify }}/{{ input.title | slugify }}">{{ input.title }}</h4>
<div class="settings-panel-example">
	<div class="details">
		{{ input.details | markdownify }}

		{% highlight yaml %}{{ input.yaml_code_block }}{% endhighlight %}

		{% if input.info %}<blockquote class="explainer">{{ input.info | markdownify }}</blockquote>{% endif %}
	</div>
	<div class="example">
		{% for image in input.image_paths %}
			<img alt="{{ input.title }} interface" src="{{ image }}">
		{% endfor %}
	</div>
</div>
{% endfor %}
{% endfor %}

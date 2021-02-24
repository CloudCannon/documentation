---
title: Editable Regions
category: Interfaces
new_docs_link: https://cloudcannon.com/documentation/edit/editing/html/#editable-regions
order: 1
requirements:
  build: Any
  plan: Free
  hosting: Any
---

Define *Editable Regions* to set the content clients and team members can update in the [Visual Editor](/editing/editors/visual-editor/).

*Editable Regions* have yellow borders in the [Visual Editor](/editing/editors/visual-editor/), indicating what areas are updatable. Define large sections to give full control, or limit access by defining select images and areas of text.

To define an *Editable Region*:

1. Identify the HTML element you want editable
2. Add `class="editable"` to the HTML element

> Define multiple classes if the element already has a class, for example: `<div class="content editable">`.
{: .explainer}

The [Visual Editor](/editing/editors/visual-editor/) supports JavaScript, however, HTML rendered with JavaScript is not editable.

The *Editable Region* interface used depends on the defined element:

{% assign ordered = site.editable_regions | sort: "order" %} {% for editable_region in ordered %} <hr>

### {{ editable_region.name }}

{% for element in editable_region.elements %}{% if element %}`{{ element }}` {% endif %}{% endfor %}

{{ editable_region.content }} {% endfor %}

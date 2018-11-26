---
name: Markdown Content
elements:
  - 
image:
---

~~~html
<div>{% raw %}{{ content }}{% endraw %}</div>
~~~

Markdown content elements are elements which only contain `{% raw %}{{ content }}{% endraw %}`. CloudCannon makes this element editable on any page with a Markdown file as the source. The editing controls are determined by the surrounding element: `div` elements are block level editables, `span` are inline level editables.

> Elements containing other elements and `{% raw %}{{ content }}{% endraw %}` are not editable. Layouts containing more than one `{% raw %}{{ content }}{% endraw %}` are not editable. For these cases, the [Content Editor](/editing/content-editor/) is available for editing.
{: .explainer}

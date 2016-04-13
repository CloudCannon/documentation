---
title: Collections
order: 7
requirements:
  build: Jekyll
  plan: Free
  hosting: Any
---

Manage your Jekyll collections with ease in CloudCannon.

Collections are for managing groups of structured content. The concepts are similar to [Blogging](/editing/blogging/), without the chronological restriction. Collections have many applications, including: API documentation, products, albums and blog authors.

CloudCannon provides an easy-to-use interface for managing collections. To access the CloudCannon collections interface:

1. Add a Jekyll site with at least one collection
2. Go to the tab for your collection in the *Collections* section

![Empty collections interface](/img/editing/collections/collections-interface.png){: .screenshot srcset="/img/editing/collections/collections-interface.png 800w, /img/editing/collections/collections-interface@2x.png 1600w"}



To create a new collection item:

1. Open the *Add Files* menu in the top right corner and select **Add *Collection Name***
2. Enter a title/filename for the item and press enter

Your file will be opened in the CloudCannon content editor. Front matter for the file is populated from [Collection Defaults](/editing/collection-defaults/) or an existing item to keep the structure consistent.

![Creating a new collection item](/img/editing/collections/adding-item.png){: .screenshot srcset="/img/editing/collections/adding-item.png 800w, /img/editing/collections/adding-item@2x.png 1600w"}



There are a number of ways to add content for your new item:

* Type the main content directly onto the page
* Insert images, links, and style your text with the editor controls above

Non-output HTML collections can only be edited in the [Source Editor](/editing/source-editor/).

The owner and developers of a site can access the raw file content via the **Switch to Source Editor** button.
{: .info}

![Editing item](/img/editing/collections/edit-item.png){: .screenshot srcset="/img/editing/collections/edit-item.png 800w, /img/editing/collections/edit-item@2x.png 1600w"}

[Front matter](/editing/front-matter/) (e.g. title, description and thumbnail) can be updated in the *Settings Panel*, accessed by selecting the **Toggle Settings** button in the top right corner.

Hide front matter by putting it in [Jekyll Defaults](http://jekyllrb.com/docs/configuration/#front-matter-defaults){: target="_blank"} instead.
{: .info}

![Editing item with Settings Panel open](/img/editing/collections/edit-item-settings.png){: .screenshot srcset="/img/editing/collections/edit-item-settings.png 800w, /img/editing/collections/edit-item-settings@2x.png 1600w"}



---

To create a Jekyll collection to manage and display staff members, follow this example (assumes `/_layouts/default.html` exists):

1.  Define the staff collection and default layout in `/_config.yml`:

    ~~~
    collections:
      staff:
        output: true

    defaults:
      -
        scope:
          path: ""
          type: "staff"
        values:
          layout: "staff-member"
    ~~~

    Jekyll generates a page for each staff member with `output: true`. The default **staff-member** layout avoids setting it in each file.

2.  Create `/_staff/elon.md` with the following content:

    ~~~
    ---
    name: Elon Musk
    position: CEO
    twitter_handle: "@elonmusk"
    profile_photo_path: http://www.wired.com/images_blogs/wiredscience/2012/10/ff_musk4_f.jpg
    ---
    Born in South Africa in 1971 Elon Musk was raised in Pretoria by a South African engineer father, Errol Musk, and Canadian born Pennsylvania Dutch, nutritionist and author mother, Maye. As he grew up he dreamed of moving to the US where he believed “anything is possible.” His first stop though was Canada where he spent two years at Queens University in Kingston Ontario.
    ~~~

3.  Create `/staff.html` to display all staff members:

    ~~~
    {% raw %}---
    layout: default
    ---
    <ul class="staff-members">
      {% for member in site.staff %}
        <li class="staff-member">
          <img src="{{ member.profile_photo_path }}" alt="{{ member.name }}">
          <p>
            <a href="{{ member.url }}">
              {{ member.name }} - <strong>{{ member.position }}</strong>
            </a>
          </p>
        </li>
      {% endfor %}
    </ul>{% endraw %}
    ~~~

    Jekyll provides the `url` attribute to link to the generated page for each staff member.

4.  Create the `staff-member` layout by creating `/_layouts/staff-member.html`. Generated staff pages use this file:

    ~~~
    {% raw %}---
    layout: default
    ---
    <img src="{{ page.profile_photo_path }}" alt="{{ page.name }}">
    <h1>{{ page.name }} - {{ page.position }}</h1>
    <p>Twitter Handle: {{ page.twitter_handle }}</p>
    {{ page.content }}{% endraw %}
    ~~~

---
title: Collections
category: Workflows
order: 2
requirements:
  build: Jekyll
  plan: Free
  hosting: Any
---

Manage your Jekyll collections with ease in CloudCannon.

Collections are for managing groups of structured content. The concepts are similar to [Blogging](/editing/workflows/blogging/), without the chronological restriction. Collections have many applications, including: API documentation, products, albums and blog authors.

To access the easy-to-use CloudCannon interface for managing collections:

1. Add a Jekyll site with at least one collection
2. Go to the tab for your collection in the *Explore* section

![Empty collections interface](/images/editing/collections/collections-interface.png){: .screenshot srcset="/images/editing/collections/collections-interface.png 800w, /images/editing/collections/collections-interface@2x.png 1600w"}

To create a new collection item:

1. Open the *Add Files* menu in the top right corner and select **Add *Collection Name***
2. Enter a title/filename for the item and press enter

Your new file is opened in the [Content Editor](/editing/editors/content-editor/). Front matter for the file is populated from [Collection Defaults](/editing/experience/collection-defaults/) or an existing item to keep the structure consistent.

![Creating a new collection item](/images/editing/collections/adding-item.png){: .screenshot srcset="/images/editing/collections/adding-item.png 800w, /images/editing/collections/adding-item@2x.png 1600w"}

There are a number of ways to add content for your new item:

* Type the main content directly onto the page
* Insert images, links, and style your text with the editor controls above

> The owner and developers of a site can access the raw file content via the **Switch to Source Editor** button.
{: .explainer}

![Editing item](/images/editing/collections/edit-item.png){: .screenshot srcset="/images/editing/collections/edit-item.png 800w, /images/editing/collections/edit-item@2x.png 1600w"}

[Front matter](/editing/editors/front-matter-editor/) (e.g. title, description and thumbnail) is updated in the *Settings Panel*, accessed by selecting the **Toggle Settings** button in the top right corner.

> Hide front matter by putting it in [Jekyll Defaults](https://jekyllrb.com/docs/configuration/#front-matter-defaults){: target="\_blank"} instead.
{: .explainer}

![Editing item with Settings Panel open](/images/editing/collections/edit-item-settings.png){: .screenshot srcset="/images/editing/collections/edit-item-settings.png 800w, /images/editing/collections/edit-item-settings@2x.png 1600w"}

---

To create a Jekyll collection to manage and display staff members, follow this example (assumes `/_layouts/default.html` exists):

1. Define the staff members collection and default layout in `_config.yml`:

   ```
   collections:
     staff_members:
       output: true

   defaults:
     - scope:
         path: ""
         type: "staff_members"
       values:
         layout: "staff-member"
   ```

   Jekyll generates a page for each staff member with `output: true`. The default **staff-member** layout avoids setting it in each file.

2. Create `/_staff_members/sam-doe.md` with the following content:

   ```
   ---
   name: Sam Doe
   image: /uploads/sam.png
   credentials:
   phone_extension:
   ---
   ```
3. Create `/staff.html` to display all staff members:

   ```
   {% raw %}---
   layout: default
   ---
   <ul class="staff-members">
     {% for member in site.staff_members %}
       <li class="staff-member">
         <img src="{{ member.image }}" alt="{{ member.name }}">
         <p>
           <a href="{{ member.url }}">
             {{ member.name }} - <strong>{{ member.credentials }}</strong>
           </a>
         </p>
       </li>
     {% endfor %}
   </ul>{% endraw %}
   ```

   Jekyll provides the `url` attribute to link to the generated page for each staff member.

4. Create the `staff-member` layout by creating `/_layouts/staff-member.html`. Generated staff member pages use this file:

   ```
   {% raw %}---
   layout: default
   ---
   <img src="{{ page.image }}" alt="{{ page.name }}">
   <h1>{{ page.name }} - {{ page.credentials }}</h1>
   <p>Phone extension: {{ page.phone_extension }}</p>
   {{ page.content }}{% endraw %}
   ```
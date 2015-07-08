---
title : CMS and Hosting
order: 8
duplicate_content: http://jekyll.tips/guide/cms-and-hosting/
---

Now it's time to use CloudCannon to host this site and add a CMS.

**Important**: CloudCannon detects that it's a Jekyll website by looking for a `/_config.yml` file. Create `_config.yml` in the website root (it can be empty for now) and push it to GitHub.

Head over to [CloudCannon](http://cloudcannon.com), sign up for a free account and create a website.

<img alt="Create Site" src="/img/guide/cms/create_site.png" class="screenshot">

This brings up the file browser for the site. There are no files at the moment so let's add some! Click the **connect storage provider** button.

<img alt="Dashboard" src="/img/guide/cms/dashboard.png" class="screenshot">

We want to sync files from our repository so click **Connect** next to GitHub and allow CloudCannon access to your account.

<img alt="Connect" src="/img/guide/cms/connect.png" class="screenshot">

Connect the repository for the website.

<img alt="Repo" src="/img/guide/cms/repo.png" class="screenshot">

CloudCannon will pull in your files and display them in the file browser. Any updates you make in CloudCannon sync back to GitHub and any changes you push to GitHub sync to CloudCannon.

<img alt="Files" src="/img/guide/cms/files.png" class="screenshot">

Now we have the files on CloudCannon, it's time to add updatable regions. Click on `index.html`, this brings up the site in preview. You can navigate around the website in this view. Click on the **Code Editor** view to bring up the source code of the site.

<img alt="Preview" src="/img/guide/cms/preview.png" class="screenshot">

We set the editable regions by adding a class of **editable** to elements in the HTML. Let's make the headings on the index page editable:

{% highlight html %}
<header>
  <div class="header-content">
    <div class="header-content-inner">
      <h1 class="editable">Your Favorite Source of Free Bootstrap Themes</h1>
      <hr>
      <p class="editable">Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!</p>
      <a href="#about" class="btn btn-primary btn-xl page-scroll">Find Out More</a>
    </div>
  </div>
</header>
{% endhighlight %}

The context you put the editable class is important. If you wanted to give more control to the client you could add the class to the `div`. Then they'd be able to add more headings, lists, images etc.

Go to the **Visual Editor** view. The elements with the editable class have a yellow box around them indicating they're editable. Try clicking on an editable region and making an update inline.

<img alt="Visual Editor" src="/img/guide/cms/visual.png" class="screenshot">

CloudCannon pushes your website live to a testing domain of `*.cloudvent.net`. On the free plan the website isn't public, we need to add a password before we can view it. Go to **Site Settings**, then **Site Password** and type in a password for your website.

<img alt="Password" src="/img/guide/cms/password.png" class="screenshot">

Click on the cloudvent domain at the top of the page, enter your password. Our site is now live on the internet!

<img alt="Cloudvent" src="/img/guide/cms/cloudvent.png" class="screenshot">

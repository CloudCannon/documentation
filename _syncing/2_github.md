---
title: GitHub
---
{% include cloud_storage.md %}

Go to Storage Providers in your website configuration and click "Connect" next to GitHub.

<img alt="Storage Providers" src="/img/cloud_storage/github/1.png" class="screenshot">

This will redirect you to GitHub. Login and authorize CloudCannon access to your GitHub Account.

<img alt="GitHub" src="/img/cloud_storage/github/2.png" class="screenshot">

You'll be redirected back to CloudCannon to pick a repository to connect. If you don't have one for this website, create a new one in GitHub and refresh this page.

A dialog box will appear asking for the master source for the initial synchronization. This only matters if you have existing files in CloudCannon or your repository. The arrow shows the direction of file transfer and points to the source that will be overwritten. Click "Connect GitHub".

<img alt="Inital Transfer" src="/img/cloud_storage/github/5.png" class="screenshot">

GitHub is now connected. Changes you push to the Git Repository are pulled in by CloudCannon. Any changes made on CloudCannon are automatically committed and pushed.

<img alt="Inital Transfer" src="/img/cloud_storage/github/6.png" class="screenshot">

### Adding a new GitHub Organization

If you add a GitHub Organization after you have granted access to CloudCannon you'll need to manually allow access.

To do this open the settings for the Organization on GitHub and go to the **Third-party access** tab. Click on **your own authorized applications** under the *No pending requests* header.

<img alt="Inital Transfer" src="/img/cloud_storage/github/7.png" class="screenshot">

Click on **CloudCannon**.

<img alt="Inital Transfer" src="/img/cloud_storage/github/8.png" class="screenshot">

Click **Grant Access** next to your new organization.
<img alt="Inital Transfer" src="/img/cloud_storage/github/9.png" class="screenshot">

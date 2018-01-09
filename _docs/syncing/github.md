---
title: GitHub
category: File Syncing
order: 1
requirements:
  build: Any
  plan: Free
  hosting: Any
---

Connecting GitHub allows you to work on your websites locally and have the changes sync to CloudCannon. File changes made on CloudCannon also get synced back to GitHub.

To connect a GitHub repository and start syncing files, follow these instructions:

Go to *Site Settings* / *File Syncing* and click **Connect** next to GitHub.

![Storage Providers interface](/images/syncing/storage-providers.png){: srcset="/images/syncing/storage-providers.png 800w, /images/syncing/storage-providers@2x.png 1600w"}
{: .has-screenshot}

This redirects you to GitHub. Enter your credentials to continue.

![GitHub authentication](/images/syncing/github/authentication.png){: srcset="/images/syncing/github/authentication.png 800w, /images/syncing/github/authentication@2x.png 1600w"}
{: .has-screenshot}

Give CloudCannon access to your GitHub Account by clicking **Authorize application**. You can also **Grant Access** to any GitHub Organisations you wish to use in CloudCannon.

![GitHub authorisation](/images/syncing/github/authorisation.png){: srcset="/images/syncing/github/authorisation.png 800w, /images/syncing/github/authorisation@2x.png 1600w"}
{: .has-screenshot}

You'll be redirected back to CloudCannon to pick a repository to connect. If you don't have one for this website, create a new one in GitHub and refresh this page.

> A dialog box warns you if there are existing files in your site. The files will be replaced with the contents of the repository. Click **Connect GitHub** to continue or close the dialog to cancel the process.
{: .warning}

GitHub is now connected. Changes you push to the Git repository are pulled in by CloudCannon. Any changes made on CloudCannon are automatically committed and pushed.

![Storage Providers interface with GitHub connected](/images/syncing/github/connected.png){: srcset="/images/syncing/github/connected.png 800w, /images/syncing/github/connected@2x.png 1600w"}
{: .has-screenshot}


### Adding a new GitHub Organisation

GitHub Organisations do not provide access to third parties applications. You'll need to manually allow access to sync GitHub Organisation repositories with CloudCannon.

To allow access, open the settings for the Organisation on GitHub and go to the *Third-party access* tab. Click on **your own authorised applications** under the *No pending requests* header.

![GitHub Organisation settings](/images/syncing/github/organisation-settings.png){: srcset="/images/syncing/github/organisation-settings.png 800w, /images/syncing/github/organisation-settings@2x.png 1600w"}
{: .has-screenshot}

Click the **Edit** button next to CloudCannon.

![GitHub Organisation settings for CloudCannon](/images/syncing/github/organisation-cloudcannon-settings.png){: srcset="/images/syncing/github/organisation-cloudcannon-settings.png 800w, /images/syncing/github/organisation-cloudcannon-settings@2x.png 1600w"}
{: .has-screenshot}

Click **Grant Access**. You should now be able to sync repositories owned by the GitHub Organisation in CloudCannon.

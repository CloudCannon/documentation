---
title: GitHub
order: 1
---

{% include cloud_storage.md %}

To connect a GitHub repository and start syncing files, follow these instructions:

Go to *Site Settings* / *Storage Providers* and click **Connect** next to GitHub.

![Storage Providers interface](/img/syncing/storage-providers.png){: srcset="/img/syncing/storage-providers.png 800w, /img/syncing/storage-providers@2x.png 1600w"}
{: .has-screenshot}

This redirects you to GitHub. Enter your credentials to continue.

![GitHub authentication](/img/syncing/github/authentication.png){: srcset="/img/syncing/github/authentication.png 800w, /img/syncing/github/authentication@2x.png 1600w"}
{: .has-screenshot}

Give CloudCannon access to your GitHub Account by clicking **Authorize application**. You can also **Grant Access** to any GitHub Organisations you wish to use in CloudCannon.

![GitHub authorisation](/img/syncing/github/authorisation.png){: srcset="/img/syncing/github/authorisation.png 800w, /img/syncing/github/authorisation@2x.png 1600w"}
{: .has-screenshot}

You'll be redirected back to CloudCannon to pick a repository to connect. If you don't have one for this website, create a new one in GitHub and refresh this page.

A dialog box warns you if there are existing files in your site. The files will be replaced with the contents of the repository. Click **Connect GitHub** to continue or close the dialog to cancel the process.
{: .warning}

GitHub is now connected. Changes you push to the Git repository are pulled in by CloudCannon. Any changes made on CloudCannon are automatically committed and pushed.

![Storage Providers interface with GitHub connected](/img/syncing/github/connected.png){: srcset="/img/syncing/github/connected.png 800w, /img/syncing/github/connected@2x.png 1600w"}
{: .has-screenshot}

---

### Adding a new GitHub Organisation

GitHub Organisations do not provide access to third parties applications. You'll need to manually allow access to sync GitHub Organisation repositories with CloudCannon.

To allow access, open the settings for the Organisation on GitHub and go to the *Third-party access* tab. Click on **your own authorised applications** under the *No pending requests* header.

![GitHub Organisation settings](/img/syncing/github/organisation-settings.png){: srcset="/img/syncing/github/organisation-settings.png 800w, /img/syncing/github/organisation-settings@2x.png 1600w"}
{: .has-screenshot}

Click the **Edit** button next to CloudCannon.

![GitHub Organisation settings for CloudCannon](/img/syncing/github/organisation-cloudcannon-settings.png){: srcset="/img/syncing/github/organisation-cloudcannon-settings.png 800w, /img/syncing/github/organisation-cloudcannon-settings@2x.png 1600w"}
{: .has-screenshot}

Click **Grant Access**. You should now be able to sync repositories owned by the GitHub Organisation in CloudCannon.

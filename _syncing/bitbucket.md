---
title: Bitbucket
order: 2
---
Mercurial repositories are not supported at this stage.
{: .warning}

{% include cloud_storage.md %}

To connect a Bitbucket repository and start syncing files, follow these instructions:

Go to *Site Settings* / *Storage Providers* and click **Connect** next to Bitbucket.

![Storage Providers interface](/img/syncing/storage-providers.png){: srcset="/img/syncing/storage-providers.png 800w, /img/syncing/storage-providers@2x.png 1600w"}
{: .has-screenshot}

This redirects you to Bitbucket. Log in and authorise CloudCannon access to your Bitbucket account.

You'll be redirected back to CloudCannon to pick a repository to connect. If you don't have one for this website, create a new one in Bitbucket and refresh this page.

A dialog box warns you if there are existing files in your site. The files will be replaced with the contents of the repository. Click **Connect Bitbucket** to continue or close the dialog to cancel the process.
{: .warning}

Bitbucket is now connected. Changes you push to the Git repository are pulled in by CloudCannon. Any changes made on CloudCannon are automatically committed and pushed.

![Storage Providers interface with Bitbucket connected](/img/syncing/bitbucket/connected.png){: srcset="/img/syncing/bitbucket/connected.png 800w, /img/syncing/bitbucket/connected@2x.png 1600w"}
{: .has-screenshot}

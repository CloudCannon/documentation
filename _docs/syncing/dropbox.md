---
title: Dropbox
category: File Syncing
order: 3
requirements:
  build: Any
  plan: Free
  hosting: Any
---

Connecting Dropbox allows you to work on your websites locally and have the changes sync to CloudCannon. File changes made on CloudCannon also get synced back to Dropbox.

To connect a Dropbox account and start syncing files, follow these instructions:

Go to *Site Settings* / *File Syncing* and click **Connect** next to Dropbox.

![Storage Providers interface](/images/syncing/storage-providers.png){: srcset="/images/syncing/storage-providers.png 800w, /images/syncing/storage-providers@2x.png 1600w"}
{: .has-screenshot}

> A dialog box warns you if there are existing files in your site. The files will be replaced with the contents of the Dropbox folder. Click **Connect Dropbox** to continue or close the dialog to cancel the process.
{: .warning}

This takes you to Dropbox, enter your credentials to continue.

![Dropbox authentication](/images/syncing/dropbox/authentication.png){: srcset="/images/syncing/dropbox/authentication.png 800w, /images/syncing/dropbox/authentication@2x.png 1600w"}
{: .has-screenshot}

Click **Allow** to give CloudCannon access to a folder in your Dropbox. CloudCannon only has access to this folder, not any of your other files or folders.

![Dropbox authorisation](/images/syncing/dropbox/authorisation.png){: srcset="/images/syncing/dropbox/authorisation.png 800w, /images/syncing/dropbox/authorisation@2x.png 1600w"}
{: .has-screenshot}

Dropbox is now connected to CloudCannon.

![Storage Providers interface with Dropbox connected](/images/syncing/dropbox/connected.png){: srcset="/images/syncing/dropbox/connected.png 800w, /images/syncing/dropbox/connected@2x.png 1600w"}
{: .has-screenshot}

Adding files to your local folder **Dropbox/Apps/Cloud Cannon/[Site Name]** syncs them with CloudCannon. Any changes made on CloudCannon sync back to this Dropbox folder.

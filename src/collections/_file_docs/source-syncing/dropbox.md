---
title: Dropbox
category: Source Syncing
order: 5
---

Connecting Dropbox allows you to work on your websites locally and have the changes sync to CloudCannon. File changes made on CloudCannon also get synced back to Dropbox.

To connect a Dropbox account and start syncing files, follow these instructions:

Go to *Site Settings* / *Source Syncing* and click **Connect** next to Dropbox.

![Storage Providers interface](/images/files/source-syncing/storage-providers.png){: srcset="/images/files/source-syncing/storage-providers.png 800w, /images/files/source-syncing/storage-providers@2x.png 1600w"}{: .screenshot}

> A dialog box warns you if there are existing files in your site. The files will be replaced with the contents of the Dropbox folder. Click **Connect Dropbox** to continue or close the dialog to cancel the process.
{: .explainer}
{: .warning}

This takes you to Dropbox, enter your credentials to continue.

![Dropbox authentication](/images/files/source-syncing/dropbox/authentication.png){: srcset="/images/files/source-syncing/dropbox/authentication.png 800w, /images/files/source-syncing/dropbox/authentication@2x.png 1600w"}{: .screenshot}

Click **Allow** to give CloudCannon access to a folder in your Dropbox. CloudCannon only has access to this folder, not any of your other files or folders.

![Dropbox authorisation](/images/files/source-syncing/dropbox/authorisation.png){: srcset="/images/files/source-syncing/dropbox/authorisation.png 800w, /images/files/source-syncing/dropbox/authorisation@2x.png 1600w"}{: .screenshot}

Dropbox is now connected to CloudCannon.

![Storage Providers interface with Dropbox connected](/images/files/source-syncing/dropbox/connected.png){: srcset="/images/files/source-syncing/dropbox/connected.png 800w, /images/files/source-syncing/dropbox/connected@2x.png 1600w"}{: .screenshot}

Adding files to your local folder **Dropbox/Apps/Cloud Cannon/[Site Name]** syncs them with CloudCannon. Any changes made on CloudCannon sync back to this Dropbox folder.

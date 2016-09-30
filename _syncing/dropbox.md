---
title: Dropbox
order: 3
---
{% include cloud_storage.md %}

To connect a Dropbox account and start syncing files, follow these instructions:

Go to *Site Settings* / *Storage Providers* and click **Connect** next to Dropbox.

![Storage Providers interface](/img/syncing/storage-providers.png){: srcset="/img/syncing/storage-providers.png 800w, /img/syncing/storage-providers@2x.png 1600w"}
{: .has-screenshot}

A dialog box appears asking for the source for the initial synchronization. This only matters if you have existing files in CloudCannon or Dropbox. The arrow shows indicates the destination where files are overwritten.

Choose a direction and click **Connect Dropbox**.

![Dropbox Initial transfer selection](/img/syncing/dropbox/initial-transfer.png){: srcset="/img/syncing/dropbox/initial-transfer.png 800w, /img/syncing/dropbox/initial-transfer@2x.png 1600w"}
{: .has-screenshot}

This takes you to Dropbox, enter your credentials to continue.

![Dropbox authentication](/img/syncing/dropbox/authentication.png){: srcset="/img/syncing/dropbox/authentication.png 800w, /img/syncing/dropbox/authentication@2x.png 1600w"}
{: .has-screenshot}

Click **Allow** to give CloudCannon access to a folder in your Dropbox. CloudCannon only has access to this folder, not any of your other files or folders.

![Dropbox authorisation](/img/syncing/dropbox/authorisation.png){: srcset="/img/syncing/dropbox/authorisation.png 800w, /img/syncing/dropbox/authorisation@2x.png 1600w"}
{: .has-screenshot}

Dropbox is now connected to CloudCannon.

![Storage Providers interface with Dropbox connected](/img/syncing/dropbox/connected.png){: srcset="/img/syncing/dropbox/connected.png 800w, /img/syncing/dropbox/connected@2x.png 1600w"}
{: .has-screenshot}

Adding files to your local folder **Dropbox/Apps/Cloud Cannon/[Site Name]** syncs them with CloudCannon. Any changes made on CloudCannon sync back to this Dropbox folder.

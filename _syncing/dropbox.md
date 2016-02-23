---
title: Dropbox
order: 3
---
{% include cloud_storage.md %}

Go to Storage Providers in your website configuration and click "Connect" next to Dropbox.

![Storage Providers](/img/cloud_storage/github/1.png){: .screenshot}

A dialog box will appear asking for the master source for the initial synchronization. This only matters if you have existing files in CloudCannon or Dropbox. The arrow shows the direction of file transfer and points to the source that will be overwritten. Click *Connect Dropbox*.

![Inital Transfer](/img/cloud_storage/dropbox/2.png){: .screenshot}

This will take you to Dropbox. Type in your credentials to continue.

![Dropbox credentials](/img/cloud_storage/dropbox/3.png){: .screenshot}

Next you need to click "Allow" to give CloudCannon access to a folder in your Dropbox. (CloudCannon only has access to this folder, not any of your other files or folders).

![Allow](/img/cloud_storage/dropbox/4.png){: .screenshot}

Your Dropbox is now connected to CloudCannon.

![Connected](/img/cloud_storage/dropbox/5.png){: .screenshot}

Put files in the folder Dropbox->Apps->Cloud Cannon->[Your Site Name] and they will be synced to CloudCannon. Any changes made on CloudCannon will sync back to your Dropbox.

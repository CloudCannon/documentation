---
title: BitBucket
---

Go to Storage Providers in your website configuration and click "Connect" next to BitBucket.

![Storage Providers](/img/cloud_storage/bitbucket/1.png)

This will redirect you to BitBucket. Login and authorize CloudCannon access to your BitBucket Account.

You'll be redirected back to CloudCannon to pick a repository to connect. If you don't have one for this website, create a new one in BitBucket and refresh this page.

A dialog box will appear asking for the master source for the initial synchronization. This only matters if you have existing files in CloudCannon or your repository. The arrow shows the direction of file transfer and points to the source that will be overwritten. Click "Connect BitBucket".

![Inital Transfer](/img/cloud_storage/bitbucket/5.png)

BitBucket is now connected. Changes you push to the Git Repository are pulled in by CloudCannon. Any changes made on CloudCannon are automatically committed and pushed.

![Inital Transfer](/img/cloud_storage/bitbucket/6.png)

---
title: Bitbucket
order: 2
---
Mercurial repositories are not supported at this stage.
{: .warning}

{% include cloud_storage.md %}

Go to Storage Providers in your website configuration and click *Connect* next to Bitbucket.

![Storage Providers](/img/cloud_storage/github/1.png){: .screenshot}

This will redirect you to Bitbucket. Log in and authorise CloudCannon access to your Bitbucket account.

You'll be redirected back to CloudCannon to pick a repository to connect. If you don't have one for this website, create a new one in Bitbucket and refresh this page.

A dialog box will appear asking for the master source for the initial synchronisation. This only matters if you have existing files in CloudCannon or your repository. The arrow shows the direction of file transfer and points to the source that will be overwritten. Click *Connect Bitbucket*.

![Initial Transfer](/img/cloud_storage/bitbucket/5.png){: .screenshot}

Bitbucket is now connected. Changes you push to the Git repository are pulled in by CloudCannon. Any changes made on CloudCannon are automatically committed and pushed.

![Initial Transfer](/img/cloud_storage/bitbucket/6.png){: .screenshot}

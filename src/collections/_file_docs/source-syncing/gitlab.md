---
title: GitLab
category: Source Syncing
order: 4
---

Connecting GitLab allows you to work on your websites locally and have the changes sync to CloudCannon. File changes made on CloudCannon also get synced back to GitLab.

To connect a GitLab repository and start syncing files, follow these instructions:

Go to *Site Settings* / *Source Syncing* and click **Connect** next to GitLab.

![Storage Providers interface](/images/files/source-syncing/storage-providers.png){: srcset="/images/files/source-syncing/storage-providers.png 800w, /images/files/source-syncing/storage-providers@2x.png 1600w"}{: .screenshot}

This redirects you to GitLab. Log in and authorise CloudCannon access to your GitLab account.

You'll be redirected back to CloudCannon to pick a repository to connect. If you don't have one for this website, create a new one in GitLab and refresh this page.

> A dialog box warns you if there are existing files in your site. The files will be replaced with the contents of the repository. Click **Connect GitLab** to continue or close the dialog to cancel the process.
{: .explainer .warning}

GitLab is now connected. Changes you push to the Git repository are pulled in by CloudCannon. Any changes made on CloudCannon are automatically committed and pushed.

![Storage Providers interface with GitLab connected](/images/files/source-syncing/gitlab/connected.png){: srcset="/images/files/source-syncing/gitlab/connected.png 800w, /images/files/source-syncing/gitlab/connected@2x.png 1600w"}{: .screenshot}

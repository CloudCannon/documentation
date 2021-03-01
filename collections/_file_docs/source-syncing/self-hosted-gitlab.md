---
title: Self Hosted GitLab
category: Source Syncing
new_docs_link: https://cloudcannon.com/documentation/sync/source-syncing/self-hosted-gitlab/
canonical_url: https://cloudcannon.com/documentation/sync/source-syncing/self-hosted-gitlab/
order: 5
---

Connecting to your self hosted GitLab allows you to work on your websites locally and have the changes sync to CloudCannon. File changes made on CloudCannon also get synced back to your self hosted GitLab.

> To connect to a *GitLab.com* repository instead, follow the instructions listed for [GitLab](/files/source-syncing/gitlab/).
{: .explainer}

### Connecting to an Instance

Before syncing with a repository in your self hosted GitLab, you need to connect CloudCannon to your self hosted instance. You only need to do this once per account.

To connect to your self hosted GitLab instance:

1. Go to *Account Settings* / *Self Hosted GitLab*
2. Enter the details for your self hosted instance of GitLab
3. Click **Configure Self Hosted GitLab**

![Self hosted GitLab entry interface](/images/files/source-syncing/self-hosted-gitlab.png){: .screenshot srcset="/images/files/source-syncing/self-hosted-gitlab.png 800w, /images/files/source-syncing/self-hosted-gitlab@2x.png 1600w"}

The details for this page comes from the GitLab server under User Settings / Applications.

![Settings page from GitLab](/images/files/source-syncing/gitlab/settings.png){: .screenshot srcset="/images/files/source-syncing/gitlab/settings.png 800w, /images/files/source-syncing/gitlab/settings@2x.png 1600w"}

The Redirect URI is [https://app.cloudcannon.com/self\_hosted\_gitlab/authorize/](https://app.cloudcannon.com/self_hosted_gitlab/authorize/)

The minimal scopes required are:

1. api
2. read\_user
3. read\_repository
4. write\_repository
5. openid

Once completed the key and secret will be available for use in CloudCannon. The&nbsp; URLs should match the form placeholders.

### Syncing with a Repository

To connect a self hosted GitLab repository and start syncing files, follow these instructions:

Go to *Site Settings* / *Source Syncing* and click **Connect** next to Self Hosted GitLab.

![Storage Providers interface](/images/files/source-syncing/storage-providers.png){: .screenshot srcset="/images/files/source-syncing/storage-providers.png 800w, /images/files/source-syncing/storage-providers@2x.png 1600w"}

This redirects you to your self hosted GitLab. Log in and authorise CloudCannon access to your self hosted GitLab account.

You'll be redirected back to CloudCannon to pick a repository to connect. If you don't have one for this website, create a new one in your self hosted GitLab and refresh this page.

> A dialog box warns you if there are existing files in your site. The files will be replaced with the contents of the repository. Click **Connect Self Hosted GitLab** to continue or close the dialog to cancel the process.
{: .explainer.warning}

Self Hosted GitLab is now connected. Changes you push to the Git repository are pulled in by CloudCannon. Any changes made on CloudCannon are automatically committed and pushed.

![Storage Providers interface with GitLab connected](/images/files/source-syncing/gitlab/connected.png){: .screenshot srcset="/images/files/source-syncing/gitlab/connected.png 800w, /images/files/source-syncing/gitlab/connected@2x.png 1600w"}
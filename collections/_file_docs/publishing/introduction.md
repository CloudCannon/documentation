---
title: Introduction
category: Publishing
new_docs_link: https://cloudcannon.com/documentation/sync/publishing/
canonical_url: https://cloudcannon.com/documentation/sync/publishing/
order: 1
requirements:
  build: Any
  plan: Free
  hosting: Any
  syncing: Git
---

Publishing allows editors to merge changes from one branch to another. You can choose to merge directly or with a pull request. Selecting a publish branch enables the publish interface for your site. This is useful for staging sites.

To connect a publish branch and enable publishing, follow these instructions:

Go to *Site Settings* / *Files* / *Publishing* and click **Add Publish Branch**.

![Storage Providers interface](/images/files/publish/no-publish-branch.png){: srcset="/images/files/publish/no-publish-branch.png 800w, /images/files/publish/no-publish-branch@2x.png 1600w"}{: .screenshot}

Select the branch you want to merge into and click **Use Branch**. This will fail if there is no additional branch in the repository.

![Publish branch authentication](/images/files/publish/branch-list.png){: srcset="/images/files/publish/branch-list.png 800w, /images/files/publish/branch-list@2x.png 1600w"}{: .screenshot}

All editors will have access to the *Publish* option in the sidebar. Clicking **Publish Latest Changes** will attempt a merge from the syncing branch to the publish branch. If there are any changes pending these will be displayed below the publish button.

![Publish branch authorisation](/images/files/publish/publish-latest-changes.png){: srcset="/images/files/publish/publish-latest-changes.png 800w, /images/files/publish/publish-latest-changes@2x.png 1600w"}{: .screenshot}

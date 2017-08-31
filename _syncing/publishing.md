---
title: GitHub Publishing
order: 3
requirements:
  build:
  plan: Free
  hosting: Any
  syncing: GitHub
---

Publishing allows editors to merge changes from one branch to another. Selecting a publish branch enables the publish interface for your site. This is useful for staging sites.

To connect a publish branch and enable publishing, follow these instructions:

Go to *Site Settings* / *Storage Providers* and click **Add Publish Branch** next to GitHub.

![Storage Providers interface](/img/syncing/publish/no-publish-branch.png){: srcset="/img/syncing/publish/no-publish-branch.png 800w, /img/syncing/publish/no-publish-branch@2x.png 1600w"}
{: .has-screenshot}

Select the branch you want to merge into and click **Use Branch**. This will fail if there is no additional branch in the repository.

![GitHub authentication](/img/syncing/publish/branch-list.png){: srcset="/img/syncing/publish/branch-list.png 800w, /img/syncing/publish/branch-list@2x.png 1600w"}
{: .has-screenshot}

All editors will have access to the *Publish* option in the sidebar. Clicking **Publish Latest Changes** will attempt a merge from the syncing branch to the publish branch. If there are any changes pending these will be displayed below the publish button.

![GitHub authorisation](/img/syncing/publish/one-pending-change.png){: srcset="/img/syncing/publish/one-pending-change.png 800w, /img/syncing/publish/one-pending-change@2x.png 1600w"}
{: .has-screenshot}

---

### Removing a publish branch

Go to *Site Settings* / *Storage Providers* and click **Remove Publish Branch** next to GitHub.

![Storage Providers interface](/img/syncing/publish/publish-to-master.png){: srcset="/img/syncing/publish/publish-to-master.png 800w, /img/syncing/publish/publish-to-master@2x.png 1600w"}
{: .has-screenshot}

The publish interface will become unavailable to all editors.
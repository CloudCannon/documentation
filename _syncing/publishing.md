---
title: Publishing
order: 3
requirements:
  build: Any
  plan: Free
  hosting: Any
  syncing: GitHub
---

Publishing allows editors to merge changes from one branch to another. You can choose to merge directly or with a pull request. Selecting a publish branch enables the publish interface for your site. This is useful for staging sites.

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

The publish interface becomes unavailable to all editors without a publish branch set.

---

### Publish mode

The publish mode determines if publish is a direct merge or a pull request. Merges have less overhead, while pull requests can link to external builds, checks and workflows.

To change the publish mode for a GitHub-connected site:

1. Go to *Site Settings* / *Storage Providers*
2. Select *Merge* or *Pull Request*
3. Click **Change Publish Mode**

![Publish mode interface](/img/syncing/publish/publish-mode.png){: srcset="/img/syncing/publish/publish-mode.png 800w, /img/syncing/publish/publish-mode@2x.png 1600w"}
{: .has-screenshot}

---

### Publish requests

Pull requests are called *Publish Requests* in CloudCannon to better fit the publish workflow for editors. *Publish Requests* provide an intermediate step for publishing, where external services connected to the GitHub Status API check the changes pass your requirements.

Any pull requests that are not from the connected branch to publish branch are hidden in CloudCannon.
{: .info}

The workflow with this publish mode is:

1. Make changes to site
2. Create a *Publish Request*
3. Review the request, along with any checks from the GitHub Status API
3. **Publish** or **Close** the request

**Publish** merges the changes into the publish branch, while **Close** cancels the *Publish Request*. Changes made are not reversed after closing a *Publish Request*.
{: .info}

![Publish Request interface](/img/syncing/publish/publish-requests.png){: srcset="/img/syncing/publish/publish-requests.png 800w, /img/syncing/publish/publish-requests@2x.png 1600w"}
{: .has-screenshot}

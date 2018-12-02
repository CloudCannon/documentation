---
title: Publish Modes
category: Publishing
order: 3
requirements:
  build: Any
  plan: Free
  hosting: Any
  syncing: Git
---

The publish mode determines if publish is a direct merge or a pull request. Merges have less overhead, while pull requests can link to external builds, checks and workflows.

To change the publish mode for a GitHub or Bitbucket connected site:

1. Go to *Site Settings* / *File Syncing* / *Publish*
2. Select *Merge* or *Pull Request*
3. Click **Change Publish Mode**

![Storage Providers interface](/images/syncing/publish/with-publish-branch.png){: srcset="/images/syncing/publish/with-publish-branch.png 800w, /images/syncing/publish/with-publish-branch@2x.png 1600w"}{: .screenshot}


### Publish requests

Pull requests are called *Publish Requests* in CloudCannon to better fit the publish workflow for editors. *Publish Requests* provide an intermediate step for publishing, where external services connected to the GitHub Status API (if using GitHub) check the changes pass your requirements.

> Any pull requests that are not from the connected branch to publish branch are hidden in CloudCannon.
{: .explainer}

The workflow with this publish mode is:

1. Make changes to site
2. Create a *Publish Request*
3. Review the request, along with any checks from the GitHub Status API (if using GitHub)
3. **Publish** or **Close** the request

> **Publish** merges the changes into the publish branch, while **Close** cancels the *Publish Request*. Changes made are not reversed after closing a *Publish Request*.
{: .explainer}

![Publish Request interface](/images/syncing/publish/publish-requests.png){: srcset="/images/syncing/publish/publish-requests.png 800w, /images/syncing/publish/publish-requests@2x.png 1600w"}{: .screenshot}

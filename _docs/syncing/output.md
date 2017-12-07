---
title: Output
category: File Syncing
order: 4
requirements:
  build: Any
  plan: Basic
  hosting: Any
---

Connecting a storage provider to output allows you to access the compiled output of a site. To connect an output branch, follow these instructions:

Go to *Site Settings* / *File Syncing* / *Output* and click **Connect** next to your chosen provider. Providers will be configured once selected.

![Storage Providers interface](/images/syncing/output/storage-providers.png){: srcset="/images/syncing/output/storage-providers.png 800w, /images/syncing/output/storage-providers@2x.png 1600w"}
{: .has-screenshot}

Once connected the compiled site will replace the contents of your provider. This process will repeat after every build.

### Removing an output

Go to *Site Settings* / *File Syncing* / *Output* and click **Remove**.

![Output interface](/images/syncing/output/github.png){: srcset="/images/syncing/output/github.png 800w, /images/syncing/output/github@2x.png 1600w"}
{: .has-screenshot}
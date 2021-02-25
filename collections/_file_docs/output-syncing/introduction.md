---
title: Introduction
category: Output
new_docs_link: https://cloudcannon.com/documentation/sync/output-syncing/
canonical_url: https://cloudcannon.com/documentation/sync/output-syncing/
order: 1
requirements:
  build: Any
  plan: Basic
  hosting: Any
---

Connecting a storage provider to output allows you to access the compiled output of a site. To connect an output branch, follow these instructions:

Go to *Site Settings* / *Files* / *Output Syncing* and click **Connect** next to your chosen provider. Providers will be configured once selected.

![Storage Providers interface](/images/files/output/storage-providers.png){: .screenshot srcset="/images/files/output/storage-providers.png 800w, /images/files/output/storage-providers@2x.png 1600w"}

Once connected the compiled site will replace the contents of your provider. This process will repeat after every build.

By default, the compiled output of the build step is synced. You can change the step being synced after selecting the provider.
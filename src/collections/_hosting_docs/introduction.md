---
title: Introduction
category: General
order: 1
requirements:
  build: Any
  plan: Any
  hosting: CloudCannon
---

CloudCannon provides preconfigured, fast and reliable hosting. CloudCannon builds, optimises and deploys your sites to [Testing](/hosting/domains/testing-domains/) and [Custom Domains](/hosting/domains/custom-domains/). This includes advanced configuration e.g. [Custom 404 Pages](/hosting/general/404-page/) and [Authentication](/hosting/authentication/none/)

### Hosting Externally

There are also a number of options to externally host your site while keeping the editing experience of CloudCannon.

#### GitHub Pages

If your site is already on GitHub Pages, you just need to [connect the repository](/syncing/github/) to CloudCannon. All updates made on CloudCannon are synced to GitHub, which then updates the GitHub Pages website.

#### Webhooks

[GitHub](https://developer.github.com/webhooks/) and [Bitbucket](https://confluence.atlassian.com/display/BITBUCKET/Manage+Webhooks) support webhooks, requesting a URL you've configured every time there's a commit. Use this to run a script which builds your site and deploys it anywhere you want.

[Travis CI](https://travis-ci.org/) is a popular (and free) option for doing this. Jekyll has [a guide for building sites with Travis CI](https://jekyllrb.com/docs/deployment/automated/#continuous-integration-service){: target="_blank"}.

#### FTP

CloudCannon FTP sends updated files to your configured FTP provider. Another option is [ftploy](https://ftploy.com/) in combination with Git to get all the benefits of source control.
---
title: Options
category: Hosting
order: 1
requirements:
  build: Any
  plan: Free
  hosting: Any
---

CloudCannon provides preconfigured, fast and reliable hosting. CloudCannon builds, optimises and deploys your sites to [Testing](/domains/testing-domains/) and [Custom Domains](/domains/custom-domains/).

Some hosting-specific features such as [Internationalisation](/i18n/internationalisation/), [Custom 404 Pages](/hosting/custom-404-page/) and [Authentication](/authentication/none/) require CloudCannon as your hosting provider.

There are also a number of options to externally host your site while keeping the editing experience of CloudCannon.


### GitHub Pages

If your site is already on GitHub Pages, you just need to [connect the repository](/syncing/github/) to CloudCannon. All updates made on CloudCannon are synced to GitHub, which then updates the GitHub Pages website.


### Webhooks

[GitHub](https://developer.github.com/webhooks/) and [Bitbucket](https://confluence.atlassian.com/display/BITBUCKET/Manage+Webhooks) support webhooks, requesting a URL you've configured every time there's a commit. Use this to run a script which builds your site and deploys it anywhere you want.

[Travis CI](https://travis-ci.org/) is a popular (and free) option for doing this. Jekyll has [a guide for building sites with Travis CI](http://jekyllrb.com/docs/continuous-integration/).


### FTP

CloudCannon FTP sends updated files to your configured FTP provider. Another option is [ftploy](https://ftploy.com/) in combination with Git to get all the benefits of source control.

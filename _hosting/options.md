---
title: Options
order: 1
---

You have complete flexibility on how you host your site with CloudCannon.

---

### CloudCannon Hosting

CloudCannon provides reliable, easy-to-set-up hosting. CloudCannon automatically builds your site, all you need to do is [point your domain at CloudCannon servers](/domains/custom-domains/). CloudCannon also provides [Testing Domains](/domains/testing-domains/) for all sites.

Some features such as [Internationalisation](/i18n/internationalisation/), [Custom 404 Pages](/hosting/custom-404-page/) and [Authentication](/authentication/none/) require CloudCannon as your hosting provider.

---

### GitHub Pages

If your site is already on GitHub Pages, you just need to [connect the repository](/syncing/github/) to CloudCannon. All updates made on CloudCannon get pushed back to GitHub which will update the GitHub Pages website.

---

### Webhooks

[GitHub](https://developer.github.com/webhooks/) and [Bitbucket](https://confluence.atlassian.com/display/BITBUCKET/Manage+Webhooks) support webhooks which request a URL you've configured every time there's a commit. You can use this to run a script which builds your site and deploys it anywhere you want.

[Travis CI](https://travis-ci.org/) is a popular (and free) option for doing this. Jekyll has [a guide for building sites with Travis CI](http://jekyllrb.com/docs/continuous-integration/).

---

### FTP

CloudCannon FTP syncs updates to your files with your existing hosting provider. Another option is [ftploy](https://ftploy.com/) in combination with Git to get all the benefits of source control.

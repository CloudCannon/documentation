---
title: Overview
---

You have complete flexibility on how you host your site with CloudCannon.

## CloudCannon Hosting

The easiest way is to host on CloudCannon. CloudCannon automatically builds your site, all you need to do is [point your domain at CloudCannon's servers](http://localhost:4000/hosting/custom-domains/).

Some CloudCannon features such as internationalisation, custom 404 pages and authentication require using CloudCannon as your hosting provider.


## GitHub Pages

If your site is already on GitHub Pages you just need to [connect the repository](/syncing/github/) to CloudCannon. All updates made on CloudCannon get pushed back to GitHub which will update the GitHub Pages website.


## Webhooks

[GitHub](https://developer.github.com/webhooks/) and [Bitbucket](https://confluence.atlassian.com/display/BITBUCKET/Manage+Webhooks) support webhooks which make a call to a URL you've configured everytime there's a commit. You can use this to run a script which builds your site and deploys it anywhere you want.

[Travis CI](http://jekyllrb.com/docs/continuous-integration/) is a popular (and free) option for doing this. Jekyllrb has [a guide for building sites with Travis CI](http://jekyllrb.com/docs/continuous-integration/).


## FTP

Using CloudCannon's FTP support you can sync and edit files on your existing hosting provider. 

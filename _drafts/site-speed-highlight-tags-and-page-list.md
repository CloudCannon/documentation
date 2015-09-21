---
title: "Site Speed, Highlight tags in markdown editor and pages list"
type: major
---

Due to a DOS attack early last week we were forced to review page performance. We have improved caching of the sites to get a ~5 times improvement in load speeds. Rate limiting is applied to viewing a site to prevent malicious attacks on all sites. After doing this we noticed bots trying to attack php scripts; since we are not a wordpress platform these have been blocked. Certain systems were pinging to add false records to google analytics users, these referrers have been blocked. Compression on sites are now performed immediately after a jekyll compile.

Additionally we added new features:

* The highlight tag now works in the markdown editor and will be displayed as a `pre`
* Users will need to downgrade before deleting their account to stop accidental deletions
* New pages list in the collections tab. This allows clients to navigate and clone pages
* Added support for category posts folders and will get their own section in the collections tab. For example if a blog has cat posts in `/cats/_posts` the posts will be separated from those inside `/_posts`. All drafts remain in `/_drafts/` but when published CloudCannon uses the categories to decide where they should go.


As always, bug fixes include:

* Safari client editor failed to login on first use
* Client editor move/delete files were not working for some users
* Websocket connection fixed for firefox windows
* Auth routes were broken in some cases
* General bug fixes and tweeks
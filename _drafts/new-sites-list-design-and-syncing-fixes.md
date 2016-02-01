---
title: New sites list and syncing fixes
type: minor
---

This week deployment focuses on usability changes to the sites list. Site names are no longer required to be unique with the exception of Dropbox connected sites. Storage provider details are displayed on the sites list to help distinguish between environments. If a site icon contains transparency it will be displayed with a padding around it. Alternatively if the site icon has no transparency the image will be shown right to the edge its wrapper.

IMAGE OF SITES LIST

Syncing improvements ensure that sites stay synchronised when reconnected. When connecting a git repo, all files on CloudCannon will be reset to the state on the selected branch.

Features:

* New sites list design.
* Site icon pixel reading to optimise viewing.
* Videos and audio files are served from a CDN.


Fixes:

* Resetting a connection will delete files in CloudCannon. This often left sites in an intermediate state.
* Syncing with GitHub or Bitbucket can no longer sync the `_site` directory.
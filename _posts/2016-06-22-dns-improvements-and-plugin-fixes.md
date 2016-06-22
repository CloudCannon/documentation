---
title: DNS Improvements and Plugin Fixes
type: minor
---


This release further streamlines our domain and DNS workflow, particularly with apex domains and *External DNS*. Issues with Jekyll Plugins have been fixed from feedback from users in the private beta - [contact support](javascript:void(location.href='mailto:'+String.fromCharCode(115,117,112,112,111,114,116,64,99,108,111,117,100,99,97,110,110,111,110,46,99,111,109)+'?subject=Jekyll%20Plugins%20private%20beta%20request&amp;body=Please%20add%20me%20to%20the%20CloudCannon%20Jekyll%20Plugins%20private%20beta!%0A%0AThanks%2C')) to join if you haven't already.

**Features:**

* Clearer workflow for DNS and configuring domains
* Support for multiple TXT records with *CloudCannon DNS*
* Instructions and interface for configuring an apex domain on *External DNS*
* CloudCannon interface support for Jekyll versions &gt;= 3.1.4


**Fixes:**

* FTP syncing issue
* Dropbox to CloudCannon syncing issues
* Solved plugin issues related to latest nokogiri version
* Files and folders starting with an underscore are now hidden when browsing files in front matter _path selector
* Improved error handling for creating a new files from *Collection Defaults* with invalid front matter
* Improved error handling for SSL
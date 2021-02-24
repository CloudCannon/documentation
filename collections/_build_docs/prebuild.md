---
title: Prebuild
category: Scripting
order: 1
new_docs_link: https://cloudcannon.com/documentation/build/prebuild/
requirements:
  build: Any
  plan: Free
  hosting: Any
---

Use a shell script that runs before your build to extend the functionality of your sites. Use this to use tools like Gulp and webpack easily.

To run a prebuild script:

1. Create a `_cloudcannon-prebuild.sh` file at the root of your file structure
2. Enter the commands you want to run before each site build.

> The prebuild script runs in a Node.js environment, if you need to install any npm packages.
{: .explainer}

Here's an example file that bundles JavaScript files using webpack:

```sh
#!/bin/sh

npm install webpack
npm install webpack-cli

./node_modules/.bin/webpack path/to/entry.js -o js/output.js
```

Prebuild commands allow you to incorporate your favourite tools for building and pre-processing into CloudCannon. Some ideas for using this feature include:

* Bundling JavaScript
* Fetching API data
* Running build commands other than Jekyll
* Sending messages to your Slack channel

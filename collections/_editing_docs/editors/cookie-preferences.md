---
title: Cookie Preferences
category: Editors
order: 9999
new_docs_link: https://cloudcannon.com/documentation/
canonical_url: https://cloudcannon.com/documentation/
requirements:
  build: Any
  plan: Free
  hosting: Any
---

When the [Visual Editor](/editing/editors/visual-editor/) is loaded, CloudCannon creates an authenticated connection to the **proxy.cloudcannon.com** domain. This is a copy of your site, only accessible to editors of your site.

CloudCannon attempts to resolve cookie issues so this works automatically. However, some browsers or configurations are stricter than others about how these two domains interact. This means you may need to relax cookie privileges on your browser for the **cloudcannon.com** domain.

To explicitly allow the [Visual Editor](/editing/editors/visual-editor/) to load, follow the instructions for your browser below:

### Google Chrome

To update your cookie preferences, open your Chrome preferences from the burger menu.

![Google Chrome menu open](/images/editing/editors/cookie-preferences/chrome-menu.png){: srcset="/images/editing/editors/cookie-preferences/chrome-menu.png 800w, /images/editing/editors/cookie-preferences/chrome-menu@2x.png 1600w"}

Scroll down to *Advanced* / *Privacy and Security* then select *Site settings*.

![Google Chrome settings](/images/editing/editors/cookie-preferences/chrome-settings.png){: srcset="/images/editing/editors/cookie-preferences/chrome-settings.png 800w, /images/editing/editors/cookie-preferences/chrome-settings@2x.png 1600w"}

Select *Cookies and site data*.

![Google Chrome cookie settings](/images/editing/editors/cookie-preferences/chrome-settings-cookies.png){: srcset="/images/editing/editors/cookie-preferences/chrome-settings-cookies.png 800w, /images/editing/editors/cookie-preferences/chrome-settings-cookies@2x.png 1600w"}

Ensure cookies are always allowed with **app.cloudcannon.com** and **proxy.cloudcannon.com**.

![Google Chrome cookie settings add site form](/images/editing/editors/cookie-preferences/chrome-settings-cookies-add.png){: srcset="/images/editing/editors/cookie-preferences/chrome-settings-cookies-add.png 800w, /images/editing/editors/cookie-preferences/chrome-settings-cookies-add@2x.png 1600w"}

### Mozilla Firefox

To update your cookie preferences, open your Firefox preferences from the burger menu.

![Mozilla Firefox menu](/images/editing/editors/cookie-preferences/firefox-menu.png){: srcset="/images/editing/editors/cookie-preferences/firefox-menu.png 800w, /images/editing/editors/cookie-preferences/firefox-menu@2x.png 1600w"}

Once open, choose the *Privacy* tab and ensure that **Standard** security is selected.

![Mozilla Firefox settings](/images/editing/editors/cookie-preferences/firefox-settings.png){: srcset="/images/editing/editors/cookie-preferences/firefox-settings.png 800w, /images/editing/editors/cookie-preferences/firefox-settings@2x.png 1600w"}

Alternatively, add an exception for **app.cloudcannon.com** when prompted after opening the editor.

### Safari

To update your cookie preferences, open your Safari preferences from the system menu.

![Safari menu](/images/editing/editors/cookie-preferences/safari-menu.png){: width="616" height="346"}

Once open, choose the *Privacy* tab and ensure that **Block all cookies** is not enabled.

![Safari settings](/images/editing/editors/cookie-preferences/safari-settings.png){: width="835" height="327"}

### Brave

To update your cookie preferences on **app.cloudcannon.com**, click the Brave icon in your address bar and ensure shields are down.

![Brave shields down menu](/images/editing/editors/cookie-preferences/brave-shields-down.png){: width="432" height="376"}

Alternatively, try shields up with **All cookies allowed.**

![Brave shields up menu](/images/editing/editors/cookie-preferences/brave-shields-up.png){: width="874" height="1168"}

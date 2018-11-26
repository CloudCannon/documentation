---
title: Scheduling
category: Building
order: 6
requirements:
  build: Any
  plan: Free
  hosting: Any
---

Scheduling allows you to define when your site is built automatically. There are two types of scheduled builds:

1. Manually configured builds
2. Automatic builds configured from site source

---

## Manual Builds

Manually configured builds or Manual builds are configured in the CloudCannon UI. They are useful for regular period builds or one off future builds.

To configure a manual build:

1. Go to *Site Settings* / *Scheduled Builds*
2. Select the **Manual** tab
3. Add a **name**
4. Enter the **date** for the build to first run
5. If you want the build to repeat on a regular interval, select a **Repeat Interval**
6. Click **Create Schedule** to create a scheduled build.

> Repeat Intervals work from the original date selected. If you select a daily interval and your original time was 2pm, all future builds will run at 2pm.
{: .explainer}

![Site Settings Build Interface](/images/building/configuration.png){: srcset="/images/building/configuration.png 800w, /images/building/configuration@2x.png 1600w"}{: .screenshot}

To remove a build:

1. Go to *Site Settings* / *Scheduled Builds*
2. Select the **Manual** tab
3. Click **Cancel** on your selected build and then click again to confirm

---

## Automatic builds

Automatic builds are configured by generating a `_schedule.txt` file in your Jekyll site. After a build CloudCannon will read your `_schedule.txt` file and automatically configure a build at the specified time. This is useful for future posts and any build that uses `site.time`.

### Installation

To generate `_schedule.txt` we recommend using our plugin [jekyll-cloudcannon-schedule`](https://github.com/CloudCannon/jekyll-cloudcannon-schedule). This will parse all posts set for the future and generate a build on that date. If you would like to generate a custom file, see below for [schedule file format](#schedule-file-format).

[![Build Status](https://travis-ci.org/CloudCannon/jekyll-cloudcannon-schedule.svg?branch=master)](https://travis-ci.org/CloudCannon/jekyll-cloudcannon-schedule)
[![Gem Version](https://badge.fury.io/rb/jekyll-cloudcannon-schedule.svg)](https://badge.fury.io/rb/jekyll-cloudcannon-schedule)

Add the following to your **Gemfile**:

```
group :jekyll_plugins do
  gem 'jekyll-cloudcannon-schedule', '0.1.2'
end
```

Add the following to your **_config.yml**:

```
plugins:
  - jekyll-cloudcannon-schedule
```

> If you are using a Jekyll version less than 3.5.0, use the gems key instead of plugins.
{: .explainer}

### Viewing automatic builds

Once the plugin is configured, the site will be built automatically at the date of any future post. To view all available automatic builds:

1. Go to *Site Settings* / *Scheduled Builds*
2. Select the **Automatic** tab
2. Clicking **Update** will open the source filename in the content editor

This is useful when configuring your initial plugin setup.

![Site Settings Build Interface](/images/building/configuration.png){: srcset="/images/building/configuration.png 800w, /images/building/configuration@2x.png 1600w"}{: .screenshot}

> Posts that are visible on the main site will not trigger a build. If automatic builds are not working, ensure **--future** is unchecked in **Site Settings** / **Build**.
{: .explainer}

### Schedule File Format

The `_schedule.txt` is a comma separated list of values. It contains three values:

1. Run date
2. Build name
3. Source filename

For example:

```
2020-10-22T10:00:00+00:00,Publish Post,_posts/2020-10-22-because-of-the-internet.md
```

These values are used to schedule a build and generate the management UI.

> If you're creating `_schedule.txt` without the `jekyll-cloudcannon-schedule` plugin you will need to add the file to your `include` in `_config.yml` as Jekyll doesn't process files beginning with an underscore by default.
{: .explainer}
---
title: Date
category: Time Inputs
details: |
  Date picker with options for year, month and day. Displayed for keys ending in `_date` and date values.

  If `site.timezone` is set, dates are output with the matching offset suffix. If unset, dates are output in UTC (without an offset suffix).
yaml_code_block: |
  ---
  sale_start_date: 2018-01-09 00:00:00
  ---
image_paths:
  - /images/editing/front-matter/date.png
  - /images/editing/front-matter/date-focus.png
info: The time part is always added as `00:00:00` for consistency with *Date Time* fields and sorting comparisons in Liquid.
---

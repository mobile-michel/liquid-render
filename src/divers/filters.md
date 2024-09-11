---
title: Output & filters
description: when filename is specified as literal string, it supports Liquid output and filter syntax. Useful when concatenating strings for a complex filename.
date: 2024-01-06
---
**input**
{% raw %}
{% assign name = 'footer' %}
{% render "components/{{name | append: \".liquid\"}}" %}
{% endraw %}

**footer.liquid**
```
This is text for the footer.
```

**output**
{% assign name = 'footer' %}
{% render "components/{{name | append: \".liquid\"}}" %}
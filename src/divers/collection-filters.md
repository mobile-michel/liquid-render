---
title: Output & filters with collections
description: when filename is specified as literal string, it supports Liquid output and filter syntax. Useful when concatenating strings for a complex filename.
date: 2024-02-06
---
**input**
{% raw %}
{% assign name = 'footer' %}
{% render "components/{{name | append: \".liquid\"}}" %}
{% endraw %}
**output**
{% assign name = 'footer' %}
{% render "components/{{name | append: \".liquid\"}}" %}
---
title: Multiple objects
description: List of multiple objects
tags: [primary]
date: 2024-02-01
---

{% for nav in collections.secondary %}
{% if nav.data.folder == 'multiple' %}
- [{{ nav.data.title }}]({{ nav.url | url }}): {{ nav.data.description }}
{% endif %}
{% endfor %}
---
title: Single object
description: List of single object
tags: [primary]
date: 2024-01-01
---

{% for nav in collections.secondary %}
{% if nav.data.folder == 'single' %}
- [{{ nav.data.title }}]({{ nav.url | url }}): {{ nav.data.description }}
{% endif %}
{% endfor %}
---
title: Global variables with collections
description: globals don’t need to be passed down, they are accessible from all files. One or more objects can be passed to a template.
date: 2024-02-03
---
**input**
{% raw %}
{% render 'components/card', item: cards[0] %}
{% endraw %}

**output**
{% render 'components/card', item: cards[0] %}
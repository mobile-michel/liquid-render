---
title: Global variables
description: globals don’t need to be passed down, they are accessible from all files. One or more objects can be passed to a template.
date: 2024-01-03
---
**input**
{% raw %}
{% render 'components/card', item: one-card %}
{% endraw %}

**card.liquid**
{% raw %}
```
<article>
    <h4>{{ item.title }}</h4>
    <p>{{ item.content}}</p>
    <p>{{ item.author }}</p>
</article>
```
{% endraw %}

**output**
{% render 'components/card', item: one-card %}
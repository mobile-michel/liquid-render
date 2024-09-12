---
title: Global JSON variables
description: globals don’t need to be passed down, they are accessible from all files. One or more objects can be passed to a template.
date: 2024-01-07
---
**output**
{% render 'components/card', item: single-object %}

**input**
{% raw %}
{% render 'components/card', item: single-object %}
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

**single-object.json**
```
{
    "title": "When the sun goes down",
    "content": "That's when the fun begins",
    "author": "Mickael Jackson"
}
```
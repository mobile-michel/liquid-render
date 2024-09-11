---
title: JSON data
description: a single object can be passed to a snippet by using the with...as syntax.
date: 2024-01-03
---
**output**
{% render 'components/card' with single-object as item %}

**input**
{% raw %}
{% render 'components/card' with single-object as item %}
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
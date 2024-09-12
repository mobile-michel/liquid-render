---
title: Passing JSON variables
description: variables defined in parent’s scope can be passed to the partial template by listing them as parameters on the render tag.
date: 2024-01-08
---
**output**
{% render 'components/card1', title: single-object.title, content: single-object.content, author: single-object.author %}

**input**
{% raw %}
{% render 'components/card1', title: single-object.title, content: single-object.content, author: single-object.author %}
{% endraw %}

**components/card1.liquid**
{% raw %}
```
<article>
    <h4>Title: {{ title }}</h4>
    <p>Content: {{ content}}</p>
    <p>Author: {{ author }}</p>
</article>
```
{% endraw %}

**_data/single-object.json**
```
{
    "title": "When the sun goes down",
    "content": "That's when the fun begins",
    "author": "Mickael Jackson"
}
```
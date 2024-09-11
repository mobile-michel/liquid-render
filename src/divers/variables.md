---
title: Passing variables
description: variables defined in parent’s scope can be passed to the partial template by listing them as parameters on the render tag.
date: 2024-01-02
---
**input**
{% raw %}
{% render 'components/card1', title: one-card.title, content: one-card.content, author: one-card.author %}
{% endraw %}

**components/card1.liquid**
{% raw %}
```
<article>
    <h4>{{ title }}</h4>
    <p>{{ content }}</p>
    <p>{{ author }}</p>
</article>
```
{% endraw %}

**_data/one-card.json**
```
{
    "title": "Balls get inside",
    "content": "With a lot of pressure",
    "author": "Barbara Streisand"
}
```

**output**
{% render 'components/card1', title: one-card.title, content: one-card.content, author: one-card.author %}
---
title: JSON datas
description: Render tag with the FOR parameter, using JSON datas for an array of objects.
date: 2024-02-03
---
**output**
{% render 'components/card' for multiple-objects as item %}

**input**
{% raw %}
{% render 'components/card' for multiple-objects as item %}
{% endraw %}

**card.liquid**
{% raw %}
```
<article>
    <h4>Title: {{ item.title }}</h4>
    <p>Content: {{ item.content}}</p>
    <p>Author: {{ item.author }}</p>
</article>
```
{% endraw %}

**multiple-objects.json**
```
[
    {
        "title": "Balls get inside",
        "content": "With a lot of pressure",
        "author": "Barbara Streisand"
    },
    {
        "title": "The intruder",
        "content": "Got inside the house",
        "author": "Bastien Vacherand"
    },
    {
        "title": "When the sun goes down",
        "content": "That's when the fun begins",
        "author": "Mickael Jackson"
    }
]
```

In the example above, the template will be rendered once for each variant of the product, and the variant variable will hold a different product variant object for each iteration.

When using the for parameter, the forloop object is accessible within the rendered template.
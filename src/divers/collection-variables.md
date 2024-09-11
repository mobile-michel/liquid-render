---
text-link: Passing variables
title: Passing variables with collections
description: variables defined in parent’s scope can be passed to the partial template by listing them as parameters on the render tag.
date: 2024-02-02
---
**input**
{% raw %}
{% render 'components/card3', item: collections.collection[0] %}
{% endraw %}

**card3.liquid**
{% raw %}
```
<article>
    <h4>{{ item.data.title }}</h4>
    <p>{{ item.data.description }}</p>
</article>
```
{% endraw %}

**output**
{% render 'components/card3', item: collections.collection[0] %}

---
title: Simple array
description: An example with the render tag and some datas declared in a variable.
date: 2024-05-16
---
**output**  
{% assign fruits = "orange, apple, peach" | split: ',' %}
{% render 'components/array' for fruits as name %}

**input**
```
{% raw %}
{% assign fruits = "orange, apple, peach" | split: ',' %}
{% render 'components/array' for fruits as name %}
{% endraw %}
```

**components/array.liquid**
{% raw %}
```
<article>
    <p>Name: {{ name }}</p>
</article>
```
{% endraw %}
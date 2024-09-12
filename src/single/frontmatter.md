---
title: Frontmatter datas
description: An example with the render tag and some datas declared in the frontmatter of this file.
date: 2024-01-06
items:
  title: Balls get inside
  content: With a lot of pressure
  author: Barbara Streisand
---
**output**
{% render 'components/card' with items as item %}

**input**
{% raw %}
{% render 'components/card' with items as item %}
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

**Frontmatter**
```
items:  
  title: Balls get inside  
  content: With a lot of pressure  
  author: Barbara Streisand
```
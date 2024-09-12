---
title: Frontmatter datas
description: Render tag with the FOR parameter, using frontmatter for an array of objects.
date: 2024-02-02
items:
  - title: The intruder
    content: Got inside the house
    author: Bastien Vacherand
  - title: Balls get inside
    content: With a lot of pressure
    author: Barbara Streisand
  - title: When the sun goes down
    content: That's when the fun begins
    author: Mickael Jackson
---
**output**
{% render 'components/card' for items as item %}

**input**
{% raw %}
{% render 'components/card' for items as item %}
{% endraw %}

**components/card.liquid**
{% raw %}
```
<article>
    <h4>Title: {{ item.title }}</h4>
    <p>Content: {{ item.content}}</p>
    <p>Author: {{ item.author }}</p>
</article>
```
{% endraw %}

**Frontmatter**
```
items:  
  - title: The intruder  
    content: Got inside the house  
    author: Bastien Vacherand  
  - title: Balls get inside  
    content: With a lot of pressure  
    author: Barbara Streisand  
  - title: When the sun goes down  
    content: That's when the fun begins  
    author: Mickael Jackson
```
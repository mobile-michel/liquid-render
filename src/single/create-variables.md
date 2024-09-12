---
title: Create variables
description: variables created in parent’s scope can be passed to the partial template by listing them as parameters on the render tag.
date: 2024-01-02
---
**output**
{% render 'components/card1', title: 'This is it', content: 'What is that for ?', author: 'Michel' %}

**input**
{% raw %}
{% render 'components/card1', title: 'This is it', content: 'What is that for ?', author: 'Michel' %}
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
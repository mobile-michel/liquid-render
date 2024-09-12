---
title: Collections datas
description: Render tag with the FOR parameter, using collections for an array of objects.
date: 2024-02-04
---
**output**
{% render 'components/card-collections' for collections.objects as item %}

**input**
{% raw %}
{% render 'components/card-collections' for collections.objects as item %}
{% endraw %}

**card.liquid**
{% raw %}
```
<article>
    <h4>Title: {{ item.data.title }}</h4>
    <p>Content: {{ item.data.content}}</p>
    <p>Author: {{ item.data.author }}</p>
</article>
```
{% endraw %}

**files with "tags: objects"**
```
---
title: The intruder
content: Got inside the house
author: Bastien Vacherand
---
```
---
title: Static content
description: Insert the rendered content of another template within the current template with just static content (no variables).
date: 2024-01-01
---
**output**  
{% render 'components/card2' %}

**input**
{% raw %}
{% render 'components/card2' %}
{% endraw %}

**card2.liquid**
```
<article>
    <h4>Title: Special title</h4>
    <p>Content: This content is static</p>
    <p>Author: Mike</p>
</article>
```

### Variable scope

When a partial template is rendered, the code inside it can’t access its parent’s variables and its variables won’t be accessible by its parent. This encapsulation makes partials easier to understand and maintain.
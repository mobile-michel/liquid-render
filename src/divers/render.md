---
title: Render a template
description: Insert the rendered content of another template within the current template.
date: 2024-01-01
---
**input**
{% raw %}
{% render 'components/footer' %}
{% endraw %}

**footer.liquid**
```
This is text for the footer.
```

**output**  
{% render 'components/footer' %}

### Variable scope

When a partial template is rendered, the code inside it can’t access its parent’s variables and its variables won’t be accessible by its parent. This encapsulation makes partials easier to understand and maintain.
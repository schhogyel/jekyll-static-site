---
layout: archive
title: "Work"
permalink: /work/
author_profile: false
---

{% include base_path %}

<div class="grid__wrapper">
  {% for post in site.work %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
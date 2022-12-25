---
layout: page
title: omnipresence™
subtitle: not actually trademarked.
headtitle: a blip in time - omnipresence™
toc: false
---

<div>
{% assign postsCategory = site.posts | group_by_exp:"post", "post.categories"  %}
{% for category in postsCategory %}
<h2 class="post-teaser-topic">
<strong>
{% if category.name %} 
~  &nbsp;  {{ category.name }} &nbsp;  ~
{% else %} 
{{ Print }} 
{% endif %}
</strong>
</h2>
<ul class="list-posts">
{% for post in category.items %}
<li class="post-teaser">
<a href="{{ post.url | prepend: site.baseurl }}">
<span class="post-teaser-title">{{ post.title }}</span>
<span class="post-teaser-date">{{ post.date | date: "%d %b %Y" }}</span>
</a>
</li>
{% endfor %}
</ul>
{% endfor %}
<br>
</div>
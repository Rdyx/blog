---
layout: post
current: posts-list-by-tag
title: Liste de tous les articles par thème
navigation: true
logo: 'assets/images/common/blog-icon.png'
class: post-template
subclass: 'post page'
cover:  assets/images/welcome.jpg
---

<!-- Due to the page being specific, style will be defined directly here -->
<!-- Ordering tags -->
{% assign tagsList = site.tags | sort %}

{% for tag in tagsList %}
  <h6>{{ tag[0] | upcase }}</h6>
  <ul class="list-unstyled" style="margin-bottom: 3rem;">
    {% assign postsList = tag[1] | sort: 'title' %}
    {% for post in postsList %}
      <li style="padding-left: 1.5rem;">
        <a href="{{ site.baseurl }}/{{ post.url | replace: '/' }}"><strong>{{ post.title }}</strong></a> - 
        <i>
          <small>
            {% if post.edit-date %}
              {% include date-fr.html date=post.edit-date %}
            {% else %}
              {% include date-fr.html date=post.date %}
            {% endif %}
          </small>
        </i>
      </li>
    {% endfor %}
  </ul>
{% endfor %}

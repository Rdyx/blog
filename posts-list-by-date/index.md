---
layout: post
current: posts-list-by-date
title: Liste de tous les articles par date
navigation: true
logo: 'assets/images/blog-icon.png'
class: post-template
subclass: 'post page'
cover:  assets/images/welcome.jpg
---

<!-- Due to the page being specific, style will be defined directly here -->
<div>
<!-- Seems liquid need 3 parts of a date to get separated parts of a date later so we group twice by month... -->
{% assign postsByDate = site.posts | group_by_exp:"post", "post.date | date: '%B %-m %Y'" %}
{% for postDate in postsByDate %}
  {% assign month = postDate.name | date: "%-m" %}
  {% assign year = postDate.name | date: "%Y" %}
  <h6>
    {% case month %}
      {% when '1' %}Janvier
      {% when '2' %}Février
      {% when '3' %}Mars
      {% when '4' %}Avril
      {% when '5' %}Mai
      {% when '6' %}Juin
      {% when '7' %}Juillet
      {% when '8' %}Août
      {% when '9' %}Septembre
      {% when '10' %}Octobre
      {% when '11' %}Novembre
      {% when '12' %}Décembre
    {% endcase %} {{ year }}
  </h6>
  <ul class="list-unstyled" style="margin-bottom: 3rem;">
    {% for post in postDate.items %}
      <li style="padding-left: 1.5rem; line-height: 1.5rem !important;">
        <a href="{{ site.baseurl}}{{ post.url | replace: '/' }}">{{ post.title }}</a>
        {% assign postTagsArrayLength = post.tags | size %}
        {% unless postTagsArrayLength == 0 %}-{% endunless %}
        <i>
          <small>
            <!-- Preparing vars for loop -->
            {% assign lastPostTag = post.tags | last %}
            {% for tag in post.tags %}
              <a href="{{ site.baseurl }}tag/{{ tag | slugify }}">{{ tag }}</a>
                {% if postTagsArrayLength > 1 %}{% unless tag == lastPostTag %}, {% endunless %}{% endif %}
            {% endfor %}
          </small>
        </i>
      </li>
    {% endfor %}
  </ul>
{% endfor %}
</div>
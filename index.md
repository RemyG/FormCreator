---
layout: page
title: FormCreator
---

<div class="grid-container">
	<div class="grid-100 main-description">
		<p>FormCreator is an HTML/Javascript application, meant to be used as a development help.</p>
		<p>I often need to simulate HTTP POST requests, and it's always a real pain to paste the parameters in a text editor, delete all the useless text, create an input tag for each parameter, then save the file as an HTML page and open it in a browser.</p>        
        <p>That's what FormCreator is meant to do. It won't create a nice form, but it will parse the parameters you put in and transform them into hidden inputs, so you can test your HTTP request.</p>
	</div>
</div>

<div class="grid-container">
	<div class="grid-50 tablet-grid-50">
		<h3>Latest posts</h3>
		<ul class="home-list">
			{% for post in site.posts limit: 5 %}
				<li>
					<a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
					<small><i class="icon-time"> </i>{{ post.date | date:"%Y-%m-%d" }}</small>
				</li>
			{% endfor %}
		</ul>
	</div>
	<div class="grid-50 tablet-grid-50">
		<h3>Links</h3>
		<ul class="home-list">
			<li><a href="https://github.com/RemyG/FormCreator">FormCreator on Github</a></li>
		</ul>
	</div>
</div>

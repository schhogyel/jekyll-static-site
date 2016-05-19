---
layout: post
title:  "Creating static website powered by Jekyll on Github Pages"
date:   2016-01-20 
categories: Jekyll
---
<p>It is simple to setup a static website using Jekyll and host on Github</p>
<ol>
	<li> Create a repository in Github</li>
	<li>Clone your repository in your sites folder. Replace *** with your username</li>
	{% highlight ruby %}
git clone https://github.com/***/***.github.io
{% endhighlight %}
	

</ol>
<p> Create the Jekyll site</p>
<ol>
	<li> Create a file and name it Gemfile with no extension in your sites folder. Add the following code in your Gemfile.

{% highlight ruby %}
source 'https://rubygems.org'
gem 'github-pages'
{% endhighlight %}
	</li>

<li>Run bundle install and it will install all gems required by Github pages.</li>
<li>Generate Jekyll site in your site folder by entering</li>
<li>The Jekyll site is now ready.</li>

</ol>
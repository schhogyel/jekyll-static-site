---
layout: post
title:  "Creating static site powered by Jekyll on Github Pages"
date:   2016-01-20 
categories: Jekyll
---
<p>Basic steps to setup a static website using Jekyll and host on Github</p>
<ol>
	<li> Create a repository in Github and name it username.github.io where username is your username</li>
	<li>Clone your repository in your sites folder. </li>
	{% highlight ruby %}
$git clone https://github.com/username/username.github.io
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
{% highlight ruby %}
$bundle install
{% endhighlight %}
<li>Generate Jekyll site in your site folder </li>
{% highlight ruby %}
$ bundle exec jekyll new . --force
{% endhighlight %}
<li>The Jekyll site is now installed locally and can be viewed by typing http://localhost:4000 in the browser.</li>
<li>After working with your local site you can upload your changes on the GitHub repository by pushing changes.</li>

{% highlight ruby %}
$git add --all
$git commit -m "First commit"
$git push -u origin master
{% endhighlight %}
<li>You can view your site at http://username.github.io from your browser.</li>

</ol>

<p>
Additional Readings
<ul>
<li><a href="https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/">https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/</a></li>
</ul>
</p>
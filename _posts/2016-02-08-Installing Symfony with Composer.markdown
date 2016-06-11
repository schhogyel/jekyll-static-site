---
layout: single
title:  "Installing Symfony with Composer"
date:   2016-02-08 
categories: Symfony Tutorial
---
Install composer with installer


Run 
{% highlight ruby %}
$ composer create-project symfony/framework-standard-edition my_project_name
{% endhighlight %}
Running the Symfony Application

Symfony leverages the internal web server provided by PHP to run applications while developing them. Therefore, running a Symfony application is a matter of browsing the project directory and executing this command:
{% highlight ruby %}
$ cd my_project_name/
$ php bin/console server:run
{% endhighlight %}
Then, open your browser and access the http://localhost:8000/ URL to see the Welcome Page of Symfony:
---
layout: single
title:  "Updating Drupal Core and Modules with Drush"
date:   2015-12-12
categories: Drupal, Tutorial
---

<ol>
	<li>Put your site in maintenance mode. </li>
{% highlight ruby %}
$drush vset --exact maintenance_mode 1
$drush cache-clear all
{% endhighlight %}
<li>Update Drupal with drush. </li>
{% highlight ruby %}
$drush pm-update drupal
{% endhighlight %}
<li>Put your site online again

</li>
{% highlight ruby %}
$drush vset --exact maintenance_mode 0
$drush cache-clear all
{% endhighlight %}

<li>Update other modules. To update other modules. Follow the same procedure and then instead of updating core, run</li>
{% highlight ruby %}
$drush pm-update --no-core
{% endhighlight %}

</ol>






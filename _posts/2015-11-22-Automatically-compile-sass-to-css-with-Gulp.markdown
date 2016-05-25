---
layout: post
title:  "Compile Saas to CSS with Gulp"
date:   2015-11-22
categories: Gulp
---
<h3>Installing gulp</h3>
<ol>
<li>
Move to the site directory where gulp will be run. In the commnad line run npn-init to generate package.json file. 
</li>
<li>
Run npm install -g gulp to install gulp globally. To add to the current project, npm install --save-dev gulp. This will install gulp in the current project and add gulp as dependency in package.json file. 
</li>
<li> Next install gulp-sass which will be required to process sass to css.</li>

{% highlight ruby %}
npm init
npm install -g gulp
npm install --save-dev gulp
npm install --save-dev gulp-sass

{% endhighlight %}
</li>
<li>Add the gulp task in gulp.js





{% highlight javascript %}
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});

{% endhighlight %}
</li>

 </ol>
 <h3>Additional Readings</h3>
 <ul>
 	<li><a href="https://css-tricks.com/gulp-for-beginners/">https://css-tricks.com/gulp-for-beginners/</a></li>
    <li><a href="http://ryanchristiani.com/getting-started-with-gulp-and-sass"/>http://ryanchristiani.com/getting-started-with-gulp-and-sass</a></li>
    <li><a href="https://www.sitepoint.com/simple-gulpy-workflow-sass/">https://www.sitepoint.com/simple-gulpy-workflow-sass/</a></li>
 </ul>
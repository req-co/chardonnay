Chardonnay
==========

Starter theme for Drupal 8

To Use
======

* Copy files to new theme folder
  - do not copy the directory so we don't accidentally bring over the git repo
* Rename chardonnay.info.yml
* Rename chardonnay-functions.js
* Search and replace chardonnay with your theme name

* You will need Node, Grunt, and Bundler
* From the command line, cd into the folder
* Run "sudo npm install"
* Run "bundle install"
* Run "grunt watch"
* To stop watching, use Ctrl+C

Random Notes
============

* Common Modernizr tests: mediaqueries (non-core), touch, rgba, csstransforms (2d), svg, plus printshiv
* Frequently used Modernizr tests: csscalc (non-core), cssanimations, csstransitions
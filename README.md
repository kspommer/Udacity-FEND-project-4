# FEED READER TESTING

## Developer
Susan Pommer
July 2018
Udacity Front End Nano Degree Program, Project 4

## Project Overview
In this project we were given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they had already included [Jasmine](http://jasmine.github.io/) and started writing the first test suite.

To exercise test driven development, the project goals were to build out the Jasmine feedreader.js file, 
finishing test #1 and adding six additional tests. All the tests initially failed andmission was to write application code to make all seven tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

## Project Rubric
[Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

## Required Tests 
**Test 1:** Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
**Test 2:**  Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.

Write a new test suite named `"The menu"`.
**Test 3:**  Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
**Test 4:**  Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.

Write a test suite named `"Initial Entries"`.
**Test 5:** Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
**Test 6:**  Write a test suite named `"New Feed Selection"`.
**Test 7:**  Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

Additional Notes:
* No test should be dependent on the results of another.
* Callbacks should be used to ensure that feeds are loaded before they are tested.

## Installation
* No special requirements.

## Usage
To launch and run the tests, double click on the index.html file.

## Resource Leveraged
First, thanks to my study group for some coaching on tests 3 & 4.  I was stuck for days, just missing a simple thing. 

I also picked up some hints from the project_4 slack channel, particularly helping me past a Gulp-induced problem. 

I also leveraged the DOM lectures from this course for some refresher material.  








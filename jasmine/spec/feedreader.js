/* feedreader.js
// Susan Pommer
// July 2018
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* All tests placed within the $() function since some require
 * DOM elements need to ensure they don't run until the DOM is ready.
 */

// NOTE:  I added this function before realized could use querySelector instead
// var checkClass = document.querySelector(".menu-hidden")

function checkForClass() {
    // query for the menu-hidden class; capture in HTMLCollection
    var checkForClassHTMLCollection = document.getElementsByClassName("menu-hidden");
    // convert HTML Collection to an Array
    var checkForClass = [].slice.call(checkForClassHTMLCollection);
    // calculate length
    var checkForClassLength = checkForClass.length;
    return checkForClassLength;
}

$(function() {
    /* test suite for tests 1 and 2 
    * this suite is all about the RSS feeds definitions
    * the allFeeds variable in the application.
    */

    describe('RSS Feeds', function() {

        /* Provided test
         * defines allFeeds variable / confirms not empty 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* ADDED Test 1: loops through each feed
         * in the allFeeds object and ensures it has a
         * URL defined and that the URL is not empty.
        */       
        it('URL defined and not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
                //console.log(i); // TO TEST THE TEST LOOP
            }
        });

         /* ADDED Test 2: loops through each feed
         * in the allFeeds object and ensures it has a
         * name defined and that the name is not empty.
        */
        it('name defined and not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
                //console.log(i); // TO TEST THE TEST LOOP
            };
        });
    });

    /* ADDED new test suite named "The menu" */
    describe('The Menu', function() {
        /* ADDED test 3: ensures the menu element is
         * hidden by default. 
        */
        it('menu hidden by default', function() {
            var checkForClassLength = checkForClass();
            // test condition
            expect(checkForClassLength).toBe(1);
        });

        /* ADDED test 4: ensures the menu changes
        * visibility when the menu icon is clicked.
        * test has two expectations: 1) does the menu display when
        * clicked and 2) does it hide when clicked again.
        */
        it('menu changes visibility on click', function() {
            // assign variable to the hamburger menu button DOM element
            var hamburgerMenuIcon = document.querySelector(".menu-icon-link");

            // resource:  https://www.w3schools.com/jsref/met_html_click.asp
            // unit tests //
            // case 1:  on first click, menu is opened and class is removed
            hamburgerMenuIcon.click();
            // check for menu-hidden class
            var checkForClassLength = checkForClass();
            // unit test for case 1
            expect(checkForClassLength).toBe(0);

            // case 2: on 2nd click, menu is closed and class is added back
            hamburgerMenuIcon.click();
            // check for menu-hidden class
            var checkForClassLength = checkForClass();
            // unit test for case 2
            expect(checkForClassLength).toBe(1);
        });
    }); 

    /* ADDED: new test suite named "Initial Entries" */

        /* ADDED test 5: ensures when loadFeed function is called
         * at least one .entry element within the .feed container.
         * Note:  loadFeed() is asynchronous test; test utilizies
         * Jasmine's beforeEach and asynchronous done() function.
         */
    describe("Initial Entries", function() {
        // make sure loadFeed function is done
        beforeEach(function(done) {
            loadFeed(0, function () {    // loadFeed(done);
                done();
            });
        });

        // check to see if entries are added to the feed
        it("has at least one feed URL", function() {
            // capture all itemss with feed and entry class
            var feedItems = document.querySelectorAll(".feed .entry"); 
            // console.log(feedItems.length); // FOR TESTING 
            // check to see if feed has 1 or more entry 
            expect(feedItems.length).toBeGreaterThan(0); 
        });
    });

    /* ADDED: new test suite named "New Feed Selection" */
        /* ADDED test 6:: ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Note:  loadFeed() is asynchronous.
         */
    describe("New Feed Selection", function() {
        var initialFeed, 
            nextFeed; 
        // complete these functions before run test 
        beforeEach(function(done) {
            // get 1st feed
            loadFeed(0, function () {
                initialFeed = document.querySelector(".feed").innerHTML;
                // console.log(initialFeed); // FOR TESTING 
                // after first feed, get 2nd feed before declaring done
                // and running test to ensure 2nd loadFeed is executed
                loadFeed(1, function () {
                    // after loadFeed is done, get first entry again
                    var nextFeed = document.querySelector(".feed").innerHTML;
                    //console.log(nextFeed); // FOR TESTING
                    done(); 
                });
            }); 
        });      
        // references for toBe and toEqual 
        // https://www.tutorialspoint.com/jasminejs/jasminejs_equality_check.htm
        // https://jasmine.github.io/tutorials/your_first_suite
        it("new feed content is loaded", function() {
            // unit test
            expect(initialFeed).not.toEqual(nextFeed);
        });
    });
});
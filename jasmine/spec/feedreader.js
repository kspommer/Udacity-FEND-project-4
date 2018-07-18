/* feedreader.js
// Susan Pommer
// July 2018
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
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
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds', function() {

        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
        */       
        it('URL defined and not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
                //console.log(i); // TO TEST THE TEST LOOP
            }
        });

         /*TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
        */
        it('name defined and not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
                //console.log(i); // TO TEST THE TEST LOOP
            };
        });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
        */

        it('menu hidden by default', function() {
            var checkForClassLength = checkForClass();
            // test condition
            expect(checkForClassLength).toBe(1);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
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

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous sodone this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    describe("Initial Entries", function() {
        // make sure loadFeed function is done
        beforeEach(function(done) {
            loadFeed(0, function () {    // loadFeed(done);
                done();
            });
        });

        // check to see if items are added to the feed (have class entry-link)
        it("has at least one feed URL", function() {
            //console.log(document.querySelector(".entry-link")); // TEST
            expect(document.querySelector(".entry-link")).not.toBe(null); 
            // NOTE:  could also query on classes .feed .entry
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    describe("New Feed Selection", function() {
        var initialFeed, 
            nextFeed; 

        // complete these functions before run test 
        beforeEach(function(done) {
            // get 1st feed
            loadFeed(0, function () {
                initialFeed = document.querySelector(".feed");
                //console.log(initialFeed); // TEST
                done();
            });    
            // get 2nd feed
            loadFeed(1, function () {
                // after loadFeed is done, get first entry again
                var nextFeed = document.querySelector(".feed");
                //console.log(nextFeed); // TEST
                done(); 
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

// Questions on test 7 for reviewers: 
// 1)  is it better to compare '.feed' or ('.feed').innerHTML? 
// 2)  is it better to get feeds sequentially (per above) or nest
// calls for feed within each other (such as the following)

//  beforeEach((done) => {
//      loadFeed(0, () => {
//          initialFeed = document.querySelector('.feed');
//          loadFeed(1, () => {
//              nextFeed = document.querySelector('.feed');
//              done();
//          });
//      });
//  });



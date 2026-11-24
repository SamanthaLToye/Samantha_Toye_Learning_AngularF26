My first Angular project.


### API Link Documentation

*API PLACEHOLDER:* JSONPlaceholder

API Documentation: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

**API Example Link:** https://jsonplaceholder.typicode.com/users

For this assignment I was asked to choose between Option A or B for injecting
HttpClient and an Observable or httpResource. I went with Option A, which fit much easier into how my
service was already set up with regular signals. It kept things simple and easy to resource
with the class examples on how to use with a Component. This made connecting to an external API
easier to read and understand how it works.

When the page is refreshed, any new items, edits, deletes, are cleared and the original API data
reloads. This happens because the updates are stored only in the browsers memory and doesn't update the servers actual data.


### Lazy Loading

This is the before chunk file size and how large it was before making any changes to the landing page.

Initial chunk files | Names         |  Raw size | Estimated transfer size
main-VT6Z4SEW.js    | main          | 327.49 kB |                86.43 kB
styles-5FGPIYZR.css | styles        | 495 bytes |               495 bytes

                    | Initial total | 327.98 kB |                86.93 kB

***
This is the after chunk file size for the landing page.

Initial chunk files | Names             |  Raw size | Estimated transfer size
chunk-3JV7J2F4.js   | -                 | 270.29 kB |                74.47 kB
main-RON5LM7J.js    | main              |   9.32 kB |                 3.01 kB
styles-5FGPIYZR.css | styles            | 495 bytes |               495 bytes

                    | Initial total     | 280.11 kB |                77.98 kB

Lazy chunk files    | Names             |  Raw size | Estimated transfer size
chunk-QXHVZ2FH.js   | collection-form   |  48.28 kB |                10.70 kB
chunk-45QK7UFY.js   | collection-detail |   1.21 kB |               626 bytes

Application bundle generation complete. [2.388 seconds] - 2026-11-17T05:13:44.824Z



In the first initial run the application used all the templates in one file as shown in the table. 
What we learn about coding, is that having extra code that isn't needed to load the landing page isn't required.
This causes excessive amounts of data to load repeatedly every time a user goes to the page. 

When we change the landing to load the component routes, we use Angular built-in system to split those routes.
This changes the size of the file by loading only what is needed on the landing page until a route is requested. 

### Lifecycle

When you have this.id() in a constructor it triggers a runtime error NG8118 because the required signal input is not yet initialized
or bound when creating the component class.

When navigating back to the main landing page with the back button in the browser caused ngOnDestroy to run, 
which causes the router to completely destroy the instance when you leave, rather than just hide the page. 


### localStorage

* For the store key I used searchQuery to sort and filter items by name or category and show the list if the item matches what the user entered. This
works with my Collection to filter items if someone is looking for an item they know they want to buy.
* The one thing we never store in localStorage would be passwords for security concerns.

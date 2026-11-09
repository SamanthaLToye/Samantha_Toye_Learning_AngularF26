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

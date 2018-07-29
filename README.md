# MyReads Project

This is the final assessment project for Udacity's React Fundamentals course. This course is a part of  "Front-End Web Developer Nanodegree Program".

## Specification
I have been provided the [`template`](https://github.com/udacity/reactnd-project-myreads-starter) with a static example of the CSS and HTML markup, but without any of the React code that is needed to complete the project. I had to convert the provided app and use React code to:

* create a bookshelf app that allows user to select and categorize books user has read, are currently reading, or wants to read;
* create a search page which has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets user adds the book to library;
* create routes:
    - the main page has a link to /search, a search page that allows you to find books to add to your library,
    - the search page  has a link to / (the root URL), which leads back to the main page.

## How to run MyReads App

1. Make sure you have Git and Node installed on your local machine.
2. Download or clone the repository.
3. In a terminal install all project dependencies with `npm install`.
4. Start the development server with `npm start`
5. With your server running, open your browser and visit the site:
[`http://localhost:3000/`](http://localhost:3000/)

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

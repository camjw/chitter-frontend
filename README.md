# Chitter Frontend

A react front end for a twitter-like API.

Users can sign up, sign in and post peeps. They can also see the last 50 peeps posted.

## Technologies

This app was built using React and Redux. Redux is a state manager and is great. Redux made this app so much easier to make, and I found it really helpful to organise my thoughts around where state was, where it should be, and how to move state from component to component in a scaleable way.

## Usage

Clone the app and run `npm start`. Then go to `localhost:3000` and watch in wonder as the refresh button refreshes the chitter feed. That's it though.

## Tests

To run the tests, first make sure you've installed all the dependencies by running `npm install`, then run `npm test` to run the tests. Most of the tests make use of Jest's 'snapshots' to compare the results of some mounting to some expected HTML. These are saved in the `__snapshots__` folders, where appropriate.

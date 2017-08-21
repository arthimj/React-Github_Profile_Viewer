# React / Redux GitHub Profile
![CircleCI](https://img.shields.io/circleci/project/github/RedSparr0w/node-csgo-parser.svg)

This is a small single page application using React and Redux which displays an organization or users [GitHub](https://github.com/) profile information from the [GitHub API](https://developer.github.com/v3/users/). The application styling uses [Google's Material Design Lite](https://getmdl.io/).

The application will hold on to two pieces of Redux state, the profile information and the current response from the API request. If a user isn't found, or if there's a network issue with the request the application will inform you of such.

## Installation
This application can be installed via npm by running `npm install`. Once installed you're able to launch the application in a local server by running `npm start`.

## Tests
There are a number of unit tests available which can be initalized via `npm run test`.

![Example](assets/app_example.gif)

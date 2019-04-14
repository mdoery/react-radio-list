## About

This project demonstrates [lifting state up](https://reactjs.org/docs/lifting-state-up.html) and "[thinking in react](https://reactjs.org/docs/thinking-in-react.html)" by maintaining state where needed and using props to push state down to children.

The App class maintains state, higher up the DOM hierarchy. Radio buttons do not maintain their own state; they are "instructed" how to be set by props, which are sent from the parent.

## Other info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


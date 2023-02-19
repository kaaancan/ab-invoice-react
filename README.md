# Project

This Project is a web app fully hosted on AWS using Amplify. Stack:

1. React/Typescript on S3
2. AWS Cognito for User Management
3. DynamoDB
4. GraphQL

## Read this after a long time

This WebApp is fully hosted (FE/BE) on AWS Amplify. To start fresh:

1. Checkout this repo
2. npm install
3. Go to Amplify and get the 'amplify pull" command
4. amplify codegen to create all necessary classes
    1. Setup amplify codegen and setup maximum depth to atleast 6 this is to ensure that we get deeply nested objects

## Important stuff:

1. Check aws amplify cli version with the one that is used on CI/CD
2. Check node version with the one that is used on CI/CD
3. When API Key stuff is broken:
    1. https://stackoverflow.com/questions/71006168/amplify-api-graphql-unable-to-change-local-api-key-with-the-one-generated-onli

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Add data via AWS AppSync

1. Go to AWS AppSync in AWS
2. Go to Queries
3. Login with your user credentials
4. Run query, e.g.:
    1. mutation MyMutation { createAddress(input: {city: "Lauterhofen", number: "15", street: "Bartelacker strasse 15",
       zip: "92283"}) { number street zip city } }




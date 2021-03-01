# NLP News Article Evaluator App
An Express Node.js app that uses natural language processing to extract sentiments from blogs and articles. The app uses the [MeaningCloud Sentiment Analysis API](https://www.meaningcloud.com/developer/sentiment-analysis). It takes in the URL of the content to be analysed and estimates indicators of sentiment such as polarity, agreement, subjectivity and irony. If the API request is successful, the result is displayed on the frontend of the app. For a live demonstration of the app go to https://ngw-sentiment-analysis-app.herokuapp.com/

## Features
- Captures valid user input in the form of a URL
- Passes the URL to the external API and receives a result from the API.
- Displays the result from the API on the app frontend.

## Development
- Development environment e.g. Visual Studio Code
- [Express Node.js](https://expressjs.com/)
- [Webpack](https://webpack.js.org/)
- [MeaningCloud Sentiment Analysis API](https://www.meaningcloud.com/developer/sentiment-analysis)
- [Github](https://github.com/) for version control
- [Heroku cloud web hosting](https://www.heroku.com/)

## Dependencies
- [Node.js with npm](https://nodejs.org/)
- [express](https://www.npmjs.com/package/express)
- [webpack](https://www.npmjs.com/package/webpack)
- [webpack-cli](https://www.npmjs.com/package/webpack-cli)

## devDependencies
- [@babel/core](https://www.npmjs.com/package/@babel/core)
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)
- [babel-loader](https://www.npmjs.com/package/babel-loader)
- [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)
- [css-loader](https://www.npmjs.com/package/css-loader)
- [dotenv-webpack](https://www.npmjs.com/package/dotenv-webpack)
- [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)
- [jest](https://www.npmjs.com/package/jest)
- [mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin)
- [optimize-css-assets-webpack-plugin](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin)
- [regenerator-runtime](https://www.npmjs.com/package/regenerator-runtime)
- [sass](https://www.npmjs.com/package/sass)
- [sass-loader](https://www.npmjs.com/package/sass-loader)
- [style-loader](https://www.npmjs.com/package/style-loader)
- [terser-webpack-plugin](https://www.npmjs.com/package/terser-webpack-plugin)
- [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)
- [workbox-webpack-plugin](https://www.npmjs.com/package/workbox-webpack-plugin)

## Installation
- Install Node.js using installer from https://nodejs.org
- Create and navigate to the project folder from the the command line
- Copy the project files from this repo into the root folder of your project
- Install the remaining dependencies from the command line:

    `npm install`

- Create a .env file in the root folder of your project and your MeaningCloud API key to this file:

    `API_KEY=**************************`

## Run the Project
### Build your project from the commend line:

`npm run build-prod`

### Start the server from the command line:

`npm run start`

### View the app in your browser at http://localhost:5000

## Deployment
The NLP News Article Evaluator App is hosted for demonstration purposes at https://ngw-sentiment-analysis-app.herokuapp.com/

## Release History
- 1.0.0
    - First release - 23 Feb 2021
## About this Project
This project is a requirement on the [Udacity Frontend Developer Nanodegree program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011/)

## Author
Gbenga Oso

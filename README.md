# Zigzag Exam

This project is deployed on [GitHub Pages](https://hckrpatrick.github.io/zigzagExam/) ([https://hckrpatrick.github.io/zigzagExam/](https://hckrpatrick.github.io/zigzagExam/)) and has the following components:

[Level 1](#level-1) - Checks if the input string is a palindrome\
[Level 2](#level-2) - Returns the longest palindromic substring of the input string\
[Level 3](#level-3) - Returns the minimum number of cuts needed to perform on the input string such
that each remaining substring is a palindrome

## Level 1
This component has a function isPalindrom(input) which takes in an input and returns "True", if the input is a palindrome, otherwise "False".

1. Initially the function creates a variable start and end with values 0 and length of the input minus 1, respectively.
2. It will enter a loop and end until the following conditions are met:
      - start is equal to end: return "True"
      - start is greater than end: return "True"
      - input[start] is not equal to input[end]: return "False"
3. After each iteration on the loop, start will increment and end will decrement.

Time Complexity: O(n) where n is the length of the input

## Level 2
This component has a function longestPalindrome(input) which takes in an input and returns the longest palindromic substring of the input.

1. Initially the function creates a nxn array, where n is the length of the input string.
      - The value of array[i][j] is true if the substring of the input string from index i to j is a palindrome, otherwise false
2. sdas

## Level 3

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
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

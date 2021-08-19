# Zigzag Exam

This project is deployed on [GitHub Pages](https://pages.github.com/) ([https://hckrpatrick.github.io/zigzagExam/](https://hckrpatrick.github.io/zigzagExam/)) and has the following components:

[Level 1](#level-1) - Displays if the input string is a palindrome\
[Level 2](#level-2) - Displays the longest palindromic substring of the input string\
[Level 3](#level-3) - Displays the minimum number of cuts needed to perform on the input string such
that each remaining substring is a palindrome

## Level 1
This component has a function isPalindrom(input) which takes in an input and returns "True", if the input is a palindrome, otherwise "False".

Let *n* = length of input string

1. Initially the function creates a variable *start* and *end* with values 0 and *n* - 1, respectively.
2. It will enter a loop until the following conditions are met:
      - *start* >= *end*: return "True"
      - *input[start]* != *input[end]*: return "False"
3. After each iteration on the loop, *start* will increment and *end* will decrement.

Time Complexity: O(*n*) where *n*

## Level 2
This component has a function longestPalindrome(input) which takes in an input and returns the longest palindromic substring of the input.

Let *n* = length of input string

1. Initially the function creates a variable *longPalindromeSubstr* and a *n*x*n* array *palindromeTable*
      - Initial values *palindromeTable[i][j]* is false
      - Initial value of *longPalindromeSubstr* is the first letter of the input string
      - The value of *palindromeTable[i][j]* should be true if the substring of the input string from index i to j is a palindrome, otherwise false
      - Only the upper right triangle of *palindromeTable* will be used since the start index of the substring cannot be greater than the end index.
2. Assigning values to *palindromeTable[i][j]*:
      - substring length = 1:
           - For *palindromeTable[i][j]* where *i* is from 0 to *n* - 1, the value will be set to true since all strings with length 1 is a palindrome
           - Time Complexity: O(*n* - 1) = O(*n*)
      - substring length = 2:
           - For *palindromeTable[i][i+1]* where *i* is from 0 to *n* - 2, the value will be set to true if *input[i]* == *input[i+1]*, otherwise false
           - Time Complexity: O(*n* - 2) = O(*n*)
      - substring length > 2:
           - For *palindromeTable[i][j]* where (*j* - *i*) >= 2 and *j* < *n*, the value will be set to true if *palindromeTable[i+1][j-1]* is true and *input[i]* == *input[j]*, otherwise false
           - The function will start to assign values from (*j* - *i*) == 3 to (*j* - *i*) == *n* - 1
           - Time Complexity: O((*n* - 2) + (*n* - 3) + ... + (*n* - (*n* - 2)) + (*n* - (*n* - 1))) = O((*n* - 2) + (*n* - 3) + ... + 2 + 1) = O(*n*(*n* - 1)/2) = O(*n<sup>2</sup>*)
      - Every time a cell is set to true, it checks if the length of the substring it represents is longer than the length of the *longPalindromeSubstr*, if yes then the *longPalindromeSubstr* will take the value of the substring
3. The function returns the *longPalindromeSubstr*.

Total Time Complexity: O(*n*) + O(*n*) + O(*n*<sup>2</sup>) = O(*n<sup>2</sup>*)
         

## Level 3
This component has a function minPalindromeCuts(input) which takes in an input and returns the minimum number of cuts needed to perform on the input string such that each remaining substring is a palindrome.

Let n = length of input string
Let sub(a,b) be the substring of the input string from index a to b

1. Initially the function creates an array *cuts* with size *n* and a *n*x*n* array *palindromeTable*. The values of the cells are assigned the same way longestPalindrome function does.
      - The value of *cuts[i]* is the minimum number of cuts needed to perform on *sub(0,i)*, such that each remaining substring is a palindrome
      - Time Complexity: O(*n<sup>2</sup>*)
2. It will enter a loop from *i* = 0 to *i* = *n* - 1 and do the following:
      - assign 0 to *cuts[i]* if *palindromeTable[0][i]* is true (If *sub(0,i)* is a palindrome no cut is required)
      - otherwise *cuts[i]* will be set to *n* and enter a loop for *j* = 0 to *j* = *i* - 1 and do the following:
           - replace value of *cuts[i]* to *cut[j]* + 1 if *palindromeTable[j + 1][i]* and *cuts[j]* + 1 < *cuts[i]*
           - This condition checks if cutting *sub(0,i)* at index *j* will result to a lesser number of cuts than the current value of *cuts[i]* given that *sub(j,i)* is a palindrome
      - Time Complexity: O(1 + 2 + ... + (*n* - 1) + n) = O(*n*(*n* + 1)/2) = O(*n<sup>2</sup>*)

Total Time Complexity: O(*n*<sup>2</sup>) + O(*n*<sup>2</sup>) = O(*n<sup>2</sup>*)

# React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is deployed in deployed on [GitHub Pages](https://pages.github.com/) ([https://hckrpatrick.github.io/zigzagExam/](https://hckrpatrick.github.io/zigzagExam/)) using [GitHub Actions](https://github.com/features/actions) triggered by [push event](https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push).

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

# react-library-boilerplate

[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/samuelmeuli/react-library-boilerplate/blob/master/LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/samuelmeuli/react-library-boilerplate/pulls)

**Easily start building your React component library using this opinionated boilerplate.**

Included tools:

* Rollup and Babel for generating a bundle of your library in ES5
* Storybook for testing the UI of your component interactively
* ESLint and Husky for code linting


## Usage

To use this boilerplate for creating your own library, execute the following commands (and replace `my-library` with the name of your library):

```sh
git clone https://github.com/samuelmeuli/react-library-boilerplate my-library
```

Clean up the files from this repository and install the dependencies:

```sh
cd my-library
rm -rf .git README.md
npm install
```

Execute the start script to bundle your library and start your development server:

```sh
npm start
```

Finally, open http://localhost:6006 to see your component in action.

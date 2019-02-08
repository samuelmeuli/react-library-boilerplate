# react-library-boilerplate

**Easily start building your React component library using this opinionated boilerplate.**

What's included:

- Rollup and Babel for generating a bundle of your library in ES5
- Storybook for testing the UI of your component interactively
- Prettier, ESLint, and Stylelint for code formatting/linting
- Sass and Autoprefixer support for simple styling

_My boilerplate for React **applications** can be found [here](https://github.com/samuelmeuli/react-app-boilerplate)._

## Usage

To use this boilerplate for creating your own library, execute the following commands (and replace `my-library` with the name of your library):

```sh
git clone https://github.com/samuelmeuli/react-library-boilerplate my-library
```

Clean up the files from this repository and install the dependencies:

```sh
cd my-library
rm -rf .git README.md
yarn install
```

Execute the start script to bundle your library and start your development server:

```sh
yarn start
```

Finally, open http://localhost:3000 to see your component in action.

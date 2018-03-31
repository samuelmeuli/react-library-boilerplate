module.exports = {
  extends: 'airbnb',
	env: {
		browser: true
	},
	rules: {
		// Base
		'comma-dangle': [2, 'never'],
		'indent': [2, 'tab'],
		'no-tabs': 0,
		'object-curly-newline': 0,
		'object-curly-spacing': [2, 'always', { 'objectsInObjects': false }],

		// Import
		'import/no-extraneous-dependencies': [2, { 'devDependencies': true }], // ignore storybook-react

		// React
		'react/jsx-filename-extension': [2, {'extensions': ['.js']}],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab']
	}
};

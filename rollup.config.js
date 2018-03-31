import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';


export default {
	input: 'src/MyComponent',
	output: {
		file: 'lib/MyComponent.js',
		format: 'cjs'
	},
	external: ['react', 'prop-types'],
	plugins: [
		postcss(),
		babel({
			exclude: 'node_modules/**',
			plugins: ['external-helpers']
		})
	]
};

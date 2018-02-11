const chalk = require('chalk');


module.exports = {
	displayHelp: () => {
		console.log(`Usage:
  react-library-boilerplate ${chalk.blue('<project-name>')}

Options:
  -d, --debug    Display log for 'NPM install' command
  -h, --help     Display help`);
	},

	displayTitle: () => {
		console.log(chalk.bgBlue.black('\n\n REACT LIBRARY BOILERPLATE \n'));
	},

	displaySuccessInfo: (projectName) => {
		console.log(`
${chalk.green('Your project has successfully been created!')}

Run the following commands to get started:

  ${chalk.blue(`cd ${projectName}`)}
  ${chalk.blue('npm start')}

And see your library in action on ${chalk.blue('http://localhost:6006')}
`);
	}
};
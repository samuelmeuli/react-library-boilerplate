#!/usr/bin/env node

const chalk = require('chalk');
const parseArgs = require('minimist');
const Ora = require('ora');

const cli = require('./lib/cli');
const directory = require('./lib/directory');
const files = require('./lib/files');
const git = require('./lib/git');
const npm = require('./lib/npm');


// display title
cli.displayTitle();

// parse project name from command args
const argv = parseArgs(process.argv.slice(2));
const debug = argv.d || argv.debug;
const help = argv.h || argv.help;
if (help) {
	cli.displayHelp();
	process.exit();
}
const projectName = argv._[0];
if (!projectName) {
	console.log(chalk.red('Missing project name:\n'));
	console.log(`  react-library-boilerplate ${chalk.blue('<project-name>')}`);
	process.exit();
}
const projectPath = `${directory.getPathToCurrent()}/${projectName}`;
console.log(`Creating new React library in ${chalk.blue(`${projectPath}`)}\n`);

// check whether project directory already exists
const spinnerDir = new Ora().start('Creating project directory...');
if (directory.exists(projectPath)) {
	// exit if directory exists and contains files
	if (!directory.isEmpty(projectPath)) {
		spinnerDir.fail(chalk.red(`Project directory "${projectName}" already exists!`));
		process.exit();
	}
}
else {
	// create directory
	directory.create(projectPath);
}
spinnerDir.succeed('Created project directory');

// copy boilerplate files to project directory
const spinnerBoilerplate = new Ora().start('Copying files to project directory...');
files.copyBoilerplateFiles(projectPath);
spinnerBoilerplate.succeed('Copied files to project directory');

// initialize Git repository
const spinnerGit = new Ora().start('Initializing Git repository...');
git.init(projectPath);
spinnerGit.succeed('Initialized Git repository');

// install NPM packages
const spinnerNPM = new Ora().start('Installing NPM dependencies (this might take a while)...');
npm.setProjectName(projectPath, projectName); // change project name in package.json
npm.installDependencies(projectPath, (err, stdout, stderr) => {
	if (err) {
		spinnerNPM.fail(chalk.red('Failed to install NPM dependencies'));
		console.log(chalk.red(err));
	}
	else {
		if (debug) {
			console.log(chalk.gray(stdout));
			console.log(chalk.red(stderr));
		}
		spinnerNPM.succeed('Installed NPM dependencies');
		cli.displaySuccessInfo(projectName);
	}
});
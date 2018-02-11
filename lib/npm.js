const { exec } = require('child_process');
const fs = require('fs');


module.exports = {
	/**
	 * NPM install
	 */
	installDependencies: (projectPath, callback) => {
		// execute 'npm install' and do not print stdout
		exec(
			`cd ${projectPath}; npm install`,
			{ stdio: ['pipe', 'pipe', 'ignore'] },
			(err, stdout, stderr) => {
				if (err) {
					throw err;
				}
				else {
					callback(err, stdout, stderr);
				}
			}
		);
	},

	/**
	 * Set the project name in the package.json and package-lock.json files
	 */
	setProjectName: (projectPath, projectName) => {
		// rename files: package-default.json to package.json, and package-lock-default.json to
		// package-lock.json
		fs.renameSync(`${projectPath}/package-default.json`, `${projectPath}/package.json`);
		fs.renameSync(`${projectPath}/package-lock-default.json`, `${projectPath}/package-lock.json`);

		// set project names
		const rename = (fileName) => {
			const file = fs.readFileSync(`${projectPath}/${fileName}`);
			const content = JSON.parse(file);
			content.name = projectName;
			fs.writeFileSync(`${projectPath}/${fileName}`, JSON.stringify(content, null, '\t'));
		};
		rename('package.json');
		rename('package-lock.json');
	}
};
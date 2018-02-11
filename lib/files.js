const fse = require('fs-extra');
const path = require('path');


module.exports = {
	/**
	 * Copy all files from the boilerplate folder to the specified directory
	 */
	copyBoilerplateFiles: (projectPath) => {
		const boilerplatePath = path.join(__dirname, '../boilerplate');
		fse.copySync(
			boilerplatePath, // source
			projectPath, // destination
			{
				filter: filePath => (
					!filePath.startsWith(`${boilerplatePath}/lib`) &&
					!filePath.startsWith(`${boilerplatePath}/node_modules`)
				)
			}
		);
	}
};
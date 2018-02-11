const { execSync } = require('child_process');


module.exports = {
	/**
	 * Initialize Git repository
	 */
	init: (projectPath) => {
		// execute 'git init' and do not print stdout
		execSync(`cd ${projectPath}; git init`, { stdio: ['pipe', 'pipe', 'ignore'] });
	}
};
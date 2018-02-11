const fs = require('fs');


module.exports = {
	/**
	 * Create directory at the specified path
 	 */
	create: (dirPath) => {
		fs.mkdirSync(dirPath);
	},

	/**
	 * Check whether the directory with the specified path exists
	 */
	exists: (dirPath) => {
		try {
			return fs.statSync(dirPath).isDirectory();
		}
		catch (err) {
			return false;
		}
	},

	/**
	 * Get path of the current Terminal session
	 */
	getPathToCurrent: () => process.cwd(),

	/**
	 * Check whether the specified directory is empty (OS directory files are ignored)
	 */
	isEmpty: (dirPath) => {
		try {
			const files = fs.readdirSync(dirPath);
			if (files.length) {
				// ignore OS directory files
				return files.length === 1 && (files[0] === '.DS_Store' || files[0] === 'Thumbs.db');
			}
			else {
				return true;
			}
		}
		catch (err) {
			return false;
		}
	}
};
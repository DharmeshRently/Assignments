const { execFile } = require('child_process');

const child = execFile('cat', ['file.txt'],
	(error, stdout, stderr) => {
		if (error) {
			throw error;
		}
		console.log(stdout);
	});

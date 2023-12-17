const fs = require('fs');

function getFileLines(filePath) {

	return fs.readFileSync(filePath)
		.toString('utf-8')
		.replace(/ /g, '')
		.split('\n');
}

function getFileColumns(filePath) {

	let cols = {
		opponent: [],
		me: []
	};

	const lines = fs.readFileSync(filePath)
		.toString('utf-8')
		.replace(/ /g, '')
		.split('\n');

	for (const line of lines) {
		cols.opponent.push(line[0]);
		cols.me.push(line[1]);
	}

	return cols;
}

module.exports = {
	getFileLines,
	getFileColumns
};
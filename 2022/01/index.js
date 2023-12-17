const { getFileLines } = require('../utils.js');

function start(inputPath) {
	const fileLines = getFileLines(inputPath);

	console.log(fileLines);
	console.log(`\nlunghezza: ${fileLines.length}\n`);

	let elfsCalories = [];
	let payload = 0;

	for (const calories of fileLines) {

		const endElf = calories.length === 0 || fileLines.indexOf(calories) === fileLines.length - 1;

		if (endElf) {
			elfsCalories.push(payload);
			payload = 0;
		} else {
			payload += Number(calories);
		}
	}

	elfsCalories.sort((a, b) => b - a);

	console.log(elfsCalories.slice(0, 3).reduce((acc, value) => acc + value));
	console.log('\n');
}

start('input.txt');
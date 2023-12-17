const { getFileColumns } = require('../utils.js');

function start(inputPath) {
	const plays = getFileColumns(inputPath);

	console.log(plays);


	let res = 0;

	for (let i = 0; i < plays.me.length; i++) {

		/*
			rock:				A1
			paper: 			B2
			scissors: 	C3

			lose: 			X
			draw:				Y
			win					Z
		*/

		if (plays.opponent[i] === "A") {
			// Rock
			switch (plays.me[i]) {
				case "X":
					res += 3 + 0;
					continue;
				case "Y":
					res += 1 + 3;
					continue;
				default:
					res += 2 + 6;
			}
		} else if (plays.opponent[i] === "B") {
			// Paper
			switch (plays.me[i]) {
				case "X":
					res += 1 + 0;
					continue;
				case "Y":
					res += 2 + 3;
					continue;
				default:
					res += 3 + 6;
			}
		} else {
			// Scissors
			switch (plays.me[i]) {
				case "X":
					res += 2 + 0;
					continue;
				case "Y":
					res += 3 + 3;
					continue;
				default:
					res += 1 + 6;
			}

		}
	}

	console.log("\n", res, "\n");
}

start('input.txt');
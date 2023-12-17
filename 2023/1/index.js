const { log, getFileLines } = require("../utils.js");

function start() {

	const lines = getFileLines("./input.txt");

	// 1.1
	let sum = 0;
	for (const line of lines) {
		let a = Array.from(line).find(item => Number.isInteger(Number(item)));
		let b = Array.from(line).reverse().find(item => Number.isInteger(Number(item)));

		sum += Number(`${a}${b}`);
	}

	log("\n# 1.1", sum);

	// 1.2
	sum = 0;
	const digitWords = {
		"one": 1,
		"two": 2,
		"three": 3,
		"four": 4,
		"five": 5,
		"six": 6,
		"seven": 7,
		"eight": 8,
		"nine": 9,
	};

	let keys = Object.keys(digitWords);

	let valuesArray = [];

	for (let k = 0; k < lines.length; k++) {
		valuesArray.push([]);
		for (let i = 0; i < keys.length; i++) {
			const element = digitWords[keys[i]];
			if (lines[k].includes(keys[i])) {
				valuesArray[k].push(element);
			}
		}
	}

	for (const arr of valuesArray) {
		if (!!arr.length) {
			log(arr, `${arr[0]}${arr[arr.length - 1]}`);
			sum += Number(`${arr[0]}${arr[arr.length - 1]}`);
		}
	}
	log("\n# 1.2", sum);
}

start();
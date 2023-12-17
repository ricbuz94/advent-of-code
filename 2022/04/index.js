const { getFileLines } = require("../utils");

function range(start, stop) {
  return Array.from({ length: (stop - start) + 1 }, (_, i) => start + i);
}

function start(filePath) {

  let res = 0;
  const lines = getFileLines(filePath);

  for (const line of lines) {

    let pairs = line.split(',');

    const firstRange = pairs[0].split('-').map(Number);
    const secondRange = pairs[1].split('-').map(Number);

    console.log(firstRange);
    console.log(secondRange);

    const range1 = range(firstRange[0], firstRange[1]);
    const range2 = range(secondRange[0], secondRange[1]);

    console.log("first  : %s", range1);
    console.log("second : %s", range2);

    const isContained = range1.some(elem => range2.includes(elem)) || range2.some(elem => range1.includes(elem));

    if (isContained) {
      res++;
    }
    console.log("\noverlaps: %s", isContained);
    console.log("\n###\n");
  }

  console.log("res: %d\n", res);
}

start('input.txt');
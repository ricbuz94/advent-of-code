const { getFileLines } = require("../utils");

function start(filePath) {
  const lines = getFileLines(filePath);
  const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let res = 0;
  for (let i = 0; i < lines.length; i += 3) {
    const group = [lines[i], lines[i + 1], lines[i + 2]];

    console.log("\ngroup: %s", group)
    console.log('------------------')

    for (const char of group[0]) {
      if (group[1].includes(char) && group[2].includes(char)) {
        console.log('match: %s, index: %d', char, priorities.match(char).index + 1)
        console.log('------------------\n')
        res += priorities.match(char).index + 1;
        break;
      }
    }
  }

  console.log(res, '\n');
}

start('input.txt');
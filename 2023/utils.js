const { readFileSync } = require("fs");

function log() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

function getFileLines(file) {
  return readFileSync(file, { encoding: "utf-8" }).split("\n");
}

module.exports = {
  log,
  getFileLines
}
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

readFile('file.txt', 'utf8')
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

console.log(readFile)

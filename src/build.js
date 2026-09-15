const fs = require('fs');
const { sum } = require('./sum.js');
fs.writeFileSync('dist.txt', `result=${sum(20, 22)}\n`);
console.log('built dist.txt');

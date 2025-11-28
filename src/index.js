const fs = require('fs');

const path = process.argv;
const link = path[2];

console.log(`Reading file from path: ${link}`);

fs.readFile(link, 'utf-8', (err, data) => {
    console.log(data);
});
const fs = require('fs');

const path = process.argv;
const link = path[2];

console.log(`Reading file from path: ${link}`);

fs.readFile(link, 'utf-8', (err, data) => {
    verifyDoubledWords(data);
});

/*
    - Create a word arrays [X]
    - Count the repeated words []
    - Create a object with the result []

    {
        "web": 5,
        "development": 3
    }
*/

function verifyDoubledWords(data) {
    const wordArrays = data.split(' ');
    const result = {};

    wordArrays.forEach(word => {
        result[word] = (result[word] || 0) + 1;
    });

    console.log(result);
}
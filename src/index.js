const fs = require('fs');

const path = process.argv;
const link = path[2];

console.log(`Reading file from path: ${link}`);

fs.readFile(link, 'utf-8', (err, data) => {
    breakByParagraphs(data);
    // verifyDoubledWords(data);
});

/*
    - Create a word arrays [X]
    - Count the repeated words [X]
    - Create a object with the result [X]
    - Make a function to count by paragraphs [X]
    - Remove case sensitivity [X]
    - Remove special characters [X]
    - Ignore words with less than 3 characters [X]
    - Ignore empty lines/string []
    - Print the result [X]

    {
        "web": 5,
        "development": 3
    }
*/

function breakByParagraphs(data) {
    const paragraphs = data.toLowerCase().split('\n'); // Split by new line and ignore case
    const count = paragraphs
    .filter((p) => p)
    .map(p => { return verifyDoubledWords(p); });
    console.log(count);
}

function removeSpecialCharacters(word) {
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function verifyDoubledWords(data) {
    const wordArrays = data.split(' ');
    const result = {};

    wordArrays.forEach(word => {
        if (word.length >= 3){
            word = removeSpecialCharacters(word);
            result[word] = (result[word] || 0) + 1;
        }
    });

    return result;
}
const fs = require('fs');

const path = process.argv;
const link = path[2];

console.log(`Reading file from path: ${link}`);

fs.readFile(link, 'utf-8', (err, data) => {
    if (err) {
        console.error(`Error reading file from path: ${link}`, err.code);
        return;
    }
    countWords(data);
});

function countWords(data) {
    const paragraphs = receiveParagraphs(data);

    const count = paragraphs
    .flatMap(p => {
        if (!p) return [];
        return verifyDoubledWords(p)
    });
    console.log(count);
}

function receiveParagraphs(data) {
    return paragraphs = data.toLowerCase().split('\n'); // Split by new line and ignore case
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
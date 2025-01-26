const readlineSync = require('readline-sync');
const { textToMorse, morseToText } = require('./morseConverter');

function main() {
    console.log('Morse Code Converter');
    console.log('1. Text to Morse Code');
    console.log('2. Morse Code to Text');
    
    const choice = readlineSync.question('Choose an option (1 or 2): ');
    
    if (choice === '1') {
        const text = readlineSync.question('Enter text to convert: ').toUpperCase();
        const morse = textToMorse(text);
        console.log('Morse Code:', morse);
    } else if (choice === '2') {
        console.log('Note: Separate letters with spaces and words with "/"');
        const morse = readlineSync.question('Enter Morse code to convert: ');
        const text = morseToText(morse);
        console.log('Text:', text);
    } else {
        console.log('Invalid option');
    }
}

main(); 
const MORSE_CODE = {
    'A': '.-',    'B': '-...',  'C': '-.-.', 'D': '-..',
    'E': '.',     'F': '..-.',  'G': '--.',  'H': '....',
    'I': '..',    'J': '.---',  'K': '-.-',  'L': '.-..',
    'M': '--',    'N': '-.',    'O': '---',  'P': '.--.',
    'Q': '--.-',  'R': '.-.',   'S': '...',  'T': '-',
    'U': '..-',   'V': '...-',  'W': '.--',  'X': '-..-',
    'Y': '-.--',  'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.',
    '.': '.-.-.-', ',': '--..--', '?': '..--..', '!': '-.-.--',
    ' ': '/'
};

// Create reverse mapping for morse to text conversion
const REVERSE_MORSE = Object.entries(MORSE_CODE).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});

function textToMorse(text) {
    return text
        .toUpperCase()
        .split('')
        .map(char => MORSE_CODE[char] || char)
        .join(' ')
        .trim();
}

function morseToText(morse) {
    return morse
        .split(' ')
        .map(code => REVERSE_MORSE[code] || code)
        .join('')
        .trim();
}

module.exports = {
    textToMorse,
    morseToText
}; 
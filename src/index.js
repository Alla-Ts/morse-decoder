const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let char = expr.match(/.{1,10}/g);
    let result = '';
    for (let i = 0; i < char.length; i++) {
        if (char[i] === '**********') {
            result += ' ';
        } else {
            let symbol = char[i].match(/.{1,2}/g);
            let morseSymbol = '';
            for (let j = 0; j < symbol.length; j++) {
                if (symbol[j] === '10') {
                    morseSymbol += '.';
                } else if (symbol[j] === '11') {
                    morseSymbol += '-';
                }
            }
            for (const key in MORSE_TABLE) {
                if (morseSymbol === key) {
                    result += MORSE_TABLE[key];
                }
            }
        }
    }
    return result;
}
// morseCode = expr.split("   "); // get single words
// let result = '';

// // for (let i = 0; i < expr.length; i++) {
// for (var i = 0; i < morseCode.length; i++) {
//     morseCode[i] = morseCode[i].split(''); // get single characters

//     for (let a = 0; a < morseCode[i].length; a++) {
//         if (morseCode[i][a] != '') {
//             result += MORSE_TABLE[morseCode[i][a]];
//         }
//     }

//     if (i < (morseCode.length - 1)) { // add space after words
//         result += '';
//     }

// }
// for (let n = 0; n < result.length; n++) {
//     if (result[n] === '.') {
//         result[n] = '10';
//     } else if (result[n] === '-') {
//         result[n] = '11';
//     }
// }

// return result.trim();
// }


// }

module.exports = {
    decode
}
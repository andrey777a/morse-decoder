const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    for (let i = 0; i < expr.length/10; i++) {
        arr.push(expr.slice(i*10, (i+1)*10));
    }
    arr = arr.map((item) => {
        let str = '';
        for (let i = 0; i < item.length/2; i++) {
            if (item.slice(i*2, (i+1)*2) === '10') str += '.'
            else if (item.slice(i*2, (i+1)*2) === '11') str += '-'
            else if (item.slice(i*2, (i+1)*2) === '**') {
                str += ' ';
                break;
            }
        }
        return str;
    })
    let result = '';
    arr.forEach((item) => {
        if (item === ' ') result += ' ';
        else result += MORSE_TABLE[item];
    })
    return result;
}

module.exports = {
    decode
}
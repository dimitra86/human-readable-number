module.exports = function toReadable(number) {
    var words = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'one hundred',
        200: 'two hundred',
        300: 'three hundred',
        400: 'four hundred',
        500: 'five hundred',
        600: 'six hundred',
        700: 'seven hundred',
        800: 'eight hundred',
        900: 'nine hundred',
    }
    if (number < 20) {
        return words[number];
    } else if (number > 19 && number < 100) {
        if (number % 10 == 0) { return words[number]; } else if (number % 10 > 0) {
            let one = number % 10;
            let ten = number - one;
            return words[ten] + ' ' + words[one];

        }
    } else if (number > 99) {
        if (number % 100 == 0) { return words[number]; } else if (number % 100 < 20) {
            let x = number % 100;
            let hundred = number - x;
            return words[hundred] + ' ' + words[x];
        } else if (number % 100 > 19 && number % 100 < 100) {
            let x = number % 100;
            let hundred = number - x;
            if (x % 10 == 0) { return words[hundred] + ' ' + words[x]; } else if (x % 10 > 0) {

                let one = x % 10;
                let ten = x - one;
                return words[hundred] + ' ' + words[ten] + ' ' + words[one];
            }
        }
    }
}

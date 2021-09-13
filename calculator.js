function romanToArabic(roman) {
    if (roman == null)
        return -1;
    var totalValue = 0,
        value = 0,
        prev = 0;

    if (/IIII|XXX|CCC|MMM|VV|LL|DD|[^IVXLCDM]|II[LCDMXV]/.test(roman))
        return -1;

    for (var i = 0; i < roman.length; i++) {
        var current = char_to_int(roman.charAt(i));
        if (current > prev) {
            totalValue -= 2 * value;
        }
        if (current !== prev) {
            value = 0;
        }
        value += current;
        totalValue += current;
        prev = current;
    }
    return totalValue;
}

function char_to_int(character) {
    switch (character) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return -1;
    }
}

function arabicToRoman(arabic) {
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    var str = '';

    for (var i of Object.keys(roman)) {
        var q = Math.floor(arabic / roman[i]);
        arabic -= q * roman[i];
        str += i.repeat(q);
    }

    return str;
}
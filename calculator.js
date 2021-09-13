// If one of arguments is not valid, there is no point in proceed to calculations
function areValid(a, b) {
  for (const arg of arguments) {
    // Check if arg is a valid number
    if (isNaN(arg)) {
      // We know that arg is not a number, now check if it is a valid romanian number
      const res = romanToArabic(arg.toUpperCase());
      if (res.error) {
        return false;
      } else {
        continue;
      }
    } else {
      continue;
    }
  }
  return true;
}

// Check if numbers are roman type
function areRoman(a, b) {
  if (isNaN(a) && isNaN(b)) {
    if (!romanToArabic(a).error && !romanToArabic(b).error) {
      return true;
    }
  }
  return false;
}

function areNumeric(a, b) {
  return !isNaN(a) && !isNaN(b);
}

// Ensure that any of numbers are float
function areDouble(a, b) {
  if (areNumeric(a, b)) {
    return a.includes(".") || b.includes(".");
  }
}

// Main sum function
function sum(a, b) {
  // Check if inputs are similar type (ROMAN with ROMAN or NUMBER with NUMBER)
  if ((isNaN(a) && !isNaN(b)) || (!isNaN(a) && isNaN(b)))
    return { error: "Both numbers should be similar type" };

  // Check if inputs are valid
  if (!areValid(a, b)) return { error: "Invalid input" };

  // Check if inputs are roman numbers
  if (areRoman(a.toUpperCase(), b.toUpperCase())) {
    try {
      // Convert roman numbers to arabic
      a = romanToArabic(a.toUpperCase());
      b = romanToArabic(b.toUpperCase());

      // Count answer, and convert in back to roman
      const answer = arabicToRoman(a + b);
      if (answer) return { answer: answer };
    } catch (err) {
      return err;
    }
  }

  // If numbers are numberic
  if (areNumeric(a, b)) {
    // First, we check if they are floats
    if (areDouble(a, b)) {
      return { answer: (parseFloat(a) + parseFloat(b)).toFixed(1) };
    } else {
      // If inputs are not floats, then we create BigInts
      let bigA, bigB;
      try {
        bigA = BigInt(a);
        bigB = BigInt(b);
        // Return Big Int
        return { answer: bigA + bigB };
      } catch (err) {
        return { error: "Invalid input" };
      }
    }
  }
  // In case we didn`t match any circumstances
  return { error: "Invalid input" };
}

// Convert roman number to arabic
function romanToArabic(roman) {
  if (roman == null || !isNaN(roman))
    return { error: `Invalid input (roman (${roman}) is null or a number)` };

  var totalValue = 0,
    value = 0,
    prev = 0;

  if (
    /[IVXL][M]|[IVX][D]|[IV][C]|[I][L]/.test(roman) ||
    /IIII|XXXX|CCCC|MMMM|VV|LL|DD|[^IVXLCDM]|II[LCDMXV]/.test(roman)
  ) {
    return { error: "Invalid input" };
  }

  try {
    for (var i = 0; i < roman.length; i++) {
      var current = char_to_int(roman.charAt(i));
      if (current === -1) {
        throw { error: "Invalid input" };
      }
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
  } catch (err) {
    return err;
  }

  return totalValue;
}

function char_to_int(character) {
  switch (character) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
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
    I: 1,
  };
  var str = "";

  for (var i of Object.keys(roman)) {
    var q = Math.floor(arabic / roman[i]);
    arabic -= q * roman[i];
    str += i.repeat(q);
  }

  if (!str) {
    throw { error: "Invalid input" };
  }

  return str;
}

module.exports = { sum };

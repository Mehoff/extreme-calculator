function sum(a, b) {
  let result;
  let isAnswerInRoman = false;

  if (!a || !b) return { error: "Invalid input" };

  if (isNaN(a) || isNaN(b)) {
    // One of inputs is not a number, so it can be roman
    isAnswerInRoman = true;
    const arabicA = romanToArabic(a);
    const arabicB = romanToArabic(b);

    if (arabicA.error || arabicB.error) {
      return {
        error: "Invalid input",
      };
    }

    result = arabicA + arabicB;
  }

  if (isAnswerInRoman) {
    // Convert answer to roman before return
    result = arabicToRoman(result);
  }

  return {
    answer: result,
  };
}

function romanToArabic(roman) {
  if (roman == null || !isNaN(roman)) return { error: "Invalid input" };

  var totalValue = 0,
    value = 0,
    prev = 0;

  if (/IIII|XXX|CCC|MMM|VV|LL|DD|[^IVXLCDM]|II[LCDMXV]/.test(roman))
    return {
      error: "Input value was not a roman number",
    };

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

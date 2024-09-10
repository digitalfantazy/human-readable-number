module.exports = function toReadable(number) {
    const ones = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    const tens = {
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    if (number === 0) return "zero";

    function belowHundred(n) {
        if (n < 20) return ones[n];
        const tensPart = tens[Math.floor(n / 10)];
        const onesPart = ones[n % 10] === "zero" ? "" : ones[n % 10];
        return tensPart + (onesPart ? " " + onesPart : "");
    }

    function belowThousand(n) {
        if (n < 100) return belowHundred(n);
        const hundredsPart = ones[Math.floor(n / 100)] + " hundred";
        const belowHundredPart = n % 100 === 0 ? "" : belowHundred(n % 100);
        return hundredsPart + (belowHundredPart ? " " + belowHundredPart : "");
    }

    return belowThousand(number);
};

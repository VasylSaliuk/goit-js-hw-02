function checkForSpam (str) {
    const allStr = str.toLowerCase();
    const findWords = allStr.includes('sale') || allStr.includes('spam');
    return findWords;
}


console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?'));
const getMaxDigit = Number => Math.max(...(String(number).split('')))
console.log(getMaxDigit(3709))
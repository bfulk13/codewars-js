// Given a number, write a function to output its
// reverse digits. (e.g. given 123 the answer is 321)
//
// Numbers should preserve their sign; i.e. a negative
// number should still be negative when reversed.
//
//     Examples
// 123 ->  321
// -456 -> -654
// 1000 ->    1

// fn(num) => num
// convert the num to a string and split into array
// reverse the array and join back together
// convert back to a number and return

function reverseNumber(n){
    let reversed = Math.abs(n).toString().split('').reverse().join('');
    return n < 0 ? Number('-' + reversed) : Number(reversed);
}

// voted best practice
// function reverseNumber(n) {
//   let isNegative = n < 0;
//   let reverseAsString = Math.abs(n).toString().split('').reverse().join('');
//   let result = Number(reverseAsString);
//
//   return isNegative ? -result : result;
// }

module.exports = reverseNumber;
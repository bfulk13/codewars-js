// Task:
//     Given a list of numbers, determine whether the sum of its elements is odd or even.
//
//     Give your answer as a string matching "odd" or "even".
//
//     If the input array is empty consider it as: [0] (array with a zero).
//
// Example:
//     odd_or_even([0])          ==  "even"
// odd_or_even([0, 1, 4])    ==  "odd"
// odd_or_even([0, -1, -5])  ==  "even"
// Have fun!

function oddOrEven(arr){
    if(!arr.length) return 'even';
    let sum = arr.reduce( (acc, cur) => acc + cur );
    return sum % 2 === 0 ? 'even' : 'odd'
}

// refactor
// const oddOrEven = arr => arr.reduce( (a,c) => a+c, 0 ) % 2 ? 'odd' : 'even';

module.exports = oddOrEven;
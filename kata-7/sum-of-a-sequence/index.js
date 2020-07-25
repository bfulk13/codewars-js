// Your task is to make function, which returns the sum of a sequence of integers.
//
//     The sequence is defined by 3 non-negative values: begin, end, step.
//
//     If begin value is greater than the end, function should returns 0
//
// Examples
//
// sequenceSum(2,2,2) === 2
// sequenceSum(2,6,2) === 12 // 2 + 4 + 6
// sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
// sequenceSum(1,5,3) === 5 // 1 + 4

    // initialize a sum variable
    // iterate up to end num starting at begin num and incrementing by step
        // add i to sum
    // return sum

const sequenceSum = (begin, end, step) => {
    let sum = 0;
    for (let i = begin; i <= end; i+=step){
        sum += i;
    }
    return sum;
};

// refactor using recursion
// const sequenceSum = (begin, end, step) => {
//   if (begin > end) {
//     return 0;
//   }
//   return begin + sequenceSum(begin + step, end, step);
// };

module.exports = sequenceSum;
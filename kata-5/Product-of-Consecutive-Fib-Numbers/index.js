// The Fibonacci numbers are the numbers in the following integer sequence (Fn):

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such as

// F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

// F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:

// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// depending on the language if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(m) verifying F(m) * F(m+1) = prodyou will return

// [F(m), F(m+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// F(m) being the smallest one such as F(m) * F(m+1) > prod.

// Examples
// productFib(714) # should return [21, 34, true], 
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// productFib(800) # should return [34, 55, false], 
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// Notes: Not useful here but we can tell how to choose the number n up to which to go: we can use the "golden ratio" phi which is (1 + sqrt(5))/2 knowing that F(n) is asymptotic to: phi^n / sqrt(5). That gives a possible upper bound to n.

// You can see examples in "Example test".

// References
// http://en.wikipedia.org/wiki/Fibonacci_number

// http://oeis.org/A000045

// declare variables equal to 0 and equal to 1
// while var1 times var2 is less than prod
    // reassign var2 value to var1 + var2
    // reassign var1 value to var2 - var1
// return an array containing var1, var2, and a boolean testing if var1*var2 equals prod

function productFib(prod){
    let n = 0;
    let nPlus = 1;
    while(n*nPlus < prod){
        nPlus = n + nPlus;
        n = nPlus - n;
    }
    return [n, nPlus, n*nPlus === prod];
}

// refactor
// function productFib(prod){
//     let [a, b] = [0, 1];
//     while(a * b < prod) [a, b] = [b, a + b];
//     return [a, b, a * b === prod];
// }

module.exports = productFib;
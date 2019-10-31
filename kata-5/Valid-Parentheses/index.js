// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100


function validParentheses(parens){
    while(parens.includes("()")){
        parens = parens.replace("()", "");
    }
    return parens.length === 0;
}

// regex solution
// function validParentheses(parens){
//     let re = /\(\)/g;
//     return re.test(parens) ? validParentheses(parens.replace(re, '')) : '' === parens;
// }

module.exports = validParentheses;
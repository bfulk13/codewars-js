// Is the string uppercase?
//     Task
//     Add the isUpperCase method to String to see whether
// the string is ALL CAPS. For example:
//
//     "c".isUpperCase() == false
// "C".isUpperCase() == true
// "hello I AM DONALD".isUpperCase() == false
// "HELLO I AM DONALD".isUpperCase() == true
// "ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
// "ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true

// fn(str) => boolean

String.prototype.isUpperCase = function() {
  return this == this.toUpperCase();
};

// use triple equals wherever possible
// String.prototype.isUpperCase = function() {
//   return this.toUpperCase() === this.toString();
// }

module.exports = String;
// Kata Task
// I have a cat and a dog.
//
//     I got them at the same time as kitten/puppy. That was humanYears years ago.
//
//     Return their respective ages now as [humanYears,catYears,dogYears]
//
// NOTES:
//
//     humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
// References
//
// http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
//     http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html



const humanYearsCatYearsDogYears = (humanYears) => {
    if(humanYears === 1) return [1, 15, 15];
    if(humanYears === 2) return [2, 24, 24];
    let cat = 24, dog = 24;
    for(let i = 3; i <= humanYears; i++){
        cat += 4;
        dog += 5;
    }
    return [humanYears, cat, dog];
};

// best practice
// var humanYearsCatYearsDogYears = function(y) {
//   if (y == 1) return [1, 15, 15]
//   if (y == 2) return [2, 24, 24]
//   return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
// }

// switch case solution
// function humanYearsCatYearsDogYears(humanYears) {
//   switch (humanYears) {
//     case 1:
//       return [1, 15, 15]
//     case 2:
//       return [2, 24, 24];
//     default:
//       return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24 ];
//   }
//
// }

module.exports = humanYearsCatYearsDogYears;
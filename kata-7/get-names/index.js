// The following code is not giving the expected results.
//     Can you figure out what the issue is?
//
//     The following is an example of data that would
// be passed in to the function.
//
// var data = [
//     {name: 'Joe', age: 20},
//     {name: 'Bill', age: 30},
//     {name: 'Kate', age: 23}
// ]
//
// getNames(data) // should return ['Joe', 'Bill', 'Kate']

// fn(array) => array
// iterate array
// push the obj.name into an array
// return array

function getNames(data){
    let arr = [];
    data.map(item => arr.push(item.name));
    return arr;
}

module.exports = getNames;
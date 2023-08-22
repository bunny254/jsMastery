/* Delete elements using Array's splice() method
Syntax:
    Array.splice(position, num);
*/

let scores = [1, 2, 3, 4, 5];

let deletedScores = scores.splice(0, 3);

console.log(deletedScores);
console.log(scores);


//Add or insert elements using splice method
let colors = ['red', 'green', 'blue'];
colors.splice(2, 0, "pink");

console.log(colors);

//Replace elements using splice method
let languages =["C++","javascript", "php", "C#"]
languages.splice(1,1, 'Python')

console.log(languages);
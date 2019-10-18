//Practice Exercises
//Exercise 1 - Branching
// let choice = prompt('Enter a, b or c');

// if(choice === "a"){
//   console.log("a is for apple")
// } else if (choice === "b"){
//   console.log("b is for banana")
// } else if (choice === "c"){
//   console.log("c is for cantaloupe")
// } else {
//   console.log("you're a rebel")
// }
//Exercise 2 - Looping (do...while)
//  let fruit = prompt('Enter a, b or c');
// do {
//   if(fruit === "a"){
//   console.log("a is for apple")
//   } else if (fruit === "b"){
//   console.log("b is for banana")
//   } else if (fruit === "c"){
//   console.log("c is for cantaloupe")
//   } else {
//   console.log("you're a rebel")
//   }
//   fruit = prompt('Enter a, b or c');
// }
// while (fruit !== "no more fruit"){
//}

//second try (for loop)
// for (let fruit1 = prompt("Enter a, b or c (enter \"no more fruit\" to exit:");fruit1 !== "no more fruit"; fruit1 = prompt("Enter a, b or c (enter \"no more fruit\" to exit:")){
//     if(fruit1 === "a"){
//   console.log("a is for apple")
//   } else if (fruit1 === "b"){
//   console.log("b is for banana")
//   } else if (fruit1 === "c"){
//   console.log("c is for cantaloupe")
//   } else {
//   console.log("you're a rebel")
//   }
// }
//third try (while)
// let fruit2 = prompt("Enter a, b or c (enter \"no more fruit\" to exit:")
// while(fruit2 !== "no more fruit"){
//   if(fruit2 === "a"){
//   console.log("a is for apple")
//   } else if (fruit2 === "b"){
//   console.log("b is for banana")
//   } else if (fruit2 === "c"){
//   console.log("c is for cantaloupe")
//   } else {
//   console.log("you're a rebel")
//   }
//   fruit2 = prompt("Enter a, b or c (enter \"no more fruit\" to exit:")
// }
//try four (with switch)
let fruit3 = prompt("Enter a, b or c (enter \"no more fruit\" to exit:")
while(fruit3 !== "no more fruit"){
  switch(fruit3){
    case "a": console.log("a is for apple");
    break;
    case "b": console.log("b is for banana");
    break;
    case "c": console.log("c is for cantaloupe");
    break;
    default: console.log("you're a rebel");
  }
  fruit3 = prompt("Enter a, b or c (enter \"no more fruit\" to exit:")
}
//Exercise 3 - Branching
// let score = parseFloat(prompt("Test score 2:"));
// if (score >= 90){
//   console.log("The score of " + score +" is the letter grade of A")
// } else if (score >= 80){
//   console.log("The score of " + score +" is the letter grade of B")
// } else if (score >= 70){
//   console.log("The score of " + score +" is the letter grade of C")
// } else if (score >= 60){
//   console.log("The score of " + score +" is the letter grade of D")
// } else {
//   console.log("The score of " + score +" is the letter grade of F")
// }
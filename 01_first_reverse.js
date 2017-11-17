// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.
// Use the Parameter Testing feature in the box below to test your code with different arguments.
function firstReverse(str){
  return str.split('').reverse().join('');
}


console.log(firstReverse('hello'));
console.log(firstReverse('bye'));

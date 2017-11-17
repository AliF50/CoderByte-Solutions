// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
// If there are two or more words that are the same length, return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty.

function longestWord(sen){
  sen = sen.split(' ');
  longestWordObj = {};
  var max = -Infinity;
  var word = '';
  for(var i = 0; i < sen.length; i++){
    if(sen[i].length > max){
      max = sen[i].length;
      word = sen[i];
    }
  }
  return word;
}

console.log(longestWord('hello we are going to the mall right now important'));
console.log(longestWord('we are the best players in the world!'));

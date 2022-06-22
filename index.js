const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const newTutorial = tutorials.map(function (elem){
    return newResult(elem);
  })
  return newTutorial
}
function newResult(str){
  let newStr =  str.split(" ");
  for(let i in newStr){
    newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
  }
  return newStr.join(" ");
}

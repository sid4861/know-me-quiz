var readLineSync = require("readline-sync");
const chalk = require('chalk');

var name = readLineSync.question("What's your name ? ");

console.log(chalk.blue("--------------------"));
console.log("Welcome " + name);
console.log(chalk.blue("--------------------"));
console.log("This is a quiz on how well do you know me");

var score = 0;

var questionArray= [{
  question: "Where was I born\na:Bhilwara \nb:Udaipur \nc:Mumbai \nd:Pune\n",
  answer: "a"
}, {
  question: "What is my favorite sport\na:Cricket \nb:Tennis \nc:table-tennis \nd:hockey\n",
  answer: "b"
}, {
  question: "Who is my favorite tennis player \na:Roger Federer \nb:Rafael Nadal \nc:Novak Djokovic \nd:Stanislas Wawrinka\n",
  answer: "a"
},
{
  question: "Which App do I use to listen to music \na:Saavn \nb:Gaana \nc:Spotify \nd:Youtube Music\n",
  answer: "c"
},
{
  question: "What's my instagram ID \na:sid4861 \nb:siddharthl \nc:sidl \nd:Siddharth4861\n",
  answer: "a"
}];

function play(question, answer){
  if(answer === question.answer){
    console.log(chalk.green("Right Answer!!!"));
    score = score+1;
  } else{
    console.log(chalk.red("Oops!!!!, the correct answer is "+question.answer));
  }
}

for(var i=0; i<questionArray.length; i++){
  console.log(chalk.blue("--------------------"));
  console.log("New Question");
  console.log(chalk.blue("--------------------"));
  
  console.log(questionArray[i].question);
  var userAnswer = readLineSync.question("Your choice - ");

  play(questionArray[i], userAnswer);
}


console.log("FINAL SCORE - " + chalk.green(score));
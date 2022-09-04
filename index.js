const{log}=console;
log('Student Grade Summary..................................');

  log('ENGLISH CLASS.............................');

var firstName = "John";

var lastName = "Doe";

var fullName = firstName + lastName;

log('01.FullName:'+(firstName + lastName));
log('Final Exam Grade:'+(88));


//Ave
const arr = [95,76,72,88];
var sum = 0;
for (var number of arr) {
    sum += number;
}
average = sum / arr.length;
log('Final Average:'+(average));


//Letter grade
let letterGrade = function(numberGrade) {
  let letter;
  if (numberGrade >= 90) {
    letter = 'A';
  } else if (numberGrade >= 80) {
    letter = 'B';
    return letter;
  } else if (numberGrade >= 70) {
    letter = 'C';
  } else if (numberGrade >= 60) {
    letter = 'D';
  } else {
    letter = 'F';
  }
  return letter;
};
//determine student grade percentage
let percentGrade = function(score, total) {
  return (percent = ((score / total) * 100).toFixed(2));
};


// determine final message
let gradeMessage = function(studentScore, totalScore = 100) {
  let percent = percentGrade(studentScore, totalScore);
  let letter = letterGrade(percent);
  return `Letter Grade : ${letter} `;
};



//English
let johnndone = gradeMessage(95,76,72,88);
let LiamNoah = gradeMessage(70,68,100,88);
//Scince
let OliverElijah = gradeMessage(95,88,90,75);
let WilliamJames = gradeMessage(70,78,50,68);
//Math
let LucasHenry = gradeMessage(45,58,63,78,33,77,68,29);
let Alexandercorn = gradeMessage(95,90,86,88,100,96,93,99);


// log grades to terminal
console.log(johnndone);


var firstName = "Liam";

var lastName = "Noah";

var fullName = firstName + lastName;


log('02.FullName:'+(firstName + lastName));
log('Final Exam Grade:'+(88));
//Ave
const arr1 = (30,68,100,88);
var sum = 0;
for (var number of arr) {
    sum += number;
}
average = sum / arr.length;
log('Final Average:'+(average));
console.log(LiamNoah);


log('Science CLASS.............................');

var firstName = "Oliver";

var lastName = "Elijah";

var fullName = firstName + lastName;


log('01.FullName:'+(firstName + lastName));
log('Final Exam Grade:'+(75));
//Ave
const arr2 = (95,88,90,75);
var sum = 0;
for (var number of arr) {
    sum += number;
}
average = sum / arr.length;
log('Final Average:'+(average));
console.log(OliverElijah);


var firstName = "William";

var lastName = "james";

var fullName = firstName + lastName;


log('02.FullName:'+(firstName + lastName));
log('Final Exam Grade:'+(68));
//Ave
const arr3 = (70,78,50,68);
var sum = 0;
for (var number of arr) {
    sum += number;
}
average = sum / arr.length;
log('Final Average:'+(average));
console.log(WilliamJames);


log('Math CLASS.................................');

var firstName = "Lucas";

var lastName = "Henry";

var fullName = firstName + lastName;


log('01.FullName:'+(firstName + lastName));
log('Final Exam Grade:'+(69));
//Ave
const arr4 = (45,58,63,78,33,77,68,69);
var sum = 0;
for (var number of arr) {
    sum += number;
}
average = sum / arr.length;
log('Final Average:'+(average));
console.log(LucasHenry);


var firstName = "Alexander";

var lastName = "corn";

var fullName = firstName + lastName;


log('02.FullName:'+(firstName + lastName));
log('Final marks:'+(99));
//Ave
const arr5 = (95,90,86,88,100,96,93,99);
var sum = 0;
for (var number of arr) {
    sum += number;
}
average = sum / arr.length;
log('Final Average:'+(average));
console.log(Alexandercorn);










var _ = require('lodash');

var student = {
  name: "Yunus",
  surname: "Eş",
  grades: [{
    lesson: "Math",
    grade: 100
  }, {
    lesson: "Beden",
    grade: 100
  }, {
    lesson: "Türkçe",
    grade: 40
  }]
};
student.name = "Ragıp";
student.grades.push({
  lesson: "Fizik",
  grade: 50
});

// let average = _.meanBy(student.grades, (currentLesson) => currentLesson.grade);
// console.log(average);


var isLightOpen = false;
if (isLightOpen) {
  isLightOpen = false;
} else {
  isLightOpen = true;
}

isLightOpen = isLightOpen ? false : true;

isLightOpen = true;
isLightOpen = !isLightOpen; //Tek satırda boolean çevirme

var isLogin = false;
var status = isLogin ? "admin": "guest";
console.log(status);

// console.log(isLightOpen);



// console.log(student.grades[0].grade);
// Aşağıdaki kod 10 defa tekrarlama yapar
// var total = 0;
// for (var currentLesson of student.grades) {
//   total += currentLesson.grade;
// }
// for (var i = 0; i < student.grades.length; i++) {
//   total += student.grades[i].grade;
// }


// console.log(total / student.grades.length);
// console.log(student.grades);
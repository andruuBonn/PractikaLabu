
var groupName = prompt("Введіть назву групи:");
var studentName = prompt("Введіть своє прізвище:");

try {
    if (!groupName || !studentName) {
        throw "Помилка: невірно введені дані!";
    }
} catch (error) {
    alert(error);
}


var questions = [
    { question: "HTML - це мова розмітки стилів?", answer: false },
    { question: "CSS відповідає за оформлення веб-сторінок?", answer: true },
    { question: "JavaScript - це технологія створення баз даних?", answer: false },
    { question: "HTML5 є останньою версією мови HTML?", answer: true }
];


function runTest() {
    var score = 0;

    for (var i = 0; i < questions.length; i++) {
        var answer = confirm(questions[i].question);
        if (answer === questions[i].answer) {
            score++;
        }
    }

    return score;
}


var result = runTest();
var message = "Результат тестування:\n" +
              "Студент: " + studentName + "\n" +
              "Група: " + groupName + "\n" +
              "Отримано балів: " + result + "\n" +
              "Оцінка: " + (result >= 3 ? "Задовільно" : "Незадовільно");

alert(message);

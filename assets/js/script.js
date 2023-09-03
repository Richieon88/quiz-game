//Question Bank
let question = {
    question: 'Capital of Ireland',
    choices: ['London', 'Dublin', 'Madrid', 'Paris'],
    correctAnwser: 1
};

//function for showing the question
function showQuestion(q) {
    let questionDiv = document.getElementById('question');
    questionDiv.textContent = q.question;

    let choices = document.querySelectorAll('.choices');
    choices.forEach(function (element, index) {
        element.textContent = q.choices[index];
        element.addEventListener('click', function () {
            if (q.correctAnwser === index) {
                alert('Correct');
            } else {
                alert('Wrong');
            }
        });
    });
}

showQuestion(question);
const quizData = [{
    question: 'What is capitol of Norway?',
    a: 'Vilingen',
    b: 'Nordkin',
    c: 'Oslo',
    d: 'Lillehammer',
    correct: 'c'
}, {
    question: 'What is capitol of Venezuela?',
    a: 'Bogota',
    b: 'Carracas',
    c: 'Santiage',
    d: 'Lima',
    correct: 'b'
}, {
    question: 'Tallina is a capitol of?',
    a: 'Latvia',
    b: 'Serbia',
    c: 'North Macedonia',
    d: 'Estonia',
    correct: 'd'
}];

const question = document.getElementById('question');
const aText = document.getElementById('aText');
const bText = document.getElementById('bText');
const cText = document.getElementById('cText');
const dText = document.getElementById('dText');
const submitBtn = document.getElementById('submit');

let currentQuestion = 0;
loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    question.innerHTML = currentQuizData.question;
    aText.innerHTML = currentQuizData.a;
    bText.innerHTML = currentQuizData.b;
    cText.innerHTML = currentQuizData.c;
    dText.innerHTML = currentQuizData.d;

    currentQuestion++;
}

submitBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        alert('You finished this quiz, your award is żeton na kielnie i beton');
    }

})

//58:07
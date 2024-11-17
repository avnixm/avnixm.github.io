const questions = [
    { question: 'What is the language used for styling web pages?', correctAnswer: 'css' },
    { question: 'What is the main function of a web server?', correctAnswer: 'hosting' },
    { question: 'What is the term for a website’s address on the internet?', correctAnswer: 'url' },
    { question: 'What is the language primarily used for client-side scripting?', correctAnswer: 'javascript' },
    { question: 'Who is the first ever programmer?', correctAnswer: 'ada lovelace' },
];


let currentQuestionIndex = 0;
let correctCount = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    const feedbackElement = document.getElementById('feedback');
    questionElement.textContent = questions[currentQuestionIndex].question;
    answerElement.value = '';
    feedbackElement.textContent = '';
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const feedbackElement = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        correctCount++;
        feedbackElement.textContent = 'Correct!';
        feedbackElement.style.color = 'green';
        setTimeout(nextQuestion, 1000); 
    } else {
        feedbackElement.textContent = 'Wrong! Try again.';
        feedbackElement.style.color = 'red';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        const resultElement = document.getElementById('result');
        if (correctCount === questions.length) {
            resultElement.textContent = 'All answers are correct!';
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = `You got ${correctCount} out of ${questions.length} correct.`;
            resultElement.style.color = 'red';
        }
    }
}

displayQuestion();    
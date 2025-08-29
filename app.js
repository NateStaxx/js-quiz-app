// Quiz data array
const quizData = [
    {
        question: "Which array method adds an element?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()"
    },
    {
        question: "Which keyword is used to declare a variable that cannot be reassigned?",
        options: ["const", "let", "var", "static"],
        answer: "const"
    },
    {
        question: "Which method is used to convert a JSON string into a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
        answer: "JSON.parse()"
    },
    {
        question: "Which operator is used for strict equality (checks value and type)?",
        options: ["==", "===", "=", "!="],
        answer: "==="
    },
    {
        question: "What does `typeof []` return in JavaScript?",
        options: ["array", "object", "list", "undefined"],
        answer: "object"
    },
    {
        question: "Which method removes the first element from an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "shift()"
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["Number", "Boolean", "Character", "String"],
        answer: "Character"
    },
    {
        question: "What will `console.log(2 + '2')` output?",
        options: ["4", "'22'", "NaN", "'4'"],
        answer: "'22'"
    },
    {
        question: "Which keyword is used to define a function in JavaScript?",
        options: ["func", "function", "define", "method"],
        answer: "function"
    },
    {
        question: "Which array method creates a new array with the results of calling a function on every element?",
        options: ["map()", "filter()", "forEach()", "reduce()"],
        answer: "map()"
    }
];

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const scoreText = document.getElementById('score');
const restartButton = document.getElementById('restart-button');
const quizContainer = document.getElementById('quiz-container');

let currentQuestionIndex = 0;
let score = 0;

// Display the current question
function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', selectAnswer);
        optionsContainer.appendChild(button);
    });
}

// Handle answer selection
function selectAnswer(e) {
    const selectedButton = e.target;
    const currentQuestion = quizData[currentQuestionIndex];

    // Check answer
    if (selectedButton.textContent === currentQuestion.answer) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('incorrect');
        // Highlight correct answer
        Array.from(optionsContainer.children).forEach(button => {
            if (button.textContent === currentQuestion.answer) {
                button.classList.add('correct');
            }
        });
    }

    // Disable all buttons after selection
    Array.from(optionsContainer.children).forEach(button => button.disabled = true);
}

// Move to next question
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showScore();
    }
});

// Show final score
function showScore() {
    quizContainer.classList.add('hidden');
    scoreContainer.classList.remove('hidden');
    scoreText.textContent = `You scored ${score} out of ${quizData.length}`;
}

// Restart quiz
restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    scoreContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    showQuestion();
});

// Initialize quiz
showQuestion();

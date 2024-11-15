
const answers = document.querySelectorAll('.answer');
const dropzones = document.querySelectorAll('.taro');
answers.forEach(answer => {
    answer.addEventListener('dragstart', dragStart);
});


dropzones.forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('drop', dropAnswer);
});


function dragStart(e) {
    e.dataTransfer.setData('text', e.target.id);
    e.target.classList.add('dragging');
}


function dragOver(e) {
    e.preventDefault();
}


function dropAnswer(e) {
    e.preventDefault();
    const answerId = e.dataTransfer.getData('text');
    const answerElement = document.getElementById(answerId);
    

    if (e.target.innerHTML === "") {
        e.target.appendChild(answerElement);
    }
}


const questions = [
    { question: "Choose the correct conjunction to complete this sentence: \"She studied hard ___ she could pass the exam.\"", correctDrop: "drop1", answer: "So that" },
    { question: "What is the past form of the verb \"choose\"?", correctDrop: "drop2", answer: "Chose" },
    { question: "Which word is an example of a correlative conjunction?", correctDrop: "drop3", answer: "Either...or" },
    { question: "Identify the type of clause used in this sentence: \"I will go to the gym if I have time.\"", correctDrop: "drop4", answer: "Conditional clause" },
    { question: "In the sentence \"The books belong to her,\" what part of speech is \"her\"?", correctDrop: "drop5", answer: "Pronoun" },
    { question: "Choose the correct article for this sentence: \"He is ___ university student in London.\"", correctDrop: "drop6", answer: "A" },
    { question: "What is the plural form of \"crisis\"?", correctDrop: "drop7", answer: "Crises" },
    { question: "Which word means the opposite of \"frequent\"?", correctDrop: "drop8", answer: "Rare" },
    { question: "In the sentence \"The sun shines brightly,\" what part of speech is \"brightly\"?", correctDrop: "drop9", answer: "Adverb" }
];

let currentQuestionIndex = 0;
let score = 0;
let timer = 120; 
let intervalId;


const questionElement = document.querySelector(".pilihan p");
const answerElements = document.querySelectorAll(".answer");
const timerElement = document.querySelector(".timer");
const scoreBar = document.querySelector(".scoreBar");
const checkButton = document.querySelector(".checkBox .buttonTemp");


function startGame() {
    score = 0;
    timer = 120;
    currentQuestionIndex = 0;

    updateQuestion();
    startCountdown();
    resetDropzones();

    checkButton.disabled = false;
    updateScore();
}

// Function to update the current question
function updateQuestion() {
    questionElement.textContent = questions[currentQuestionIndex].question;
}

// Function to start the countdown timer
function startCountdown() {
    timerElement.textContent = `Time: ${timer}s`;
    intervalId = setInterval(() => {
        timer--;
        timerElement.textContent = `Time: ${timer}s`;

        if (timer <= 0) {
            clearInterval(intervalId);
            endGame();
        }
    }, 1000);
}


function checkAnswers() {
    let allCorrect = true;

    questions.forEach((q, index) => {
        const correctDrop = document.getElementById(q.correctDrop);
        const answer = correctDrop.querySelector(".answer");

        if (!answer || answer.id !== `answer${index + 1}`) {
            allCorrect = false;
            score -= 1; 
        }
    });

    if (allCorrect) {
        clearInterval(intervalId); 
        score += timer; 
        endGame();
    } else {
        updateScore();
    }
}


function resetDropzones() {
    dropzones.forEach(zone => {
        zone.innerHTML = ""; 
    });
}


function updateScore() {
    scoreBar.textContent = `Score: ${score}`;
}


function endGame() {
    checkButton.disabled = true;
    questionElement.textContent = `Game Over! Your final score is ${score}`;
}

// Drag-and-Drop Handlers
answerElements.forEach(answer => {
    answer.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text", e.target.id);
    });
});

dropzones.forEach(zone => {
    zone.addEventListener("dragover", e => {
        e.preventDefault();
    });

    zone.addEventListener("drop", e => {
        e.preventDefault();
        const answerId = e.dataTransfer.getData("text");
        const answerElement = document.getElementById(answerId);

        if (!zone.querySelector(".answer")) {
            zone.appendChild(answerElement); 
        }
    });
});

// Event listeners
checkButton.addEventListener("click", checkAnswers);


document.addEventListener("DOMContentLoaded", startGame);

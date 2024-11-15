// List of questions and answers for all levels
const questions = [
    // Easy Level
    { level: "Easy", question: "Complete the sentence with the correct conjunction: \"I want to go out, ___ it’s raining.\"", answer: "but" },
    { level: "Easy", question: "What is the past tense form of \"jump\"?", answer: "jumped" },
    { level: "Easy", question: "Choose the correct article: \"___ orange is juicy and sweet.\"", answer: "An" },
    { level: "Easy", question: "What is the plural form of \"dog\"?", answer: "dogs" },
    { level: "Easy", question: "Fill in the blank with the correct pronoun: \"This book belongs to ___.\"", answer: "me" },
    { level: "Easy", question: "What is the opposite of \"hot\"?", answer: "cold" },
    { level: "Easy", question: "Identify the verb in this sentence: \"They sing beautifully.\"", answer: "sing" },

    // Medium Level
    { level: "Medium", question: "Complete the sentence: \"I will call you ___ I arrive.\"", answer: "when" },
    { level: "Medium", question: "What is the past form of \"catch\"?", answer: "caught" },
    { level: "Medium", question: "Choose the correct article: \"She is ___ artist who paints landscapes.\"", answer: "an" },
    { level: "Medium", question: "What is the plural form of \"tooth\"?", answer: "teeth" },
    { level: "Medium", question: "Fill in the blank with the correct pronoun: \"___ was the one who helped me with the project.\"", answer: "She" },
    { level: "Medium", question: "What is the opposite of \"difficult\"?", answer: "easy" },
    { level: "Medium", question: "Identify the adverb in this sentence: \"She danced gracefully.\"", answer: "gracefully" },

    // Hard Level
    { level: "Hard", question: "Complete the sentence with the correct conjunction: \"She trained every day ___ she could compete in the tournament.\"", answer: "so that" },
    { level: "Hard", question: "What is the past form of \"begin\"?", answer: "began" },
    { level: "Hard", question: "Choose the correct article: \"He is ___ honorable guest at the ceremony.\"", answer: "an" },
    { level: "Hard", question: "What is the plural form of \"phenomenon\"?", answer: "phenomena" },
    { level: "Hard", question: "Fill in the blank with the correct pronoun: \"This decision is up to you and ___.\"", answer: "me" },
    { level: "Hard", question: "What is the opposite of \"scarce\"?", answer: "abundant" },
    { level: "Hard", question: "Identify the part of speech of the word \"delightful\" in this sentence: \"The food was delightful.\"", answer: "adjective" }
];

let currentQuestionIndex = 0;
let score = 0;
let timer = 120; 
let intervalId;


const questionElement = document.getElementById('questionFortress');
const levelElement = document.createElement('p'); // Level display element
const answerInput = document.querySelector('.jawaban textarea');
const scoreBar = document.querySelector('.positionScore');
const timerElement = document.querySelector('.timer');
const startButton = document.querySelector('.checkBox button');
const deflectButton = document.querySelector('.jawaban .buttonTemp'); // Deflect button


questionElement.insertAdjacentElement('beforebegin', levelElement);


function startGame() {
    score = 0;
    timer = 120;
    currentQuestionIndex = 0;

    updateScore();
    showQuestion();
    startCountdown();

   
    answerInput.disabled = false;
    answerInput.value = "";
    startButton.disabled = true;
    deflectButton.disabled = false; 
}


function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        levelElement.textContent = `Level: ${currentQuestion.level}`;
        questionElement.textContent = currentQuestion.question;
    } else {
        endGame();
    }
}

// Function to check the user's answer
function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        score += 10;
    } else {
        score -= 5;
    }


    updateScore();
    currentQuestionIndex++;
    showQuestion();

    answerInput.value = "";
}


function updateScore() {
    scoreBar.textContent = score;
}


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

function endGame() {
    clearInterval(intervalId);
    questionElement.textContent = "Game Over! Your score is " + score;
    levelElement.textContent = "";
    startButton.disabled = false;
    answerInput.disabled = true;
    deflectButton.disabled = true; 
}

// Event listeners
startButton.addEventListener('click', startGame);
deflectButton.addEventListener('click', checkAnswer); 

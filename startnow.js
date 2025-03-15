// Questions Array (Replace this with actual questions)
const questions = [
    "Do you often feel sad for no reason?",
    "Do you experience loss of interest in daily activities?",
    "Do you struggle with low energy or fatigue?",
    "Do you have trouble sleeping or oversleeping?",
    "Do you feel hopeless about the future?",
    "Do you often feel worthless or guilty?",
    "Do you have difficulty concentrating on tasks?",
    "Do you avoid social interactions more than usual?",
    "Do you experience sudden mood swings?",
    "Have you lost motivation for hobbies you once enjoyed?",
    "Do you feel anxious or restless frequently?",
    "Do you find yourself overeating or having no appetite?",
    "Do you struggle with negative thoughts about yourself?",
    "Do you feel like you're moving or thinking slower than usual?",
    "Do you experience frequent headaches or body pains?",
    "Do you have a hard time finding joy in things?",
    "Do you feel distant from family and friends?",
    "Do you ever feel like you're a burden to others?",
    "Do you struggle with low self-esteem?",
    "Do you find it hard to control your emotions?",
    "Do you have thoughts of self-harm or suicide?",
    "Do you feel overwhelmed with life responsibilities?",
    "Do you experience sudden bursts of anger or frustration?",
    "Do you feel disconnected from your emotions?",
    "Do you ever feel like running away from everything?",
    "Do you experience brain fog or mental confusion?",
    "Do you feel exhausted even after resting?",
    "Do you find yourself avoiding important responsibilities?",
    "Do you feel numb or empty inside?",
    "Do you often wish you could be someone else?"
];

// Variables
let currentQuestionIndex = 0;
let userResponses = new Array(questions.length).fill(null); // Store responses
const questionText = document.getElementById("question-text");
const currentQuestionDisplay = document.getElementById("current-question");
const options = document.querySelectorAll('input[name="answer"]');
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const resultsButton = document.querySelector(".results-btn");
const startButton = document.querySelector(".start-test");
const testContainer = document.querySelector(".test-container");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");

// Start Test Button
startButton.addEventListener("click", () => {
    if (nameInput.value.trim() === "" || ageInput.value.trim() === "") {
        alert("Please enter your name and age before starting the test.");
        return;
    }
    testContainer.classList.remove("hidden");
    startButton.parentElement.classList.add("hidden");
    loadQuestion();
});

// Load Question
function loadQuestion() {
    questionText.innerText = questions[currentQuestionIndex];
    currentQuestionDisplay.innerText = currentQuestionIndex + 1;

    // Reset radio buttons
    options.forEach(option => option.checked = false);

    // Re-select previous choice if it exists
    if (userResponses[currentQuestionIndex] !== null) {
        options.forEach(option => {
            if (option.value === userResponses[currentQuestionIndex]) {
                option.checked = true;
            }
        });
    }

    // Hide "Previous" button on first question
    prevButton.style.display = (currentQuestionIndex === 0) ? "none" : "inline-block";

    // Show "View Results" button only on last question
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.style.display = "none";
        resultsButton.classList.remove("hidden");
    } else {
        nextButton.style.display = "inline-block";
        resultsButton.classList.add("hidden");
    }
}

// Save Response
function saveResponse() {
    options.forEach(option => {
        if (option.checked) {
            userResponses[currentQuestionIndex] = option.value;
        }
    });
}

// Next Button
nextButton.addEventListener("click", () => {
    saveResponse();
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
});

// Previous Button
prevButton.addEventListener("click", () => {
    saveResponse();
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

// View Results Button
resultsButton.addEventListener("click", () => {
    saveResponse();
    
    // Calculate Score (Example logic)
    let score = userResponses.reduce((acc, val) => {
        if (val === "Yes") return acc + 2;
        if (val === "Maybe") return acc + 1;
        return acc;
    }, 0);

    let finalScore = (score / (questions.length * 2)) * 10; // Scale to 0-10
    finalScore = finalScore.toFixed(2);

    localStorage.setItem("depressionScore", finalScore); // Store score

    window.location.href = "resultpage.html"; // Navigate to results
});

// Initialize First Question
loadQuestion();

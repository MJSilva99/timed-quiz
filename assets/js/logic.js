var startButton = document.getElementById("start");
var questionEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var feedbackEl = document.getElementById("feedback");
var timeDisplay = document.getElementById("time");

// Event listeners
startButton.addEventListener("click", startQuiz);
choicesEl.addEventListener("click", checkAnswer);
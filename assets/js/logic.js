var startButton = document.getElementById("start");
var questionEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var feedbackEl = document.getElementById("feedback");
var timeDisplay = document.getElementById("time");

// Event listeners
startButton.addEventListener("click", startQuiz);
choicesEl.addEventListener("click", checkAnswer);

var currentQuestionIndex = 0;
var time = 90;

// Function to start the quiz
function startQuiz() {
  // Hide start screen and show question screen
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("questions").classList.remove("hide");

  timer();

  displayQuestion();
}
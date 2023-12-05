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

// Displaying question
function displayQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.questionText;

  choicesEl.innerHTML = "";


  // For loop for buttons
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var options = currentQuestion.choices[i];
    var button = document.createElement("button");
    button.textContent = options;
    choicesEl.appendChild(button);
  }
}

// Timer function
function timer() {

  var timerInterval = setInterval(function () {
    time--;
    timeDisplay.textContent = time + ' seconds remaining';;

    if (time <= 0 || currentQuestionIndex === questions.length) {
      clearInterval(timerInterval);
      end();
    }
  }, 1000);
}

function checkAnswer(event) {
  var selectedAnswer = event.target.textContent;

  if (selectedAnswer === questions[currentQuestionIndex].answer) {
    feedbackEl.textContent = "Correct!";
  } else {
    feedbackEl.textContent = "Incorrect! -10 seconds";
    time -= 10;
  }

  feedbackEl.classList.remove("hide");


  // Next question
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    end();
  }
}

function end() {
  // End screen
  document.getElementById("questions").classList.add("hide");
  document.getElementById("end-screen").classList.remove("hide");

  // Final score
  document.getElementById("final-score").textContent = time;

  // Stops timer
  timeDisplay.textContent = 0;
}
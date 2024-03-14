// question data
const questions = [
  {
    question: "Which is the largest animal in the world?",
    answer: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Tiger", correct: false },
    ],
  },
  {
    question: "Which is the biggest country in the World?",
    answer: [
      { text: "India", correct: false },
      { text: "China", correct: false },
      { text: "Russia", correct: true },
      { text: "Canada", correct: false },
    ],
  },
  {
    question: "Which is the largest programming youTube channel in the world?",
    answer: [
      { text: "FreeCodeCamp", correct: true },
      { text: "Stack Learner", correct: false },
      { text: "Code with Harry", correct: false },
      { text: "Learn with Sumit", correct: false },
    ],
  },
  {
    question: "Who is the founder of Google?",
    answer: [
      { text: "Elon Mask", correct: false },
      { text: "Mark Zuckerberg", correct: false },
      { text: "Bill Gates", correct: false },
      { text: "Larry Page", correct: true },
    ],
  },
  {
    question: "Who is the founder of Microsoft?",
    answer: [
      { text: "Elon Mask", correct: false },
      { text: "Mark Zuckerberg", correct: false },
      { text: "Bill Gates", correct: true },
      { text: "Larry Page", correct: false },
    ],
  },
];

// Selected all html id
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("question-container");
const nextBtn = document.getElementById("nextBtn");

// global variable
let currentQuestionIndex = 0;
let score = 0;

// startQuiz function
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

// showQuestion function
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;
  currentQuestion.answer.forEach(function (answer) {
    let button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("qusBtn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

// resetState function
function resetState() {
  nextBtn.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

// selectAnswer function
function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }
  nextBtn.style.display = "block";
  console.log(Array.from(answerButton.children).forEach(function () {}));
  Array.from(answerButton.children).forEach(function (btn) {
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct");
    }
    btn.disabled = true;
    btn.style.color = "black";
  });
}

// nextBtn addEventListener
nextBtn.addEventListener("click", function () {
  if (currentQuestionIndex < questions.length) {
    handleFun();
  } else {
    startQuiz();
  }
});

// handleFun function
function handleFun() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
// showScore function
function showScore() {
  resetState();
  questionElement.innerHTML = `Your scored is (${score}) out of (${questions.length}).`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

startQuiz();



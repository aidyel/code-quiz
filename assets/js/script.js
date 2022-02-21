
var startButton = document.getElementById('start-btn')
var mainScreen = document.getElementById('start-screen')
var questionContainerEl = document.getElementById('question-container')
var timerEl = document.getElementById('time')
var questionEl = document.getElementById('question')
var answerEl = document.querySelector(".btn")
var answerButtonEl = document.getElementById('answer-btn')

var shuffledQuestions, currentQuestionsIndex

function startQuiz() {
    console.log('started')
    mainScreen.classList.add('hide')
   
    shuffledQuestions = allQuestion.sort(() => Math.random() - .5)
    currentQuestionsIndex = 1
    questionContainerEl.classList.remove('hide')
    countdown()
    setNextQuestion()
    showQuestion()

}

startButton.addEventListener('click', startQuiz)


// Build timer countdown function
function countdown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }

    }, 1000)
}
// questions 

function selectAnswer() {

}

function showQuestion(allQuestion) {
    console.log(allQuestion)
    questionEl.innerText = allQuestion.question
    document.getElementById("answer-btn").innerHTML = " ";
    for (var i = 0; i < allQuestion.answers.length; i++) {
        var btnName = document.createElement("button");
        btnName.className = "choice";
        btnName.innerText = allQuestion.answers[i];
        btnName.className = "button-name-style choice";
        document.getElementById("question-container").appendChild(btnName)

    };
   

}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}


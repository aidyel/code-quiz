
var startButton = document.getElementById('start-btn')
startButton.addEventListener('click', startQuiz)


function startQuiz() {  
  console.log('started')
}



var timerEl = document.getElementById('time')
// Build timer countdown function
function countdown(){
    var timeLeft = 75;
    
    var timeInterval = setInterval(function () {
        if (timeLeft > 1){
            timerEl.textContent = timeLeft + 'seconds remaining';
            timeLeft--;
        }else if (timeLeft === 1) {
            timer.textContent = timeLeft + 'second remaining';
            timeLeft--;
        }else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
        
    }, 1000)
}
// questions




// var question =[
//     {
//         titile: "Commonly use data types Do Not include:",
//         choices: ["Strings, booleans, alerts, numbers"],
//         solution: "2"
//     },

//     {
//         titile: "Commonly use data types Do Not include:",
//         choices: ["Strings", "booleans", "alerts", "numbers"],
//         solution: "2"
//     },

//     {
//         titile: "The condition in an if/else statement is enclosed with______. ",
//         choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
//         solution: "2"
//     }, 

//     {
//         titile: "Arrays in JavaScript can be used to store______.",
//         choices: ["numbers and srtings", "other arrays", "booleans", "all of the above"],
//         solution: "3"
//     }, 

//     {
//         titile: "String values must be enclosed within_______ when being assigned to variables",
//         choices: ["comas", "curly brackets", "quotes", "parenthesis"],
//         solution: "2"
//     },]

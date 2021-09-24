// I have a bunch of quiz questions to ask. What is the best way to store all those questions, PLUS the correct answer for each one?
// For each question in the quiz:
   // The question itself
   // The possible answers 
   // Which answer is correct 

// Have a process where:
  // When the game starts, a countdown begins
  // A wquestion is selected from the collection
  // All the elements are added to the DOM 
  // The user will click on one of the answers 
  // Detect that click and determine if the user clicked on the right answer 
     // If yes, add some points 
     // If no, subtract 5 or 10 seconds from the time remaining
     // Go the next question

// After all questions OR after time runs out, show the user their score
// High score tracking
var timerEl = document.querySelector(".time");
var questionSectionEl = document.querySelector(".question-section");
var quizContainer = document.getElementById("quiz");
var finalScoreEl= document.querySelector(".card");
var scoreDetails = document.querySelector(".card");
var inputField = document.getElementById("name");
var btn = document.querySelector("button");
var formEl= document.querySelector("#form");

var questions = [
    {
        question: "Commonly used data types DO NOT include:", 
        options: ["strings","booleans","alerts","numbers"],
        answer: "alerts"
    }, 
    {
        question: "Arrays in JavaScript can be used to store ______",
        options: ["numbers and strings","other arrays","boolean","all of the above"],
        answer: "numbers and strings"
    }, 
    {
        question: "String values must be encolsed within ______ when being assigned to variables.", 
        options: ["commas","curly brackets","quotes","paranthesis"],
        answer: "quotes"
    }, 
    {
        question: "A very useful tool used during development and debugging for printing content to the debugging for printing content to the debugger is:", 
        options: ["javascript","terminal/bash","for loops","console.log"],
        answer: "console.log"
    }
];
var questionIndex=0;
var timerInterval;
var timeLeft = questions.length*15;
var username=  JSON.parse(localStorage.getItem("name")) ||  [];
/*var finaScore=0;*/

function callback() { 
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerEl.textContent = "Time is up!";
    }
    // if user has answered all questions, end game and get the score
}

function endGame(){
    // calculate score and stop counter
    clearInterval(timerInterval);
    timerEl.textContent = "Game over, man!";
    displayFinalScore();
}

// on click, the startGame function begins
function startGame() {

    // makes the title, instructions, and start button disappear
    var mainPage= document.getElementById("quiz");
    mainPage.setAttribute("style", "display: none");
    timerInterval =setInterval(callback, 1000);
    displayQuestion();

}



function displayQuestion() {
        questionSectionEl.innerHTML= `  
        <h2>Question ${questionIndex+1} : ${questions[questionIndex].question} </h2>
          <ul>
            <li><button class="answer">${questions[questionIndex].options[0]}</button></li>
            <li><button class="answer">${questions[questionIndex].options[1]}</button></li>
            <li><button class="answer">${questions[questionIndex].options[2]}</button></li>
            <li><button class="answer">${questions[questionIndex].options[3]}</button></li>
          </ul>
          
           <div class="message"></div>
          `
          var answerEl= document.querySelectorAll(".answer");
          var messageEl=document.querySelector(".message");
          
          for(var i=0;i<answerEl.length;i++){
              answerEl[i].addEventListener("click", function(event){
                  console.log(event.target.textContent,questions[questionIndex].answer);
                  console.log(event.target.textContent ===questions[questionIndex].answer);
                  if(event.target.textContent ===questions[questionIndex].answer ) {
                      messageEl.textContent="correct";  
                      timeLeft=timeLeft+5;
                  } else {
                      messageEl.textContent="wrong";
                      timeLeft=timeLeft-10;
                       
                  }
                 questionIndex++;
                     if(questionIndex<questions.length && timeLeft>0) {  
                         setTimeout(displayQuestion,2000);
                                         
                     } else {
                        questionSectionEl.setAttribute("style", "display:none");

                        endGame();
                     }
                     
            })
        }
}
    
    
    function displayFinalScore() {
        finalScoreEl.innerHTML = `
        <h1>All Done </h1> 
          <form id="form">
            <h3>Your Final Score Is:${timeLeft}</h3>
              <fieldset>
                <label for="name">Enter Your Name:</label>
                <input type="text" id="username" name="name" value="" placeholder="Enter Your Name" />
              </fieldset>
              <fieldset>
                <button class="submit" type="submit" style="text-align: center;">Submit</button>     
              </fieldset> 
          </form>`

                
     


     formEl.addEventListener("submit", updateStorage)

       function updateStorage(event) {
           event.preventDefault();
           var usernameEl=document.querySelector("#username");
           username.push(usernameEl.value+" - "+timeLeft);
           localStorage.setItem("name",  JSON.stringify(username));
           location.href="./index1.html"
       }
    //    function start() {
    //        if(localStorage.getItem("name")!== null){
    //            username=localStorage.getItem("name");
    //            inputField.value=username;
    //        }
    //     }
    //     btn.addEventListener("click", function(e) {
    //         e.preventDefault();
    //         username=inputField.value;
    //         console.log(username);
    //         updateStorage();
    //     })
    //     start();
    }

              
          
    
//selectors
var timerEl = document.querySelector(".time");
var questionSectionEl = document.querySelector(".question-section");
var quizContainer = document.getElementById("quiz");
var finalScoreEl= document.querySelector(".card");
var inputField = document.getElementById("name");
var btn = document.querySelector("button");
var formEl= document.querySelector("#form");

//global variables
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

//callback function for timer
function callback() { 
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerEl.textContent = "Time is up!";
    }
     
}

  // if user has answered all questions, end game and get the scorecalculate score and display final score
function endGame(){
    clearInterval(timerInterval);
    timerEl.textContent = "Game over, man!";
    displayFinalScore();
}

//start button disappear on click, the startGame function begins
function startGame() {  
    var mainPage= quizContainer;
    mainPage.setAttribute("style", "display: none");
    timerInterval =setInterval(callback, 1000);
    displayQuestion();
}

//display questions one after another

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
          //when click one of the answers in option, it gives correct answer or wrong answer
          var answerEl= document.querySelectorAll(".answer");
          var messageEl=document.querySelector(".message");
          
          for(var i=0;i<answerEl.length;i++){
              answerEl[i].addEventListener("click", function(event){
                  console.log(event.target.textContent,questions[questionIndex].answer);
                  console.log(event.target.textContent ===questions[questionIndex].answer);
                  if(event.target.textContent ===questions[questionIndex].answer ) {
                      messageEl.textContent="correct"; 
                      //if answer is correct adding 2 sec in timer 
                      timeLeft=timeLeft+5;
                  } else {
                      messageEl.textContent="wrong";
                      //if answer is wrong penalize score time by ten seconds
                      timeLeft=timeLeft-10;
                       
                  }
                  //before starting new question it waits 2sec for next question
                  questionIndex++;
                      if(questionIndex<questions.length && timeLeft>0) {  
                         setTimeout(displayQuestion,2000);
                                         
                     } else {
                        
                        setTimeout(function(){
                            questionSectionEl.setAttribute("style", "display:none");
                            timerEl.setAttribute("style", "display: none");
                           endGame();
                        },2000)
                     
                     }
                     
             } )
        }
}
    
//once questions is completed it calulates the time and display final score
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

     //once we enetered the initial and click on submit button, it stores final score in local storage 
     var formEl = document.querySelector("#form");          
     formEl.addEventListener("submit", updateStorage);

       function updateStorage(event) {
           event.preventDefault();
           var usernameEl=document.querySelector("#username");
           username.push(usernameEl.value+" - "+timeLeft);
           localStorage.setItem("name",  JSON.stringify(username));
           location.href="./index1.html";
       }
}
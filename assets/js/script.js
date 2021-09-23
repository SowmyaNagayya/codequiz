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
var timeLeft = questions.length*15;

var timerInterval;
// on click, the startGame function begins
function startGame() {

    // makes the title, instructions, and start button disappear
    var mainPage= document.getElementById("quiz");
     mainPage.setAttribute("style", "display: none")
     displayQuestion();
    //  countdown begins function 
       
        function callback() { 
            timeLeft--;
            timerEl.textContent = "Time: " + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            timerEl.textContent = "Time is up!";
        }
        }
      timerInterval = setInterval(callback, 1000);
    // askQuestion1();
    };

    function displayQuestion() {
        questionSectionEl.innerHTML= `  
    
        <h2>Question ${questionIndex+1} : ${questions[questionIndex].question} </h2>
          <ul>
            <li><button  class="answer">${questions[questionIndex].options[0]}</button></li>
            <li ><button class="answer">${questions[questionIndex].options[1]}</button></li>
            <li ><button class="answer">${questions[questionIndex].options[2]}</button></li>
            <li ><button class="answer">${questions[questionIndex].options[3]}</button></li>
          </ul>
          
           <div class="message"></div>
          `


          var answerEl= document.querySelectorAll(".answer");
          var messageEl=document.querySelector(".message");
          
          for(var i=0;i<answerEl.length;i++){
              answerEl[i].addEventListener("click", function(event){
                  if(event.target.textContent ===questions[questionIndex].answer ) {
                      messageEl.textContent="correct";  
                  } else {
                      messageEl.textContent="wrong";
                      timeLeft=timeLeft-15;
                       
                  }
      
                  setTimeout(function(){
                    questionIndex++;
                     if(questionIndex<questions.length && timeLeft>0) {  
                         displayQuestion();

                      
                      
                     }else {
                         timeLeft=0;
                       clearInterval(timerInterval)
                     }
                   
                  },2000)
                 
              })
          }


    }



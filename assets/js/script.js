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

var quizContainer = document.getElementById(quiz);
var questions = [
    {
        question1: "Commonly used data types DO NOT include:", 
        options: ["strings","booleans","alerts","numbers"],
        answer: options[2]
    }, 
    {
        question2: "Arrays in JavaScript can be used to store ______",
        options: ["numbers and strings","other arrays","boolean","all of the above"],
        answer: options[1]
    }, 
    {
        question1: "String values must be encolsed within ______ when being assigned to variables.", 
        options: ["commas","curly brackets","quotes","paranthesis"],
        answer: options[3]
    }, 
    {
        question1: "A very useful tool used during development and debugging for printing content to the debugging for printing content to the debugger is:", 
        options: ["javascript","terminal/bash","for loops","console.log"],
        answer:options[4]
    }
];

// on click, the startGame function begins
function startGame() {

    // makes the title, instructions, and start button disappear
    var mainPage= document.getElementById(quiz);
     mainPage.setAttribute("style", "display: none")

    //  countdown begins function 
        var timeLeft = 60;
        function callback() { 
            timeLeft--;
            timerEl.textContent = "Time: " + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            timerEl.textContent = "Time is up!";
        }
        }
    var timerInterval = setInterval(callback, 1000);
    // askQuestion1();
    };





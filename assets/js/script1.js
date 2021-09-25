//converting string into array to store the data
var highScoreEl= document.querySelector(".highscore");
var username= JSON.parse(localStorage.getItem("name"));


for(var i=0;i<username.length;i++){
    highScoreEl.innerHTML+=`<li>${username[i]} </li>`;
}

//If click play again it goes to the main page
var playAgain= document.querySelector("#playagain");
playAgain.addEventListener("click", function(){
    location.href="./index.html";

})
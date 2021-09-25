var highScoreEl= document.querySelector(".highscore");
var username= JSON.parse(localStorage.getItem("name"));


for(var i=0;i<username.length;i++){
    highScoreEl.innerHTML+=`<li>${username[i]} </li>`;
}

var playAgain= document.querySelector("#playagain");
playAgain.addEventListener("click", function(){
    location.href="./index.html";
    
})
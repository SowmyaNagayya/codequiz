var highScoreEl= document.querySelector(".highscore");
var name= JSON.parse(localStorage.getItem("name"))


for(var i=0;i<name.length;i++){
    highScoreEl.innerHTML+=`${}name[i]`;
}
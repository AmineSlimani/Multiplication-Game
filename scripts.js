let score = document.getElementById("score");
let qst = document.getElementById("qst");
let userAns = document.getElementById("input");
let form = document.getElementById("form");

let num1 = Math.ceil(Math.random()*10);
let num2 = Math.ceil(Math.random()*10);
let correctAns = num1*num2;

qst.innerText = "What's " + num1 + "  x   " + num2 + " ? " ;

let scoreNumber = JSON.parse(localStorage.getItem("scoreNumber")); 

if (!scoreNumber){
    scoreNumber = 0;
}




form.addEventListener("submit",


function checkResults() {

    let userAnswer = JSON.parse(userAns.value);

    if (userAnswer === correctAns){
        scoreNumber++;
        localStorageScore();
    }
    else{
        scoreNumber--;
        localStorageScore();
    }

}
)

function localStorageScore(){
    localStorage.setItem("scoreNumber",JSON.stringify(scoreNumber));
}



score.innerText = "Score : " + scoreNumber;


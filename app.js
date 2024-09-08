let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgPara=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const drawGame= ()=>{
    msgPara.innerText="This round is Draw !! Play Again"
    msgPara.style.backgroundColor="#081b31"
}
const showWinnner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        msgPara.innerText=`You Won this Round ${userChoice} beats ${compChoice}`;
        msgPara.style.backgroundColor="Green";
        userScorePara.innerText=userScore;
    }
    else{
        compScore++;
        msgPara.innerText=`You Lose this Round ${compChoice} beats ${userChoice}`;
        msgPara.style.backgroundColor="Red";
        compScorePara.innerText=compScore;
    }
}
const genCompChoice=() =>{
    const options = ['rock','paper','scissior'];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const playGame= (userChoice) =>{
    let compChoice = genCompChoice();
    console.log("User Select ",userChoice);
    console.log("Computer Select ",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin= compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissior"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinnner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener('click',() =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice)
    });
});

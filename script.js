let userScore=0;
let compScore=0;
let body=document.querySelector("body");
let msg=document.querySelector("#msg");
const choices= document.querySelectorAll(".choice");
let userChoicePara= document.querySelector("#user-score");
let compChoicePara=document.querySelector("#computer-score");

const genCompChoice= ()=>{
    const options=["Stone","Paper","Scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame=()=>{
    msg.innerText="Game was Drow, Play Again!";
    msg.style.backgroundColor ="rgb(142, 142, 142)";

};
const showWinner=(userWin, userChoise,computerChoice)=>{
    if(userWin){
        userScore++;
        userChoicePara.innerText=`${userScore}`;
        msg.innerText=`You Are Win! your "${userChoise}" beats "${computerChoice}"`;
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
        compChoicePara.innerText=`${compScore}`;
        msg.innerText=`You Are Lose! "${computerChoice}" beats "${userChoise}"`;
        msg.style.backgroundColor ="red";
    }
};

const playGame=(userChoice)=>{
        //Generste Computer choice
        const computerChoice= genCompChoice();
        if (userChoice === computerChoice) {
            //Draw Game
            drawGame();
        }else{
            let userWin=true; //condition use win ho raha he..
            if(userChoice==="Stone"){
                //scissor, paper
                userWin=computerChoice==="Paper" ? false : true;
            }else if(userChoice==="Paper"){
                //rock, scissor
                userWin=computerChoice==="Scissor" ? false : true ;
            }else{
                //rock, papper
                userWin=computerChoice==="Stone" ? false : true;
            }
            showWinner(userWin, userChoice, computerChoice);
        }
};

/*for( let choice of choices){
    choice.addEventListener("click",()=>{
        console.log(choice);
        console.log("chocie was clicked");
    });
}*/

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
let userScore=0;
let comScore=0;

const choices=document.querySelectorAll(".choice");
const showMsg=document.querySelector("#msg");

const userId=document.querySelector("#user-score");
const comId=document.querySelector("#com-score");

const btn=document.querySelector(".btn");

// generate computer choice
const genComChoice = ()=>{
    const option=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random() * 3);
    return option[randomIdx];
};

// show winner
const showWinner = (showMsg,userWin,userChoice,comChoice)=>{
    if(userWin){
        showMsg.innerText=`You Win! Your ${userChoice} beats ${comChoice}`;
        showMsg.style.backgroundColor = "green";

        // update the score
        userScore++;
        userId.innerText=userScore;
    }else{
        showMsg.innerText=`You Lost. ${comChoice} beats Your ${userChoice}`;
        showMsg.style.backgroundColor = "red";

        // update the score
        comScore++;
        comId.innerText=comScore;
    }
};

// for draw the game
const drawGame = (showMsg)=>{
    showMsg.innerText="Game Was Draw. Play Again.";
    showMsg.style.backgroundColor = "#081b31";
};

// play the game
const playGame = (userChoice)=>{
    // computer choice
    const comChoice=genComChoice();

    // calculate score
    if(userChoice === comChoice){
        drawGame(showMsg);
    }else{
        let userWin=true;
        if(userChoice === "rock"){

            // paper, scissors
            userWin = comChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){

            // rock, scissors
            userWin = comChoice === "scissors" ? false : true;
        }
        else{ // userChoice === "scissors"

            // rock, paper
            userWin = comChoice === "paper" ? false : true;
        } 

        // show the winner
        showWinner(showMsg,userWin,userChoice,comChoice);
    }
};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})

// reset game
btn.addEventListener("click",()=>{
    userScore=0;
    comScore=0;
    userId.innerText=userScore;
    comId.innerText=comScore;
    showMsg.innerText="Play your move";
    showMsg.style.backgroundColor = "#081b31";
})
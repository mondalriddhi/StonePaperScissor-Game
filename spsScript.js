let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

let userScore=document.querySelector("#user_Sc");
let compScore=document.querySelector("#comp_Sc");
let userCurrScore=0;
let compCurrScore=0;

let generateCompChoice=()=> {
    arr=["rock", "paper", "scissor"];
    let index=Math.floor(Math.random()*3);
    return arr[index];
}

let drawFunction=(compChoice)=> {
    msg.innerText=`Tie, both of you chose ${compChoice}`;
    msg.style.backgroundColor="rgb(48, 53, 100)";
}

let msgFunction=(userWin, userChoice, compChoice) => {
    if(userWin) {
        msg.innerText=`You won, your ${userChoice} beats ${compChoice}`;
        userCurrScore++;
        msg.style.backgroundColor="Green";
        userScore.innerText=userCurrScore;
    }
    else {
        msg.innerText=`You lost, ASST ${compChoice} beats ${userChoice}`;
        compCurrScore++;
        msg.style.backgroundColor="red";
        compScore.innerText=compCurrScore;
    }
}


let playGame =(userChoice) => {
    // console.log(userChoice);
    const compChoice=generateCompChoice();
    if(userChoice===compChoice) {
        drawFunction(compChoice);
    }
    else {
        let userWin=true;
        if(userChoice==="rock") {
            userWin=compChoice==="scissor"?true:false;
            msgFunction(userWin, userChoice, compChoice);
        }
        else if(userChoice==="paper") {
            userWin=compChoice==="rock"?true:false;
            msgFunction(userWin, userChoice, compChoice);
        }
        else{
            userWin=compChoice==="paper"?true:false;
            msgFunction(userWin, userChoice, compChoice);
        }
    }
}

choices.forEach((choice)=> {
    choice.addEventListener("click", ()=> {
        const userChoice=choice.getAttribute("id");
        // console.log(userChoice);
        playGame(userChoice);
    })
})
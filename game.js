let randomNumber = parseInt(Math.random()*50+1);



//Acessing Elenents
const userInput=document.querySelector('#number-box');
const submit=document.querySelector('#sub-btn');
const guessSlot=document.querySelector('#guesses');
const remGuess=document.querySelector('#rem-guess');


const message=document.querySelector('#message-box')

let prevGuesses=[];
let guessNum=0;
let remianGuess=10;

let playGame=true;



if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        
        let guess=parseInt(userInput.value);
        validcheck(guess);
    })
}
function validcheck(guess){
    if(guess===''|| guess<=0 || guess>50 || isNaN(guess)){
        alert("Give a Valid Number");
    }
    else{
        givemessage(guess);
    }
}
function givemessage(guess){
    if(guess===randomNumber){
        message.innerHTML=`You Guess the Correct Number`; 
        Addguess(guess);
    }
    else if(guess<randomNumber){
        message.innerHTML=`The number is low..Give a higher number`;
        Addguess(guess);
    }
    else{
        message.innerHTML=`The number is high..Give a lower number`;
        Addguess(guess);
    }
    
}
function Addguess(guess){
    prevGuesses.push(guess);
    guessSlot.innerHTML=`${prevGuesses }`;
    guessNum++;
    remianGuess--;
    remGuess.innerHTML= `${remianGuess}`;
    userInput.value='';
    CheckGuessLimit(guessNum,remGuess);
}
function CheckGuessLimit(guessNum,remGuess){
    if(guessNum === 10 && remianGuess === 0){
        message.innerHTML=`Game Over..Random Number was ${randomNumber}`;
    }
}
document.addEventListener('DOMContentLoaded', function () {
  NewGame();
  EndGame();
});

function EndGame(){
    const endGamebtn=document.querySelector('#end-btn');
    endGamebtn.addEventListener('click',function(e){
        e.preventDefault();
        userInput.value='';
        message.innerHTML=`Please Start a New Game`;
        userInput.setAttribute('disabled', '');
        playGame=false;
    });
    NewGame();
}



function NewGame(){  
    const newGamebtn=document.querySelector('#new-btn');
    newGamebtn.addEventListener('click',function(e){
        e.preventDefault();
        
        userInput.removeAttribute('disabled');
        randomNumber = parseInt(Math.random()*50+1);
        
        userInput.value ='';
        guessSlot.innerHTML='';
        remGuess.innerHTML=10;
        message.innerHTML="";
        prevGuesses=[];
        remianGuess=10;
        guessNum=0;

        playGame=true;
    });
}

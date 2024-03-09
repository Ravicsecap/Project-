
let randomnumber = parseInt(Math.random() * 100 + 1);

// console.log(randonumber);

const usersubmit = document.querySelector("#submitdata");

const userinput = document.querySelector("#guessfield");

const priviousAttempt = document.querySelector(".guesse");

const remaningAttempt = document.querySelector(".lastresult");

const lowertohigher = document.querySelector(".Highertolower");

const startover = document.querySelector(".resultParasInt");

const p = document.createElement("p");

let preNumber = [];

let attempt = 1;

let playgame = true;

if (playgame) {
    usersubmit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userinput.value)
        validationGuess(guess);
    })
}

function validationGuess(guess) {
    if (isNaN(guess)) {
        alert(`Please enter vaild number.`);
    } 
    else if (guess > 100) {
        alert(`You choose smaller number`);

    }
    else if (guess < 1) {
        alert(`You choose bigger number`);

    }
    else{
       preNumber.push(guess);
       if(attempt === 11){
        displayGuess(guess);
        displayMessage(`Game is Over, your random no. ${randomnumber}`);
        endGame();
     }
     else{
        displayGuess(guess);
        checkGuess(guess);
     }



    }

}

function checkGuess(guess) {
    if(guess === randomnumber){
        displayMessage(`You are right number`)
        endGame();
    }else if(guess > randomnumber){
        displayMessage(`Your number is too High`)
    }else if(guess < randomnumber){
        displayMessage(`Your number is too low`)
    }

}


function displayGuess(guess) {

    userinput.value='';
    priviousAttempt.innerHTML += `${guess},`;
    attempt++;
    remaningAttempt.innerHTML= `${11 - attempt}`




}

function displayMessage(message) {

    lowertohigher.innerHTML=`<h3>${message}</h3>`;

}

function endGame() {
    userinput.value ='';
    userinput.setAttribute('Disabled', '');
    p.classList.add('button')
    p.innerHTML= `<h3 id="newGame">Start New Game</h3>`;
    startover.appendChild(p);
    playgame=false;
    startGame();

}

function startGame() {

    const newgame = document.querySelector('#newGame');
    newgame.addEventListener('click', function(e){
         randomnumber = parseInt(Math.random() * 100 + 1);
         preNumber = [];
         attempt = 1;
         priviousAttempt.innerHTML += '';
         remaningAttempt.innerHTML =`${11 - attempt}`;
         userinput.removeAttribute('Disabled');
         startover.removeChild(p)
         playgame = true;





    })

}
// There are 3 type of weapons. Those are Rock, Paper ans Scissors.
// User task is choosing one of weapon that they think it can help them to win the computer.
// Pseudo code
// Firstly, Create a function getComputerChoice() for the computer randomly chose a weapon.
// Secondly, The user chose a weapon and save it in a variable call user_weapon
// Third, Create a function play(playerSelection, computerSelection) to count the score 
//  Afer 5 round and print the result of that secsion.

const ARRAY_WEAPONS = ["rock", "scissors", "paper"];

let user_score = 0;
let computer_score = 0;
let computer_weapon;
let user_weapon;

const btn1 = document.querySelector('#rock');
const btn2 = document.querySelector('#paper')
const btn3 = document.querySelector('#scissors')

const parent = document.querySelector('.result')
let new_div = document.createElement("div")
parent.appendChild(new_div)


function getComputerChoice(){
    let randomIndex;
    randomIndex = Math.floor(Math.random() * ARRAY_WEAPONS.length)    
    return ARRAY_WEAPONS[randomIndex]
}

function playRound(playerSelection, computerSelection){
    
    if (playerSelection == computerSelection){
        new_div.textContent =`That fair. ${playerSelection} AND ${computerSelection}`
    }
    else{
        if (playerSelection == 'rock' && computerSelection == "scissors"){
            user_score++
            new_div.textContent =`You win! ${playerSelection} beats ${computerSelection}.`            
        }
        else if (playerSelection == 'paper' && computerSelection == "rock"){
            user_score++
            new_div.textContent = `You win! ${playerSelection} beats ${computerSelection}.`            
        }
        else if (playerSelection == 'scissors' && computerSelection == "paper"){
            user_score++
            new_div.textContent = `You win! ${playerSelection} beats ${computerSelection}.`           
        }
        else {
            computer_score++
            new_div.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`
        }
    }
}

function check_score(user_score, computer_score){
    if (user_score < computer_score){
        console.log(`Your score is ${user_score} and computer score is ${computer_score}. Computer win!`)
    }
    else if(user_score > computer_score){
        console.log(`Your score is ${user_score} and computer score is ${computer_score}. You win!`)
    }
    else{
        (`Your score is ${user_score} and computer score is ${computer_score}. That's fair play`)
    }
}


function game(){
    
    computer_weapon = getComputerChoice()
    console.log(`user_weapon: ${user_weapon}`)
    console.log(`computer_weapon: ${computer_weapon}`)   
    document.getElementById('computer-weapon').innerHTML = "Computer weapon is: " + computer_weapon
    playRound(user_weapon, computer_weapon)
    check_score(user_score, computer_score)

}

btn1.addEventListener('click', () => {
    user_weapon = 'rock';
    game()
})
btn2.addEventListener('click', () => {
    user_weapon = 'paper';
    game()

})
btn3.addEventListener('click', () => {
    user_weapon = 'scissors';
    game()
})




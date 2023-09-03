// There are 3 type of weapons. Those are Rock, Paper ans Scissors.
// User task is choosing one of weapon that they think it can help them to win the computer.
// Pseudo code
// Firstly, Create a function getComputerChoice() for the computer randomly chose a weapon.
// Secondly, The user chose a weapon and save it in a variable call user_weapon
// Third, Create a function play(playerSelection, computerSelection) to count the score 
//  Afer 5 round and print the result of that secsion.

const arr_weapons = ["rock", "scissors", "paper"];
let user_score = 0;
let computer_score = 0;
let computer_weapon;
let round = 1;

function getComputerChoice(){
    let randomIndex;
    randomIndex = Math.floor(Math.random() * arr_weapons.length)
    console.log(randomIndex)
    return arr_weapons[randomIndex]
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        console.log(`That fair. ${playerSelection} = ${computerSelection}`)
    }
    else{
        if (playerSelection == 'rock' && computerSelection == "scissors"){
            user_score++
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
            
        }
        else if (playerSelection == 'paper' && computerSelection == "rock"){
            user_score++
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
            
        }
        else if (playerSelection == 'scissors' && computerSelection == "paper"){
            user_score++
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
            
        }
        else {
            computer_score++
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`)
        }
    }
}

function game(){
    console.log(`Your score: ${user_score} - computer score: ${computer_score}`)
    computer_weapon = getComputerChoice()
    console.log(computer_weapon)
    const user_weapon = prompt("Your choice: ").toLowerCase();
    playRound(user_weapon, computer_weapon)

}

while (round <= 5){
    round++
    game()
}
console.log(user_score, computer_score)
if (user_score < computer_score){
    console.log(`Your score is ${user_score} and computer score is ${computer_score}. Computer win!`)
}
else if(user_score > computer_score){
    console.log(`Your score is ${user_score} and computer score is ${computer_score}. You win!`)
}
else{
    (`Your score is ${user_score} and computer score is ${computer_score}. That's fair play`)
}





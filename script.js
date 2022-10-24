let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random()*9);
}

const compareGuesses = (human , computer , number) => { 
    if (Math.abs(human - number) <= Math.abs(computer - number)){
        return true;
    }
    return false;

}

const updateScore = (winner) => {
    
    if (winner === 'human'){
        humanScore +=1; 
    }
    else if (winner ==='computer')
    { computerScore +=1 }
}


const advanceRound = () => {
    currentRoundNumber +=1; 
}

console.log(generateTarget());
console.log(compareGuesses(3,9,7));
console.log(humanScore);
console.log(updateScore('human'));
console.log(humanScore);
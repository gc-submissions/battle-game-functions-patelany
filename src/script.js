"use strict";

// TODO - write your code here.
//  1.
const randomDamage = () => {
    return Math.floor(Math.random() * 10 + 1);
};

// console.log(randomDamage());

// 2. 
const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2);
    // console.log(randNum);
    // if (randNum === 0){
        // return opt1;
    // }
    // return opt2;
    return randNum === 0 ? opt1 : opt2; 
};

// 3.
const attackPlayer = function (health) {
    return health -= randomDamage();
}

// 4. 
const logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
}

// 5. 
const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
}

const isDead = (health) => {
    return health <= 0; 
}

function fight(player1, player2, player1Health, player2Health) {
    while(true) {
        let attacker = chooseOption(player1, player2);
        if(attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if(isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            }
        } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if(isDead(player1Health)){
                logDeath(player2, player1);
                break;
            }
        }
    }
    
}

fight("Anyssa", "Nakoul", 100, 100);
// incorporate critical damage aspect


// extended challenges 

// get grade

// prioritize

// calculatePay

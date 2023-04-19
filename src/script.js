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
    // return health -= randomDamage();
    if(randomDamage() === 2 || randomDamage() === 5) {
        console.log("critical damage!")
        return health -= randomDamage() * 2;  
    } 
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
            if(player2Health < 0){
                player2Health = 0;
            }
            logHealth(player2, player2Health);
            if(isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            }
        } else {
            player1Health = attackPlayer(player1Health);
            if(player1Health < 0) {
                player1Health = 0;
            }
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


// EXTENDED CHALLENGES --------------------------------- 

// get grade
const getGrade = (percent) => {
    if(percent >= 90) {
        return "A";
    } else if(percent >= 80) {
        return "B";
    }else if(percent >= 70) {
        return "C";
    } else if(percent >= 60) {
        return "D";
    } else {
        return "F";
    }
};

// console.log(getGrade(80));

// prioritize
const prioritize = function (urgent, important) {
    if(urgent && important) {
        return 1; 
    } else if(important && !urgent) {
        return 2; 
    } else if(urgent && !important) {
        return 3; 
    } else if(!urgent && !important) {
        return 4;
    }
};

console.log(prioritize(true, false));


// calculatePay
const calculatePay = (wage, hours) => {
    if (hours > 40) {
        let totalPayCheck = (wage * 40) + ((hours - 40) * (wage * 1.5));
        return `total paycheck: $${totalPayCheck} per week`;
    }
    let totalPayCheck = wage * hours; 
    return `total paycheck: $${totalPayCheck} per week`;
};


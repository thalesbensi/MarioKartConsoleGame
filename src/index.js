import Bowser from "./model/Bowser.js"
import DonkeyKong from "./model/DonkeyKong.js"
import Luigi from "./model/Luigi.js"
import Mario from "./model/Mario.js"
import Peach from "./model/Peach.js"
import Yoshi from "./model/Yoshi.js"

async function rollDice(){
    return Math.floor(Math.random() * 6 + 1);
}

async function rollTrackSegmentDice(){
    let trackSegment = Math.floor(Math.random() * 3 + 1);
    switch (trackSegment){
        case 1:
            console.log("🚨 The next segment is gonna be a Straight 🛣️");
            return "STRAIGHT"
            break;
        case 2:
            console.log("🚨 The next segment is gonna be a Curve 🌀");
            return "CURVE"
            break;
        case 3:
            console.log("🚨 The next segment is gonna be a Duel ⚔️");
            return "DUEL"
            break;
    }
}

async function playRaceEngine(player1, player2){
    let player2Dice;
    let player1Dice;
    let totalTestSkillPLayer1;
    let totalTestSkillPLayer2;
    let player1Points = 0;
    let player2Points = 0;

    for (let round = 1; round <= 5; round++) {
        console.log("---------------------------------------------------")
        console.log(`🏁 Starting Round ${round}...`)
        let trackSegment = await rollTrackSegmentDice();
        console.log(" ");
        player1Dice = await rollDice();
        player2Dice = await rollDice();
        switch (trackSegment){
            case "STRAIGHT":
                totalTestSkillPLayer1 = player1Dice + player1.speed;
                totalTestSkillPLayer2 = player2Dice + player2.speed;

                console.log(`🎲${player1.name} got ${player1Dice} on the dice 🎲`)
                console.log(`🎲${player2.name} got ${player2Dice} on the dice 🎲`)
                console.log(" ");
                console.log(`Round Points for ${player1.name} were: ${player1Dice} + ${player1.speed} = ${totalTestSkillPLayer1}`);
                console.log(`Round Points for ${player2.name} were: ${player2Dice} + ${player2.speed} = ${totalTestSkillPLayer2}`);
                console.log(" ");
                if (totalTestSkillPLayer1 > totalTestSkillPLayer2){
                    console.log(`${player1.name} won this round and got 1️⃣ point!`);
                    player1Points += 1
                }
                if (totalTestSkillPLayer1 < totalTestSkillPLayer2){
                    console.log(`${player2.name} won this round and got 1️⃣ point!😃`);
                    player2Points += 1
                }

                if(totalTestSkillPLayer1 === totalTestSkillPLayer2){
                    console.log(`That round was a Draw! So no one got points 😥`);
                }
                break;
            case "CURVE":
                totalTestSkillPLayer1 = player1Dice + player1.maneuverability;
                totalTestSkillPLayer2 = player2Dice + player2.maneuverability;

                console.log(`🎲${player1.name} got ${player1Dice} on the dice 🎲`)
                console.log(`🎲${player2.name} got ${player2Dice} on the dice 🎲`)
                console.log(" ");
                console.log(`Round Points for ${player1.name} were: ${player1Dice} + ${player1.maneuverability} = ${totalTestSkillPLayer1}`);
                console.log(`Round Points for ${player2.name} were: ${player2Dice} + ${player2.maneuverability} = ${totalTestSkillPLayer2}`);
                console.log(" ");
                if (totalTestSkillPLayer1 > totalTestSkillPLayer2){
                    console.log(`${player1.name} won this round and got 1️⃣ point!`);
                    player1Points += 1
                }
                if (totalTestSkillPLayer1 < totalTestSkillPLayer2){
                    console.log(`${player2.name} won this round and got 1️⃣ point!😃`);
                    player2Points += 1
                }

                if(totalTestSkillPLayer1 === totalTestSkillPLayer2){
                    console.log(`That round was a Draw! So no one got points 😥`);
                }
                break;

            case "DUEL":
                totalTestSkillPLayer1 = player1Dice + player1.power;
                totalTestSkillPLayer2 = player2Dice + player2.power;

                console.log(`🎲${player1.name} got ${player1Dice} on the dice 🎲`)
                console.log(`🎲${player2.name} got ${player2Dice} on the dice 🎲`)
                console.log(" ");
                console.log(`Round Points for ${player1.name} were: ${player1Dice} + ${player1.power} = ${totalTestSkillPLayer1}`);
                console.log(`Round Points for ${player2.name} were: ${player2Dice} + ${player2.power} = ${totalTestSkillPLayer2}`);
                console.log(" ");
                if (totalTestSkillPLayer1 > totalTestSkillPLayer2){
                    console.log(`${player1.name} won this Duel round so ${player2.name} lost 1️⃣ point!`);
                    if (player2Points === 0){
                        player2Points = 0
                    }
                    else {
                        player2Points -= 1
                    }
                }
                if (totalTestSkillPLayer1 < totalTestSkillPLayer2){
                    console.log(`${player2.name} won this Duel round so ${player1.name} lost 1️⃣ point!`);
                    if (player1Points === 0){
                        player1Points = 0
                    }
                    else {
                        player1Points -= 1
                    }
                }

                if(totalTestSkillPLayer1 === totalTestSkillPLayer2){
                    console.log(`That round was a Draw! So no one lost points 😥`);
                }

                break;
        }
        console.log(`${player1.name}: ${player1Points} Points`);
        console.log(`${player2.name}: ${player2Points} Points`);
    }

    console.log("-------------------------------------------------------")

    await raceEvaluation(player1, player2,player1Points,player2Points);
}

async function raceEvaluation(player1, player2, player1Points, player2Points){
    if (player1Points > player2Points){
        console.log(`${player1.name} points: ${player1Points} \n${player2.name} points: ${player2Points} \n${player1.name} Won this race!!! Congratulations!🏆🎊🥳`);
    } else if (player1Points < player2Points){
        console.log(`${player1.name} points: ${player1Points} \n${player2.name} points: ${player2Points} \n${player2.name} Won this race!!! Congratulations!🏆🎊🥳`);
    } else {
        console.log(`${player1.name} points: ${player1Points} \n${player2.name} points: ${player2Points} \nThat Race was a Draw!😯 You guys need a revenge!`);
    }
}

(async function main(){
    const player1 = new Mario()
    const player2 = new DonkeyKong()

    console.log(`🏁🚨 ${player1.name} and ${player2.name} are starting a race... \n`);

    await playRaceEngine(player1, player2);
})()





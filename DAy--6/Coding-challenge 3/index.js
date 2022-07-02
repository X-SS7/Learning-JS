/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 80. Koalas score 109, 95 and 50

GOOD LUCK 😀
*/
//data 1

let scoreDolf = 96;
let scoreDOlf1 = 108;
let scoreDOlf2 = 89;
let scoreKoa = 88;
let scoreKoa1 = 91;
let scoreKoa2 = 110;


let avergaeDolf = (scoreDolf + scoreDOlf1 + scoreDOlf2) / 3;

let averageKoa = (scoreKoa + scoreKoa1 + scoreKoa2) / 3;

if (averageKoa > avergaeDolf) {
    console.log(`Team koala won with ${averageKoa} score as an average`);

} else if (avergaeDolf > averageKoa) {
    console.log(`Team Dolfin won with ${avergaeDolf} score as an average. `);

}
else { console.log(`draw occoured `); }

//test data  (bonus round)
scoreDolf = 97;
scoreDOlf1 = 112;
scoreDOlf1 = 101;
scoreKoa = 109;
scoreKoa1 = 95;
scoreKoa = 123;

avergaeDolf = (scoreDolf + scoreDOlf1 + scoreDOlf2) / 3;
console.log(avergaeDolf);
averageKoa = (scoreKoa + scoreKoa1 + scoreKoa2) / 3;
console.log(averageKoa);

if (averageKoa >= 100 && avergaeDolf >= 100) {
    if (averageKoa > avergaeDolf) {
        console.log(`Team koala won with ${averageKoa} score as an average`);

    } else if (avergaeDolf > averageKoa) {
        console.log(`Team Dolfin won with ${avergaeDolf} score as an average. `);
    }
    else { console.log(`draw occoured `); }
}
else if (averageKoa > avergaeDolf) { console.log(`Team koala wins with an average score of ${averageKoa}`); }
else if (avergaeDolf > averageKoa) {
    console.log(`Team Dolfin wins with an average score of ${avergaeDolf}`)
}
else if (averageKoa === avergaeDolf) {
    console.log('Both Win the trophies');
}

//test data 2  (bonus round)
scoreDolf = 97;
scoreDOlf1 = 112;
scoreDOlf1 = 80;
scoreKoa = 109;
scoreKoa1 = 95;
scoreKoa = 50;

avergaeDolf = (scoreDolf + scoreDOlf1 + scoreDOlf2) / 3;
console.log(avergaeDolf);
averageKoa = (scoreKoa + scoreKoa1 + scoreKoa2) / 3;
console.log(averageKoa);

if (averageKoa >= 100 && avergaeDolf >= 100) {
    if (averageKoa > avergaeDolf) {
        console.log(`Team koala won with ${averageKoa} score as an average`);

    } else if (avergaeDolf > averageKoa) {
        console.log(`Team Dolfin won with ${avergaeDolf} score as an average. `);
    }
    else { console.log(`draw occoured `); }
}
else if (averageKoa >= 100 && averageKoa > avergaeDolf) { console.log(`Team koala wins with an average score of ${averageKoa}`); }
else if (avergaeDolf >= 100 && avergaeDolf > averageKoa) {
    console.log(`Team Dolfin wins with an average score of ${avergaeDolf}`)
}
else {
    console.log(`Draw occoured`);
}


//wow this was actually a lot of fun tbh





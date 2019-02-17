let wantToPlay = prompt("Do you want to play a game? Type yes or no");

let playerHP = 40;
let grantHP = 10;
let playerWins = 0;




if (wantToPlay === "yes") {     //if the user types yes this whole game runs
   let playerName = prompt("What is your name");
   console.log(`hello ${playerName} you are going to fight The Almight Grant`);
   while (playerHP > 0 && grantHP > 0 && playerWins < 3) { //as long as the players and grants hp is not 0, and the play has less then 3 wins 
      let playerDam = (Math.floor((Math.random() * 2) + 1));
      let grantDam = (Math.floor((Math.random() * 2) + 1));
      playerHP = playerHP - playerDam;
      grantHP = grantHP - grantDam;
      console.log(`${playerName} has ${playerHP} health left.`);
      console.log(`Grant has ${grantHP} health left.`);
      if (grantHP <= 0 && playerHP <= 0) {  // in case of a tie
         console.log(`You Tied!!!`)
      }
      if (grantHP <= 0) {    //when grant hp hits zero or lower, the players wins go up by one and grants HP is restored
         playerWins = playerWins + 1;
         console.log(`Grant has lost a round, you have won ${playerWins} times.`);
         grantHP = 10;
      }
      if (playerHP <= 0) { //if the players hp goes to 0 or less they lose the game
         console.log(`you have lost the fight`);
      }

   }
   // }

   if (playerWins === 3 && playerHP > 0) {
      console.log(`Congrats ${playerName}, you have beat Grant 3 times and have won the fight.`)
      console.log(`You even have ${playerHP} Health left`);
   }

} else {
   console.log(`sorry you dont want to play`);
}

function playGame(playerChoice,computerChoice){
    const choices = ["Scissor", "Paper", "Rock"];
    const computerChoice = choices[Math.floor(Math.random()*3)];

    document.getElementById("user-choice").innerHTML = `You chose: <span>${playerChoice}</span>`;
    document.getElementById("computer-choice").innerHTML = `Computer chose: <span>${computerChoice}</span>`;

    if(playerChoice === computerChoice){
        console.log("It's a Tie!!!");
    } else if( (playerChoice === "Rock" && computerChoice === "Scissor")||
         (playerChoice === "Scissor" && computerChoice === "Paper")||
          (playerChoice === "Paper" && computerChoice === "Rock"))
          {
            console.log("You Win")
          }
          else{
            console.log("You Lose")
          }
 

}
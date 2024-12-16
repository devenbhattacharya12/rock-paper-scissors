//write a program that returns a random choice of rock, paper or scissors
//assign 1=rock, 2=paper, 3=scissors
//randomly pick a number between 1, 2, and 3
//return 1, 2, or 3 which will convert to rock, paper or scissors


    function getHumanChoice ()  {
        const choices = {1: "rock", 2: "paper", 3: "scissors"};
        const humanchoice = prompt ("What's your choice (1=rock, 2=paper, 3=scissors)?");
        return choices[humanchoice];
    }
    console.log(getHumanChoice());

    function getComputerChoice () {
        const choices = {1: "rock", 2: "paper", 3: "scissors"};
        const randomNumber = Math.floor(Math.random()*3+1);
        return choices[randomNumber];
    };
console.log(getComputerChoice());


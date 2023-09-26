let stone_button = document.getElementById("stone");
let paper_button = document.getElementById("paper");
let scissor_button = document.getElementById("scissor");
let computer_choice;
let player_move
let result_container = document.getElementById("result_container");
let playerPoints = 0;
let computerPoint = 0;
let playerScoreBoard = document.getElementById("player-score");
let computerScoreBoard = document.getElementById("computer-score");
let moves = {
    "1":"stone",
    "2":"paper",
    "3":"scissor"
};
function updateScoreBoard()
{
    playerScoreBoard.innerHTML = playerPoints;
    computerScoreBoard.innerHTML = computerPoint;
}
function winnerFinder()
{
    if(player_move === computer_choice)
    {
        return draw();
    }
    else if(player_move === "stone" && computer_choice === "scissor")
    {
        return plawerWins();
    }
    else if(player_move === "paper" && computer_choice === "stone")
    {
        return plawerWins();
    }
    else if(player_move === "scissor" && computer_choice === "paper")
    {
        return plawerWins();
    }
    else
    {
        return computerWins();
    }

}
function draw()
{
    return "game is tie !!!"
}
function plawerWins()
{
    playerPoints++;
    return "you win   " + player_move + " beats " + computer_choice;

}
function computerWins()
{
    computerPoint++;
    return "you lose "+ computer_choice + " beats " +  player_move;
}


function randomChoice()
{
    let random =( Math.round((Math.random() * 10)) % 3  ) + 1;

    computer_choice = moves[random + ""];
    let result = winnerFinder();
    result_container.innerHTML = result;
    updateScoreBoard();
    
}



stone_button.addEventListener("click",(e)=>
{   
    player_move = "stone";
    randomChoice();
});
paper_button.addEventListener("click",()=>
{   
    player_move = "paper";
    randomChoice();
});
scissor_button.addEventListener("click",()=>
{
    player_move = "scissor";
    randomChoice();

});
let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('Rock');
const paper_div = document.getElementById('Paper');
const scissor_div = document.getElementById('Scissor');

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissor'];
    const randomNumber = Math.floor(Math.random()*3); //Math.floor gives the random floor value i.e. 0,1,2
    return choices[randomNumber];
}

function win(user, comp) {
    const smallUser = "user".fontsize(3).sub(); // This is the javascript property to change/acess css/html of a document. Here "user".fontstyle(3) will chnage the font size to 3 
    const smallComp = "comp".fontsize(3).sub(); // "user".sub() will make it subscript. "user".sup() will make it superscript
    const addClassToUser = document.getElementById(user);
    
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${user}${smallUser} beats ${comp}${smallComp} You Win 🔥`
    addClassToUser.classList.add('green-glow'); // This will add the green-glow class to the clicked option on wining.
    // This settime() will remove the border color of the clicked option after 400ms
    setTimeout(() => {
        addClassToUser.classList.remove('green-glow');
    }, 400);
}
function lose(user, comp) {
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    const addClassToUser = document.getElementById(user);

    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${comp}${smallComp} beats ${user}${smallUser} You Lost  😓`
    addClassToUser.classList.add('red-glow')
    setTimeout(() => {
        addClassToUser.classList.remove('red-glow');
    }, 400);
}
function draw(user, comp) {
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    const addClassToUser = document.getElementById(user);
    
    result_div.innerHTML = `${user}${smallUser} equals ${comp}${smallComp} Match Draw 👻`
    addClassToUser.classList.add('yellow-glow');
    setTimeout(() => {
        addClassToUser.classList.remove('yellow-glow');
    }, 400);
}

function game(userChoice) {
    const compChoice = getComputerChoice()
    switch(userChoice + compChoice) { 
        case "RockScissor":
        case "ScissorPaper":
        case "PaperRock":
            win(userChoice, compChoice);
            break;
        case "RockPaper":
        case "PaperScissor":
        case "ScissorRock":
            lose(userChoice, compChoice);
            break;
        case "RockRock":
        case "ScissorScissor":
        case "PaperPaper":
            draw(userChoice, compChoice);
            break; 
    }
}

function main() {
    rock_div.addEventListener('click', () => game("Rock"))

    paper_div.addEventListener('click', () => game("Paper"))
    
    scissor_div.addEventListener('click', () => game("Scissor"))
}

main();

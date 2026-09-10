const playerScoreElement = document.querySelector("#playerScore");
const computerScoreElement = document.querySelector("#computerScore");
const roundCount = document.querySelector("#roundCount");
const playerHand = document.querySelector("#playerHand");
const computerHand = document.querySelector("#computerHand");
const resultText = document.querySelector("#resultText");
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const resetBtn = document.querySelector("#resetBtn");

let choices = ["rock", "scissors", "paper"];  //burada komputerin sece bileceyi variantlari saxlayiriq


//baslangic veziyyetler
let playerScore = 0; 
let computerScore = 0;
let round = 0;


let userChoice; //userin secimini saxlamaq ucun


//komputer ucun tesadufi secim etmek 
function randomChoice() {
  let randomIndex = Math.floor(Math.random() * choices.length);

  let computerChoice = choices[randomIndex];

  return computerChoice;
}



function checkWinner(userChoice, computerChoice) {
  //userin ve komputerin secimini gonderirik
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "Qalibsən!!";
  } else if (
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "scissors" && userChoice === "paper")
  ) {
    return "Kompüter qalibdir!";
  } else {
    return "Heç-heçə";
  }
}


//en vacib funksiya butun proses burda idare olunur
function playRound(userChoice) {
  let computerClickChoice = randomChoice(); // komputer secim edir

  let result = checkWinner(userChoice, computerClickChoice);//iki melumet var userin secimi ve computerin secimi. checkwinnere gonderirik. meselen checkWinner("rock","paper") qaytarir "Computer win"

  resultText.textContent = result; // bunuda resultText e ekranda yazdiririq


  //kohne rengleri silirik
playerHand.classList.remove("is-win", "is-lose", "is-draw");
computerHand.classList.remove("is-win", "is-lose", "is-draw");

  if (result == "Qalibsən!!") {
    //user qali b gelse playerScore 1 vahid artir ve ekrana yazdiriqiq
    playerScore++;
    playerScoreElement.textContent = playerScore;

    playerHand.classList.add("is-win"); //usere qalib
    computerHand.classList.add("is-lose") // komputere lose css elave olunur
  } else if (result == "Kompüter qalibdir!") {
    computerScore++;
    computerScoreElement.textContent = computerScore;
    computerHand.classList.add("is-win")
    playerHand.classList.add("is-lose")
  }else{
     playerHand.classList.add("is-draw");
    computerHand.classList.add("is-draw");
  }

  round++; //round artirilir ve html e yazilir
  roundCount.textContent = `Round ${round}`;


  //burada el iconlarini deyisirik user secimine uygun
  if (userChoice === "rock") {
    playerHand.innerHTML = `<i class="fa-solid fa-hand-back-fist hand-icon"></i>`;
  } else if (userChoice === "scissors") {
    playerHand.innerHTML = `<i class="fa-solid fa-hand-scissors hand-icon"></i>`;
  } else if (userChoice === "paper") {
    playerHand.innerHTML = `<i class="fa-solid fa-hand hand-icon"></i>`;
  };
  

  //burdada komputer secimine uygun iconlari deyisirik
  if (computerClickChoice === "rock") {
    computerHand.innerHTML = `<i class="fa-solid fa-hand-back-fist hand-icon"></i>`;
  } else if (computerClickChoice === "scissors") {
    computerHand.innerHTML = `<i class="fa-solid fa-hand-scissors hand-icon"></i>`;
  } else if (computerClickChoice === "paper") {
    computerHand.innerHTML = `<i class="fa-solid fa-hand hand-icon"></i>`;
  }
}

rockBtn.addEventListener("click", function () {
  // console.log("rock");


  //rock a click olunanda userin secimi rock olur ve playround("rock") olur
  userChoice = "rock";
  playRound(userChoice);
});

paperBtn.addEventListener("click", function () {

  userChoice = "paper";
  playRound(userChoice);
});

scissorsBtn.addEventListener("click", function () {

  userChoice = "scissors";
  playRound(userChoice);
});


resetBtn.addEventListener("click", function () {

   //score lari sifirlayiriq
    playerScore = 0;
    computerScore = 0;

    round = 0;
    

    //html de ekranda yazdiririq
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    roundCount.innerHTML = `Round ${round}`;


    //neticeni yenileyirik
    resultText.textContent = "Seçimini et"
     

    //el ikonlarini evvelki vezyetine qaytaririq
     playerHand.innerHTML = `
        <i class="fa-solid fa-question hand-icon"></i>
    `;

     computerHand.innerHTML = `
        <i class="fa-solid fa-question hand-icon"></i>
    `;


    //kohne rengleri silirik
    playerHand.classList.remove("is-win", "is-lose", "is-draw");
    computerHand.classList.remove("is-win", "is-lose", "is-draw");

})
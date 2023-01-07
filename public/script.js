
const gameStartBtn = document.querySelectorAll(".rpsButton");
const gameScoreDiv = document.querySelector("#player-score");
const eachGuessDiv = document.querySelector("#hands");
const resultDiv = document.querySelector("#result");
const gameEndBtn = document.querySelector("#endGameButton");

const arrayOfRPS = ["Rock", "Paper", "Scissors"];

const computerRPSresult = () => {
  const randomNumber = Math.floor(Math.random() * arrayOfRPS.length);
  return arrayOfRPS[randomNumber];
}

let score = 0;

const resultCompare = (yourGuess, computerGuess) => {
    let message = "";
    if (yourGuess === computerGuess) {
      return "It's a Draw!";
    }

    if (yourGuess === "Rock") {
      if (computerGuess === "Paper") {
        message = "You Lose!";
      } else {
        message = "You Win!";
      }
    } else if (yourGuess === "Paper") {
      if (computerGuess === "Scissors") {
        message = "You Lose!";
      } else {
        message = "You Win!";
      }
    } else if (yourGuess === "Scissors") {
      if (computerGuess === "Rock") {
        message = "You Lose!";
      } else {
        message = "You Win!";
      }
    }

  return message;
}

let totalScore = 0;

gameStartBtn.forEach((btn) => {
  btn.onclick = () =>{
    const yourGuess = btn.getAttribute("value");
    const computerGuess = computerRPSresult();
    const resultMsg = resultCompare(yourGuess, computerGuess);

    if (resultMsg === "You Win!") {
      totalScore++;
    } else if (resultMsg === "It's a Draw!") {
      totalScore;
    } else if (resultMsg === "You Lose!") {
      totalScore--;
    }

    gameScoreDiv.innerHTML = totalScore;
    eachGuessDiv.innerHTML = `👱 ${yourGuess} vs 🤖 ${computerGuess}`;
    resultDiv.innerHTML = resultMsg;

  }
})

gameEndBtn.onclick = () => {
  gameScoreDiv.innerHTML = "";
  eachGuessDiv.innerHTML = "";
  resultDiv.innerHTML = "";
  totalScore = 0;
}

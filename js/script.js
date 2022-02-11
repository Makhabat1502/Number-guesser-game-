let min = 1,
  max = 10,
  winningNum = Math.floor(Math.random() * 10) + 1;
  guessesLeft = 3;

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // validation
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Нужно ввести число от ${min} до ${max}`, "red");
  }

  // check if won
  if (guess === winningNum) {
    guessInput.disabled = true;
    guessInput.style.border = "1px solid green";
    setMessage(`Поздравляю! Вы угадали число ${winningNum}`, "green");
    guessBtn.textContent = "Новая игра";
  } else if (guess !== winningNum) {
      guessesLeft--;
      setMessage(`Вы не угадали. Осталось ${guessesLeft} попыток`, "red");guessInput.style.border = "1px solid red";
   
  }

  if (guessesLeft === 0) {
    guessInput.disabled = true;
    guessBtn.textContent = "Новая игра";
    setMessage(
      `Вы проиграли. Загаданное число: ${winningNum}`
    )

    if ((guessBtn.textContent = "Новая игра")) {
      guessBtn.addEventListener("click", () => window.location.reload());
    }
  }

  guessInput.value = "";
})

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}







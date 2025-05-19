let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function startGame() {
  document.getElementById("landingPage").style.display = "none";
  document.getElementById("gamePage").style.display = "block";
}

function goBack() {
  document.getElementById("gamePage").style.display = "none";
  document.getElementById("landingPage").style.display = "block";
  restartGame();
}

function checkGuess() {
  const userInput = document.getElementById("userInput").value;
  const messageElement = document.getElementById("message");
  const attemptsElement = document.getElementById("attempts");

  if (userInput === "") {
    messageElement.textContent = "Silakan masukkan angka!";
    messageElement.style.color = "red";
    return;
  }

  attempts++;
  attemptsElement.textContent = `Jumlah percobaan: ${attempts}`;

  const guess = parseInt(userInput);

  if (guess < secretNumber) {
    messageElement.textContent = "Terlalu rendah! Coba lagi.";
    messageElement.style.color = "orange";
  } else if (guess > secretNumber) {
    messageElement.textContent = "Terlalu tinggi! Coba lagi.";
    messageElement.style.color = "orange";
  } else {
    messageElement.textContent = `🎉 Selamat! Angkanya ${secretNumber} dan kamu menebaknya dalam ${attempts} percobaan!`;
    messageElement.style.color = "green";
    document.getElementById("restartButton").style.display = "inline-block";
  }
}

function restartGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("userInput").value = "";
  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "Jumlah percobaan: 0";
  document.getElementById("restartButton").style.display = "none";
}

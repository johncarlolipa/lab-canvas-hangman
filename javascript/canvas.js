
class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, 800, 1200);
    this.drawLines();
  }

  drawLines() {
    const wordLength = this.secretWord.length;
    const startX = 250;
    const startY = 700;

    this.context.lineWidth = 2;
    this.context.strokeStyle = "black";

    for (let i = 0; i < wordLength; i++) {
      this.context.beginPath();
      this.context.moveTo(startX + i * 50, startY);
      this.context.lineTo(startX + i * 50 + 40, startY);
      this.context.stroke();
    }
  }

  writeCorrectLetter(index) {
    const startX = 250 + index * 50;
    const startY = 680;

    this.context.font = "30px Arial";
    this.context.fillStyle = "black";
    this.context.fillText(this.secretWord[index].toUpperCase(), startX, startY);
  }

  writeWrongLetter(letter, errorsLeft) {
    const startX = 500 + (10 - errorsLeft) * 30;
    const startY = 100;

    this.context.font = "30px Arial";
    this.context.fillStyle = "red";
    this.context.fillText(letter.toUpperCase(), startX, startY);
  }

  drawHangman(errorsLeft) {
    switch (errorsLeft) {
      case 9:
        // Draw head
        this.context.beginPath();
        this.context.arc(250, 200, 50, 0, Math.PI * 2);
        this.context.stroke();
        break;
      case 8:
        // Draw body
        this.context.beginPath();
        this.context.moveTo(250, 250);
        this.context.lineTo(250, 500);
        this.context.stroke();
        break;
      case 7:
        // Draw left arm
        this.context.beginPath();
        this.context.moveTo(250, 300);
        this.context.lineTo(200, 400);
        this.context.stroke();
        break;
      case 6:
        // Draw right arm
        this.context.beginPath();
        this.context.moveTo(250, 300);
        this.context.lineTo(300, 400);
        this.context.stroke();
        break;
      case 5:
        // Draw left leg
        this.context.beginPath();
        this.context.moveTo(250, 500);
        this.context.lineTo(200, 600);
        this.context.stroke();
        break;
      case 4:
        // Draw right leg
        this.context.beginPath();
        this.context.moveTo(250, 500);
        this.context.lineTo(300, 600);
        this.context.stroke();
        break;
    }
  }

  gameOver() {
    const img = new Image();
    img.src = "./images/gameover.png";

    img.onload = () => {
      this.context.clearRect(0, 0, 800, 1200);
      this.context.drawImage(img, 200, 200, 400, 200);
    };
  }

  winner() {
    const img = new Image();
    img.src = "./images/awesome.png";

    img.onload = () => {
      this.context.clearRect(0, 0, 800, 1200);
      this.context.drawImage(img, 150, 200, 500, 200);
    };
  }
}

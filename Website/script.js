const words = [
  'apple', 'table', 'chair', 'house', 'music',
  'baker', 'lemon', 'beach', 'snake', 'horse',
  'heart', 'fence', 'cloud', 'sunny', 'radio',
  'globe', 'light', 'crown', 'magic', 'tower'
];
const secretWord = words[Math.floor(Math.random() * words.length)];

const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const hintText = document.getElementById('hint-text');
const resultDiv = document.getElementById('result');

let attempts = 0;

guessButton.addEventListener('click', guessWord);

function guessWord() {
  const guess = guessInput.value.toLowerCase();

  if (guess.length !== 5) {
    alert('Please enter a 5-letter word.');
    return;
  }

  attempts++;

  if (guess === secretWord) {
    resultDiv.textContent = `Congratulations! You guessed the word "${secretWord}" in ${attempts} attempts.`;
    disableGame();
  } else {
    const hint = generateHint(guess);
    hintText.textContent = `Hint: ${hint}`;
    guessInput.value = '';
  }
}

function generateHint(guess) {
  let hint = '';

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secretWord[i]) {
      hint += guess[i].toUpperCase();
    } else if (secretWord.includes(guess[i])) {
      hint += guess[i];
    } else {
      hint += '_';
    }
  }

  return hint;
}

function disableGame() {
  guessInput.disabled = true;
  guessButton.disabled = true;
  hintText.textContent = `The secret word was "${secretWord}".`;
}
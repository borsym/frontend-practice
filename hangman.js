const prompt = require('prompt-sync')({ sigint: true });

const REGEX = /[a-z]/gi;

function hangman(life, word) {
  this.life = life;
  this.word = word;
  this.guessedLetters = new Set();
  this.need_to_guess = word.replaceAll(REGEX, '_');
}

function replaceLetters(word, letter) {
  return word
    .split('')
    .map((char, i) => (game.word[i] === letter ? letter : char))
    .join('');
}

function guardFunctions(letter) {
  if (!letter.match(REGEX)) {
    console.log('Please enter a letter!');
    return false;
  }

  if (letter.length > 1) {
    console.log('Please enter only one letter!');
    return false;
  }

  if (game.guessedLetters.has(letter)) {
    console.log('You already guessed this letter!', game.guessedLetters);
    return false;
  }

  return true;
}

function gameLogic(letter) {
  if (!guardFunctions(letter)) {
    return null;
  }

  if (game.word.includes(letter)) {
    return replaceLetters(game.need_to_guess, letter);
  }

  return null;
}

const game = new hangman(5, 'Hi you gussed it!');

while (game.life > 0) {
  console.log(`Remaning life is ${game.life}. The word: ${game.need_to_guess}`);
  const letter = prompt('Enter a letter: ');
  const newWord = gameLogic(letter);
  if (newWord) {
    game.need_to_guess = newWord;
  } else {
    game.life--;
  }

  game.guessedLetters.add(letter);

  if (game.need_to_guess === game.word) {
    console.log('You won!');
    break;
  }
}

if (game.life === 0) {
  console.log('You lost!');
}

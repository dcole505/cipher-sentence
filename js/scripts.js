let userSentence = "";
let cipherSentence = "";

function getUserInput() {
  userSentence = prompt("Please enter a sentence to encode:");
  console.log(userSentence);
  capitalizeFirstAndLast(userSentence);
}

function capitalizeFirstAndLast(userSentence) {
  const firstAndLastLetter = userSentence.charAt(0) + userSentence.charAt(userSentence.length - 1);
  console.log(firstAndLastLetter);
  reverseLetters(firstAndLastLetter.toUpperCase(), userSentence);
}

function reverseLetters(firstAndLastLetter, userSentence) {
  const combinedSentence = userSentence + (firstAndLastLetter.split("").reverse().join(""));
  console.log(combinedSentence);
  insertLetter(userSentence, combinedSentence);
}

function insertLetter(userSentence, combinedSentence) {
  const letterToRemove = Math.floor((userSentence.length / 2));
  const result = userSentence.charAt(letterToRemove) + combinedSentence;
  console.log(result);
  reverseSentence(result);
}

function reverseSentence(result) {
  cipherSentence = (result.split("").reverse().join(""));
  console.log(cipherSentence);
}

getUserInput();
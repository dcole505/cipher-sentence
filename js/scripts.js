let userSentence = "";
let cipherSentence = "";

function getUserInput() {
  userSentence = prompt("Please enter a sentence to encode:");
  capitalizeFirstAndLast(userSentence);
}

function capitalizeFirstAndLast(userSentence) {
  const firstAndLastLetter = userSentence.charAt(0) + userSentence.charAt(userSentence.length - 1);
  reverseLetters(firstAndLastLetter.toUpperCase(), userSentence);
}

function reverseLetters(firstAndLastLetter, userSentence) {
  const combinedSentence = userSentence + (firstAndLastLetter.split("").reverse().join(""));
  insertLetter(userSentence, combinedSentence);
}

function insertLetter(userSentence, combinedSentence) {
  const letterToRemove = Math.floor((userSentence.length / 2));
  const result = userSentence.charAt(letterToRemove) + combinedSentence;
  reverseSentence(result);
}

function reverseSentence(result) {
  cipherSentence = (result.split("").reverse().join(""));
}

getUserInput();

$(document).ready(function() {
  $("p#sentence2").click(function() {
    $("p#sentence2").replaceWith(`<p id="sentence2">${cipherSentence}</p>`);
    $("p#sentence1").replaceWith(`<p id="sentence1">${userSentence}</p>`);
  });
});

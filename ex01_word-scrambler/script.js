//select textarea
let userInput = document.querySelector("#user-input");
//select btn
let submitBtn = document.querySelector("#submit-btn");
//select result container
let resultContainer = document.querySelector("#result-container");
//# select wordCount
let wordCountContainer = document.querySelector("#word-count");
//# select letterCount
let letterCountContainer = document.querySelector("#letter-count");


function getUserInput() {
  //return value of userInput
  return userInput.value; // Waarom .value?
}

function textToWordArray(text) {
  //return array of words
  return text.split('');
}

function arrayToText(array) {
  return array.join(' ');
}

function getRandomNumber(max) {
  //return random number between 0 and max (including 0 and excluding max)
  let randomNumber = Math.floor(max * Math.random());
  return randomNumber;
}

function scrambleArray(oldArray) {
  //return scrambled array
  let newArray = [];
  while (oldArray.length > 0) {
    let randomIndex = getRandomNumber(oldArray.length);
    newArray.push(oldArray[randomIndex]);
    oldArray.split(randomIndex, 1); // Deze stap is mij nog niet duidelijk? Wel het feit dat je de uigehaalde value met index x uit de oude array wilt verwijderen maar niet de manier waarop...
  }
  return newArray;
}

function scrambleText(text) {
  // return scrambled text
  const textArray = textToWordArray(oldText);
  const scrambledArray = scrambleArray(textArray);
  return arrayToText(scrambledArray);
}

function onClickScramble() {
  // update textContent of resultContainer
  const userInputValue = getUserInput();
  resultContainer.textContent = scrambleText(userInputValue);
  // document.querySelector("#result-container").innerHTML = scrambleArray();
}

function realTimeScramble(event) {
  //## update textContent of resultContainer realtime
}

function getWordCount(text) {
  //# return word count
  let wordCount = textToWordArray(text).length; 
  return wordCount;
}

function getLetterCount(text) {
  //# return letter count
  let letterCount = userInput.length - getWordCount() + 1;
  return letterCount;
}

function updateWordCount(wordCount) {
  //# update the Word Count
}

function updateLetterCount(letterCount) {
  //# update the Letter Count
}

function updateCounts(event) {
  //# update Word Count and Letter Count
  let currentText = this.value;
  // this when function is executed by event => event.target
  // this.value == event.target.value
}

//add click event listener to submitBtn
submitBtn.addEventListener("click", onClickScramble);
//# add input event listener to userInput for counts
userInput.addEventListener("input", updateCounts);
//## add input event listener to userinput for realTimeScramble
userInput.addEventListener("input", realTimeScramble);

//select textarea
let userInput = document.getElementById("user-input");
//select btn
let submitBtn = document.getElementById("submit-btn");
//select result container
let resultContainer = document.getElementById("result-container");
//# select wordCount
let wordCountContainer;
//# select letterCount
let letterCountContainer;


function getUserInput() {
  //return value of userInput
  return userInput.value;
}

function textToWordArray(text) {
  //return array of words
  return text.split(" ");
}

function arrayToText(array) {
  return array.join(" ");
}

function getRandomNumber(max) {
  //return random number between 0 and max (including 0 and excluding max)
  return Math.floor(Math.random() * (max));
}

function scrambleArray(oldArray) {
  //return scrambled array
  for (let i = oldArray.length-1; i >=0; i--) {
    let randomIndex = getRandomNumber(i);
    let randomValue = oldArray[randomIndex];
    let arrayValue;

    //randomIndex is de index met de value die we in de index i gaan steken
    // switchen van plaats https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    arrayValue = oldArray[i];
    oldArray[i] = randomValue;
    oldArray[randomIndex] = arrayValue;
  }
  return oldArray;
}

function scrambleText(text) {
  // return scrambled text
  let array = textToWordArray(text);
  let scrambled = scrambleArray(array);
  return arrayToText(scrambled);
}

function onClickScramble() {
  // update textContent of resultContainer
  if(resultContainer.innerHTML != ""){
    resultContainer.innerHTML = "";
  }
  let text = getUserInput();
  let array = scrambleText(text);
  resultContainer.innerHTML = array;
}

function realTimeScramble(event) {
  //## update textContent of resultContainer realtime
}

function getWordCount(text) {
  //# return word count
}

function getLetterCount(text) {
  //# return letter count
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

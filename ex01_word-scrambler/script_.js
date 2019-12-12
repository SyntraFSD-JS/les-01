//select textarea
let userInput = document.querySelector('#user-input');
//select btn
let submitBtn = document.querySelector('#submit-btn');
//select result container
let resultContainer = document.querySelector('#result-container');
//# select wordCount
let wordCountContainer = document.querySelector("#word-count");
//# select letterCount
let letterCountContainer;


function getUserInput() {
    //return value of userInput
    return userInput.value;
}



function textToWordArray(text) {
    //return array of words
    // " " spatie scheidt woorden van elkaar
    return text.trim().split(" ");
}

function arrayToText(array) {
    // return string
    return array.join(" ");
}

function getRandomNumber(max) {
    //return random number between 0 and max (including 0 and excluding max)
    return Math.floor(Math.random()* max);
}

function scrambleArray(oldArray) {
    //return scrambled array
    let newArray = [];

    while(oldArray.length > 0){
        let randomIndex = getRandomNumber(oldArray.length);
        newArray.push(oldArray[randomIndex]);
        oldArray.splice(randomIndex, 1);
            }
            return newArray;
}
//waarom .length? dit returnt hoeveel ellementen er in de array zitten
//push = iets erbij duwen op einde
//splice : bvb 'haal die 5 eruit en vervang ze' of gewoon 'haal die 5 eruit'; eerste getal tussen haakjes is het zoveelste woord en tweede getal is het woord dat moet verwijderd w
//splice in casu = pakt randomindex en hij haalt die eruit
//splice(randomIndex, 2) = pakt randomIndex eruit + de volgende
//splice(randomIndex, 3) = pakt randomIndex eruit + 2 andere

function scrambleText(text) {
    // return scrambled text
}

function onClickScramble() {
    // update textContent of resultContainer
    // woorden pakken die in array moeten
    let inputText = getUserInput();
    let inputTextArray = textToWordArray(inputText);
    let scrambledInputTextArray = scrambleArray(inputTextArray);
    let scrambledInputText = arrayToText(scrambledInputTextArray);
    printScrambledText(scrambledInputText);
}

function printScrambledText(text){
    resultContainer.textContent = text;
}

function realTimeScramble(event) {
    //## update textContent of resultContainer realtime
}

function getWordCount() {
        //# return word count
    //eerst text eruit halen met getUserInput
    //dan variabele maken van functie textToWordArray omdat dat een array maakt van de tekst
    //dan result length van vorige variabele
    let inputText = getUserInput();
    let inputTextArray = textToWordArray(inputText);
    return inputTextArray.length;
        }

function getLetterCount(text) {
    //# return letter count

}

function updateWordCount(wordCount) {
    //# update the Word Count
    wordCountContainer.textContent = getWordCount();
}

function updateLetterCount(letterCount){
    //# update the Letter Count
}

function updateCounts(event) {
    //# update Word Count and Letter Count
    let currentText = this.value;
    // this when function is executed by event => event.target
    // this.value == event.target.value
    updateWordCount();
}

//add click event listener to submitBtn
submitBtn.addEventListener("click", onClickScramble);

//# add input event listener to userInput for counts
userInput.addEventListener("input", updateCounts);
//## add input event listener to userinput for realTimeScramble
userInput.addEventListener("input", realTimeScramble);

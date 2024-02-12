function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string){
    let arrayString = string.split("");
    arrayString = arrayString.reverse();
    let newString = arrayString.join("");
    return newString;
}

const calculator = {
    add : (a ,b) =>{ return a + b;},
    multiply : (a, b) => {return a * b},
    substract : (a, b) => {return a - b},
    divide : (a, b) => {return a / b}
}

// Checks if letter is uppercase/lowercase and returns letter shifted for asked amount
function shiftLetter(letter, shift){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const alphabetCapital = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    if(alphabet.includes(letter)){
        let newShift = alphabet.indexOf(letter) + shift;
        if(newShift < alphabet.length){
            return alphabet[newShift];
        }
        newShift -= alphabet.length;
        return alphabet[newShift];
    } 
    let newShift = alphabetCapital.indexOf(letter) + shift;
    if(newShift < alphabetCapital.length){
        return alphabetCapital[newShift];
    }
    newShift -= alphabetCapital.length;
    return alphabetCapital[newShift];
}

function caesarCipher(string, shift){
    const punctuation = [",", " ", ".", ":", "&", "%", "(", ")", "[", "]", "?", ";", "!"];
    let newWord = "";
    const wordArray = string.split("");
    for(let i = 0;i < wordArray.length;i++){
        if(punctuation.includes(wordArray[i]) || typeof wordArray[i] === 'number'){
            newWord += wordArray[i];
        } else {
            let shifted = shiftLetter(wordArray[i], shift);
            newWord += shifted;
        }
    }
    return newWord;
}

function analyzeArray(numbers){
    const sumOfArray = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      },0);
    const maxOfArray = numbers.reduce((a, b) => Math.max(a, b));
    const minOfArray = numbers.reduce((a, b) => Math.min(a, b));

    const values = {sum: sumOfArray, max: maxOfArray, 
        average: sumOfArray / numbers.length, length: numbers.length, min: minOfArray}
    return values;
}

export {calculator, reverseString, capitalize, analyzeArray, caesarCipher}



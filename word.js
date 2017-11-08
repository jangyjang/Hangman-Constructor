var Letter = require("./letter.js");

var Word = function(chosenWord) {
    this.chosenWord = chosenWord;
    this.attempts = 10;
    this.lettersinthisWordArr = [];
    this.allGuesses = ["n"];

    for (var i = 0; i < this.chosenWord.length; i++) {
            this.lettersinthisWordArr.push(new Letter.Letter(this.chosenWord[i]));
        }
    

    this.checkLetter = function(letter) {
        this.rightLetter = false;
        this.hasLetterBeenUsed = false;
        var letter;
        if (this.allGuesses.indexOf(letter) != -1) {
            this.hasLetterBeenUsed = true;
        } 

        else {
            this.allGuesses.push(letter);
            for (var i = 0; i < this.lettersinthisWordArr.length; i++) {
                if (this.lettersinthisWordArr[i].letter.toLowerCase() == letter) {
                    this.rightLetter = true
                }

                if (!this.rightLetter) {
                    this.attempts--;
                }      
            }
        }
    };
}
//     this.isComplete = function() {
//         for (var i = 0; i < this.lettersinthisWordArr.length; i++) {
//             if (!this.lettterinthisWord[i].show) {
//                 return false;
//             }
//         }
//         return true;
//     };

// // Word.prototype.print = function() {
// //     var output = "";

// //     for (var i = 0; i < this.lettterinthisWord .length; i++) {
// //         output += this.lettterinthisWor[i].printInfo();
// //     }
// //     return output;
// // };

module.exports = Word


var testWord = new Word ("Jang")
console.log(testWord.lettersinthisWordArr)
testWord.checkLetter("a")
//console.log(testWord.checkLetter("b"))
console.log("has letter been used: " + testWord.hasLetterBeenUsed)
console.log("all guesses: " + testWord.allGuesses)
console.log("right letter: " + testWord.rightLetter)
console.log("attempts " + testWord.attempts)

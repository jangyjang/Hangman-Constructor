var fs = require ("fs")
var Letter = require("./letter.js");

var Word = function(randomCountry) {
    this.randomCountry = randomCountry;
    this.lettersinthisWord = []
    this.getCountry = function() {
        fs.readFile("asia_country.txt", "utf8", function(err, data) {
            if (err) {
                return console.log(err);
            }
            var country = data.split(",");
            for (var i = 0; i < country.length; i++) {
                this.randomCountry = country[Math.floor(Math.random() * country.length)];
            }
        });
    }
    this.getLettersinthisWord = function () {
        for (var i = 0; i < this.randomCountry.length; i++) {
            this.lettersinthisWord.push(new Letter.Letter(this.randomCountry[i]));
        }
    }
}
module.exports = Word

var test = new Word ("something")
console.log(test.randomCountry)
test.getLettersinthisWord()
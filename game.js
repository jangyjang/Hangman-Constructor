var fs = require("fs");

var Country = function () {
    //this.country = country
    this.getCountry = function() {
        fs.readFile("asia_country.txt", "utf8", function(err, data) {
            if (err) {
                return console.log(err);
            }
            var country = data.split(",");
            for (var i = 0; i < country.length; i++) {
                var randomCountry = country[Math.floor(Math.random() * country.length)];
                //console.log(ramdomCountry)
                var chosenWord = randomCountry
                console.log(chosenWord)
                module.exports.chosenWord = chosenWord;
            }
        });
    }
}


module.exports = Country

var testCountry = new Country
testCountry.getCountry()
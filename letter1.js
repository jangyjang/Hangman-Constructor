var Letters = function (letter) {
    this.letter = letter;
    this.display = function(){
    	if (this.letter != " "){
    		return "_ "
    	}
    	else{
    		return "  ";
   
    	}
    }
 }

module.exports = Letters

var z = new Letters ("z")
console.log(z.display())
console.log(z)  
var Letter = function (letter) {
    this.letter = letter;
    this.showingonScreen = function(){
    	if (this.letter != " "){
    		return "_ "
    	}
    	else{
    		return "  ";
   
    	}
    }
 }

module.exports = {
    Letter
}


var test = new Letter 
test.showingonScreen()
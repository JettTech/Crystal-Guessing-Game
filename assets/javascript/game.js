// var targetNumber = Math.floor(Math.random()*(121-19)) + 19;

// ----------------------------------------------------------------------------------------------------------------------
// GLOBAL VARIABLES:

function randomNum(min,max){
  return(Math.floor(Math.random()*((max+1) - min)) + min);
}

var crystalClicksNo = randomNum(1,4);
var numberOptions = [randomNum(10,20), randomNum(1,9), randomNum(3,5), randomNum(2,8)];
var targetNumber = 0;
  for (var i = 0; i < numberOptions.length; i++) {
    targetNumber += crystalClicksNo * numberOptions[i];
  }


var gameCounter = 0;
var winCounter = 0;
var loseCounter = 0;
$("#numberToGuess").text(targetNumber);
$("#score").html("Games Won: " + winCounter + ",  Games Lost: " + loseCounter);


// ----------------------------------------------------------------------------------------------------------------------
// CREATION OF CRYSTAL IMAGES AND THEIR VALUES:

for (var i = 0; i < numberOptions.length; i++) {
  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image");
  
  imageCrystal.attr("src", "assets/images/crystalNo1_Pink.jpg"); // pic for crystal img
  imageCrystal.attr("data-crystalvalue", numberOptions[i]); //Note: the .attr("data-crystalvalue") grabs the value out of the "data-crystalvalue" attribute.
  $("#crystals").append(imageCrystal);
}


// ----------------------------------------------------------------------------------------------------------------------
// EVENT HANDLER:

$(".crystal-image").on("click", function() {

  var crystalValue = ($(this).attr("data-crystalvalue")); // Crystal value is extracted from the data-crystalvalue's attribute, which was set above.
  crystalValue = parseInt(crystalValue); // parseInt converts a sting to an integer. --> Since attributes on HTML elements are strings, must convert it to an integer before adding to the counter.
  gameCounter += crystalValue;

  alert("New score: " + gameCounter);

  if (gameCounter === targetNumber) {
    alert("You win!");
    gameCounter = 0; //reset main counter
    winCounter++;
    $("#score").html("Games Won: " + winCounter + ",  Games Lost: " + loseCounter);

    //reset game values for next game
    numberOptions = [randomNum(10,20), randomNum(1,9), randomNum(3,5), randomNum(2,8)];
    targetNumber = crystalClicksNo * (numberOptions[0], numberOptions[1], numberOptions[2], numberOptions[3]);
    $("#numberToGuess").text(targetNumber);
  }

  else if (gameCounter >= targetNumber) {
    alert("You lose!!");
    gameCounter = 0; //reset main counter
    loseCounter++;
    $("#score").html("Games Won: " + winCounter + ",  Games Lost: " + loseCounter);
    
    //reset game values for next game
    numberOptions = [randomNum(10,20), randomNum(1,9), randomNum(3,5), randomNum(2,8)];
    targetNumber = crystalClicksNo * (numberOptions[0], numberOptions[1], numberOptions[2], numberOptions[3]);
    $("#numberToGuess").text(targetNumber);
  }

})
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
var gameCounter = 0;
$("#numberToGuess").text(targetNumber);
$("#score").html("Games Won: " + winCounter + ",  Games Lost: " + loseCounter);
$("#runningTotal").html("Your current score is: " + gameCounter);


// ----------------------------------------------------------------------------------------------------------------------
// CREATION OF CRYSTAL IMAGES AND THEIR VALUES:

for (var i = 0; i < numberOptions.length; i++) {
  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image");
  
  imageCrystal.attr('id', i);
  imageCrystal.attr("src", "assets/images/crystalNo1_Pink.jpg"); // pic for crystal img
  imageCrystal.attr("data-crystalvalue", numberOptions[i]); //Note: the .attr("data-crystalvalue") grabs the value out of the "data-crystalvalue" attribute.
  $("#crystals").append(imageCrystal);
}


// ----------------------------------------------------------------------------------------------------------------------
// EVENT HANDLER:
// A SEPERATE EVENT-HANDLER OPTION= $(document).on("click", ".crystal-image", function() {}

$(".crystal-image").on("click", function() { 

//PLAYING:
  var crystalValue = ($(this).attr("data-crystalvalue")); // Crystal value is extracted from the data-crystalvalue's attribute, which was set above.
  crystalValue = parseInt(crystalValue); // parseInt converts a sting to an integer. --> Since attributes on HTML elements are strings, must convert it to an integer before adding to the counter.
  gameCounter += crystalValue;

  // alert("New score: " + gameCounter); //
  $("#runningTotal").html("Your new score is: " + gameCounter + " !");


//WINNING:
  if (gameCounter === targetNumber) {
    alert("You win!");
    gameCounter = 0; //reset main counter(s)
    winCounter++;
    $("#score").html("Games Won: " + winCounter + ",  Games Lost: " + loseCounter);
    gameCounter = 0;
    $("#runningTotal").html("Your current score is: " + gameCounter);

    //reset game values for next game
    numberOptions = [randomNum(10,20), randomNum(1,9), randomNum(3,5), randomNum(2,8)];
    
    for (var i = 0; i < numberOptions.length; i++) {
      $("#"+i).attr("data-crystalvalue", numberOptions[i]);
    }
    // $("#"+0).attr("data-crystalvalue", numberOptions[0]);
    console.log("new value of 0 is:" + numberOptions[0]);

    targetNumber = 0; 
      for (var i = 0; i < numberOptions.length; i++) {
      targetNumber += crystalClicksNo * numberOptions[i];
    };
    $("#numberToGuess").text(targetNumber);
  }

//LOSING:
  else if (gameCounter > targetNumber) {
    alert("You lose!!");
    gameCounter = 0; //reset main counters
    loseCounter++;
    $("#score").html("Games Won: " + winCounter + ",  Games Lost: " + loseCounter);
    gameCounter = 0;
    $("#runningTotal").html("Your current score is: " + gameCounter);
    
    //reset game values for next game
    numberOptions = [randomNum(10,20), randomNum(1,9), randomNum(3,5), randomNum(2,8)];

    for (var i = 0; i < numberOptions.length; i++) {
      $("#"+i).attr("data-crystalvalue", numberOptions[i]);
    }
    // $("#"+0).attr("data-crystalvalue", numberOptions[0]);
    console.log("new value of 0 is:" + numberOptions[0]);

    targetNumber = 0; 
      for (var i = 0; i < numberOptions.length; i++) {
      targetNumber += crystalClicksNo * numberOptions[i];
    };
    $("#numberToGuess").text(targetNumber); 
  }

})
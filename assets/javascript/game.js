
$(document).ready(function(){

// Make our variables global to the runtime of our application
var wins = 0;
var losses = 0;

// Display value of player total score
var urScore = 0;
$("#userScore").html(urScore);


// Program generates a random number between 19 -120
var rdnNumber = Math.floor(Math.random() * 102) + 19; 
$("#randomNumber").html(rdnNumber);



// // Creates each crystal a hidden value, a random number between 1-12
var redCrystal = Math.floor(Math.random() * 12) +1;  
var greenCrystal = Math.floor(Math.random() * 12) +1;  
var purpleCrystal = Math.floor(Math.random() * 12) +1;  
var yellowCrystal = Math.floor(Math.random() * 12) +1;  

//Checking on console
console.log(urScore);
console.log(rdnNumber);
console.log(redCrystal);
console.log(greenCrystal);
console.log(purpleCrystal);
console.log(yellowCrystal);




// Resets the values of the game
function resetGame(){
  urScore = 0;
  rdnNumber = Math.floor(Math.random() * 102) + 19; 
  redCrystal = Math.floor(Math.random() * 12) +1;
  greenCrystal = Math.floor(Math.random() * 12) +1;  
  purpleCrystal = Math.floor(Math.random() * 12) +1;
  yellowCrystal = Math.floor(Math.random() * 12) +1;
  $("#userScore").html(urScore);
  $("#randomNumber").html(rdnNumber);
  
//Checking on console
console.log(urScore);
console.log(rdnNumber);
console.log(redCrystal);
console.log(greenCrystal);
console.log(purpleCrystal);
console.log(yellowCrystal);

};

// Create function a game win,  player win value wins + 1
function winGame(){
    $("#message1").text("YOU WIN!!");
	$("#message2").text("CLICK ON RESET GAME IF YOU WANT TO START OVER!");
	wins = wins + 1;
	$("#winScore").html("Wins:  " + wins);
	var winSound = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/win.mp3');
		winSound.play();
	alert("You Win!! Click on any crystals to continue play again!");
	resetGame()
};

// Create function a game loss,  player loss value losses + 1
function lossGame(){
	$("#message1").text("YOU LOSS!!");
    $("#message2").text("CLICK ON RESET GAME IF YOU WANT TO START OVER!");
	losses = losses + 1;
	$("#losseScore").html("Losses:  " + losses);
	var loseSound = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/lose.mp3');
		loseSound.play();
	alert("You Loss! Click on any crystals to continue play again!");
	resetGame()
};

//Everytime each crystal is clicked, add each crystal's value to the Total Score and display it

// Create on click function for red crystal
$("#redCrystal").on("click", function(){
	  //Add value to the total score
	   urScore = urScore + redCrystal;
	   //Checking on console
	   console.log("Your total score: " + urScore);
	   $("#userScore").html(urScore);
	   //When click message will disappear
	   $("#message1").text("");
	   $("#message2").text("");

// Checking player win or lose
	   if (urScore === rdnNumber){
		   winGame();
	   }else if (urScore > rdnNumber){
		   lossGame();
	   }

});

// Create on click function for green crystal
$("#greenCrystal").on("click", function(){
	//Add value to the total score
	 urScore = urScore + greenCrystal;
	 //Checking on console
	 console.log("Your total score: " + urScore);
	 $("#userScore").html(urScore);
	 //When click message will disappear
	 $("#message1").text("");
	 $("#message2").text("");

// Checking player win or lose
	 if (urScore === rdnNumber){
		 winGame();
	 }else if (urScore > rdnNumber){
		 lossGame();
	 }

});

// Create on click function for purple crystal
$("#purpleCrystal").on("click", function(){
	//Add value to the total score
	 urScore = urScore + purpleCrystal;
	 //Checking on console
	 console.log("Your total score: " + urScore);
	 $("#userScore").html(urScore);
	 //When click message will disappear
	 $("#message1").text("");
	 $("#message2").text("");

// Checking player win or lose
	 if (urScore === rdnNumber){
		 winGame();
	 }else if (urScore > rdnNumber){
		 lossGame();
	 }

});

// Create on click function for yellow crystal
$("#yellowCrystal").on("click", function(){
	//Add value to the total score
	 urScore = urScore + yellowCrystal;
	 //Checking on console
	 console.log("Your total score: " + urScore);
	 $("#userScore").html(urScore);
	 //When click message will disappear
	 $("#message1").text("");
	 $("#message2").text("");

// Checking player win or lose
	 if (urScore === rdnNumber){
		 winGame();
	 }else if (urScore > rdnNumber){
		 lossGame();
	 }

});


//Reset Game Stats
		//When the user clicks on the reset button, reset all game stats:
		$("#resetBtn").on("click", function(){
			wins = 0;
            losses = 0;
			urScore = 0;
			rdnNumber = Math.floor(Math.random() * 102) + 19; 
			redCrystal = Math.floor(Math.random() * 12) +1;
			greenCrystal = Math.floor(Math.random() * 12) +1;  
			purpleCrystal = Math.floor(Math.random() * 12) +1;
			yellowCrystal = Math.floor(Math.random() * 12) +1;
			$("#userScore").html(urScore);
			$("#randomNumber").html(rdnNumber);
			$("#winScore").html("Wins:  " + wins);
			$("#losseScore").html("Losses:  " + losses);
			$("#message1").text("");
	        $("#message2").text("");

		
		  //Checking on console
		  console.log(wins);
		  console.log(losses);
		  console.log(urScore);
		  console.log(rdnNumber);
		  console.log(redCrystal);
		  console.log(greenCrystal);
		  console.log(purpleCrystal);
		  console.log(yellowCrystal);
		  
		  });
	
});






$(document).ready(function(){

	/* Generate new random number on load */
  	var randomNumber = Math.floor(Math.random() * 101);
  	console.log(randomNumber);

  	/* Store user inputs in an array */
  	var userInputs = [];

  	/* Guess Counter */
  	var guessCounter= 0;
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	
  	/* New Game- Generate new random number on click */
  	$('li').on('click', '.new', function() {
  		
  		/* generate a new random number */
  		randomNumber = Math.floor(Math.random() * 101);
  		console.log(randomNumber);

  		/* clear user input */
  		$('#userGuess').val(' ');
  		/* clear guess counter */
  		$('#count').text(0);
  		$('#guessList').empty();

  	});

  	/* what to do on user input on guess button */
  	$('form').on('blur', '#userGuess', function(event) {
  		
  		
  		/*create local variable to store user ipnut */
  		var userInput = +$(this).val();
  		
  		/* if user input is numeric, less than 100 and and an integer */
  		if($.isNumeric(userInput) && +userInput <= 100 && userInput % 1 === 0) {
	  		/*push userNumber to userNumbers array */
	  		userInputs.push(+$(this).val());
	  		console.log(userInputs);
	  		/*increase the guess counter */
	  		guessCounter++
	  		console.log(guessCounter);
	  		/* update guest counter text */
	  		$('#count').text(guessCounter);
	  		/* add most recent guess as an li to the guessList ul */
	  		$('#guessList').append("<li>"+userInput+"</li>")

	  		/* If it's the user's first guess tell correct or hot or cold */
	  		if (guessCounter < 2) {

	  			if (randomNumber == userInput ) {
	  				$('#feedback').text("you got it!");
	  			}

		  		else if ((Math.abs(randomNumber - userInput)) < 30) {
		  			$('#feedback').text("Warm!");

		  		}
		  		else {
		  			$('#feedback').text("Cold!");
		  		}
		  		
		  	}

		  	/* for each subsequent guess tell the user if their correct or colder or warmer */
		  	else {
		  		console.log("most recent = " + userInputs[(guessCounter-1)]);
		  		console.log("prior = " + userInputs[(guessCounter-2)]);

		  		if (randomNumber == userInputs[(guessCounter - 1)]) {
		  			
		  			$('#feedback').text("you got it!");
		  		}

		  		else if (Math.abs(randomNumber - userInputs[(guessCounter-1)]) < Math.abs(randomNumber - userInputs[(guessCounter-2)])) {
		  			$('#feedback').text("Warmer!");
		  		}

	  	  		else {
	  				$('#feedback').text("Colder!");	
		  		}
		  	}
		
  		}
	  	/*if input is not all of the following- numeric, less than 100 and an int alert the user */
	  	else {
	  		alert("Please only enter integers that are 100 or less!");
	  	}
		
  	});







  	/* what to do on user input on guess button */
  	$('form').on('keypress', '#userGuess', function(event) {
  		
  		if(event.which == '13'){
	  		/*create local variable to store user ipnut */
	  		var userInput = +$(this).val();
	  		
	  		/* if user input is numeric, less than 100 and and an integer */
	  		if($.isNumeric(userInput) && +userInput <= 100 && userInput % 1 === 0) {
		  		/*push userNumber to userNumbers array */
		  		userInputs.push(+$(this).val());
		  		console.log(userInputs);
		  		/*increase the guess counter */
		  		guessCounter++
		  		console.log(guessCounter);
		  		/* update guest counter text */
		  		$('#count').text(guessCounter);
		  		/* add most recent guess as an li to the guessList ul */
		  		$('#guessList').append("<li>"+userInput+"</li>")

		  		/* If it's the user's first guess tell correct or hot or cold */
		  		if (guessCounter < 2) {

		  			if (randomNumber == userInput ) {
		  				$('#feedback').text("you got it!");
		  			}

			  		else if ((Math.abs(randomNumber - userInput)) < 30) {
			  			$('#feedback').text("Warm!");

			  		}
			  		else {
			  			$('#feedback').text("Cold!");
			  		}
			  		
			  	}

			  	/* for each subsequent guess tell the user if their correct or colder or warmer */
			  	else {
			  		console.log("most recent = " + userInputs[(guessCounter-1)]);
			  		console.log("prior = " + userInputs[(guessCounter-2)]);

			  		if (randomNumber == userInputs[(guessCounter - 1)]) {
			  			
			  			$('#feedback').text("you got it!");
			  		}

			  		else if (Math.abs(randomNumber - userInputs[(guessCounter-1)]) < Math.abs(randomNumber - userInputs[(guessCounter-2)])) {
			  			$('#feedback').text("Warmer!");
			  		}

		  	  		else {
		  				$('#feedback').text("Colder!");	
			  		}
			  	}
			
	  		}
		  	/*if input is not all of the following- numeric, less than 100 and an int alert the user */
		  	else {
		  		alert("Please only enter integers that are 100 or less!");
		  	}
		}
  	});


















  	/* Prevent click on guess submit button from refrshing DOM */
  	$('form').on('click', '#guessButton', function(e) {
  			e.preventDefault();
  		
  	});



  

});



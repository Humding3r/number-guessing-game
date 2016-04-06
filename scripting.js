var max = $("input[name=maximum]").val();

var number = Math.floor((Math.random() * max) + 1);
console.log("Looking at the source code, eh? Cheater...");
console.log(number);

$(document).ready(function() {
    $("#fromXtoY").empty();
    $("<p>I'm thinking of a number between 1 and " + max + ". What is it?</p>").appendTo("#fromXtoY");
  $("#reset").click(function() {
     max = $("input[name=maximum]").val();
    number = Math.floor((Math.random() * max) + 1);
    $("#fromXtoY").empty();
    $("<p>I'm thinking of a number between 1 and " + max + ". What is it?</p>").appendTo("#fromXtoY");
	console.log(number);
  });

	$("#submit").click(function() {
		var playerGuess = $("input[name=guess]").val();
		if (playerGuess == number) {
			$('#result').empty();
			$('<p>Congrats! ' + playerGuess + ' was right! You fiddled the riddle!</p>').appendTo('#result');
		} else if (playerGuess < number) {
			$('#result').empty();
			$('<p>Your guess, ' + playerGuess + ', was too low. Try again.</p>').appendTo('#result');
		} else if (playerGuess > number) {
			$('#result').empty();
			$('<p>Your guess, ' + playerGuess + ', was too high. Try again.</p>').appendTo('#result');
		}
	});
	$("#reset").hover(function() {
		$("#reset").css("background-color", "rgb(0, 186, 255)");
	},
	function() {
		$("#reset").css("background-color", "lightblue");
	});

	$("#submit").hover(function() {
		$("#submit").css("background-color", "rgb(0, 186, 255)");
	},

	function() {
		$("#submit").css("background-color", "lightblue");
	});

    $("input[name=guess]").keypress(function( event ) {
        if (event.which == 13) {
            var playerGuessForEnter = $("input[name=guess]").val();

            if (playerGuessForEnter == number) {
               $('#result').empty();
               $('<p>Congrats! ' + playerGuessForEnter + ' was right! You fiddled the riddle!</p>').appendTo('#result');
           } else if (playerGuessForEnter < number) {
               $('#result').empty();
               $('<p>Your guess, ' + playerGuessForEnter + ', was too low. Try again.</p>').appendTo('#result');
           } else if (playerGuessForEnter > number) {
               $('#result').empty();
               $('<p>Your guess, ' + playerGuessForEnter + ', was too high. Try again.</p>').appendTo('#result');
           }
        }
    });

});

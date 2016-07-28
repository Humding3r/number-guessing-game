var max = $("input[name=maximum]").val();

var number = Math.floor((Math.random() * max) + 1);
console.log("Looking at the source code, eh? Cheater...");
console.log("Whatever, the number is 13.37.");

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
        if (playerGuess == 13.37) {
            $('#result').empty();
            $('<p>Wha-- WHAT?! ARE YOU SERIOUS, MAN?! WHY ARE YOU CHEATIN\'!??!?!?!?!??!?!?!?!?');
        } else if (playerGuess == number) {
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

});

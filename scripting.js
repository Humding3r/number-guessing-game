var number = Math.floor((Math.random() * 100000) + 1);
console.log("Looking at the source code, eh? Cheater...");
console.log(number);

$(document).ready(function() {
  $("#reset").click(function() {
    number = Math.floor((Math.random() * 100000) + 1);
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

});

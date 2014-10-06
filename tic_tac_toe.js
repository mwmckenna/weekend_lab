
console.log("JavaScript is running");
	

var currentTurn = "X";

var moves = {
	changeElement: function(piece) {
		if (currentTurn == "X") {
			$("#" + piece).html("X");
			
			this.checkWin();
			
			currentTurn = "O";
		} else {
			$("#" + piece).html("O");
			
			this.checkWin();
			
			currentTurn = "X";
		}
	},
	

checkWin: function() {
		function sayWinner() {
			alert(currentTurn + " Wins!");
			return false;
		}
		
		var rowA = [$("#1").html(), $("#2").html(), $("#3").html()];
		var rowB = [$("#4").html(), $("#5").html(), $("#6").html()];
		var rowC = [$("#7").html(), $("#8").html(), $("#9").html()];
		
		var colA = [$("#1").html(), $("#4").html(), $("#7").html()];
		var colB = [$("#2").html(), $("#5").html(), $("#8").html()];
		var colC = [$("#3").html(), $("#6").html(), $("#9").html()];
		
		var diagOne = [$("#1").html(), $("#5").html(), $("#9").html()];
		var diagTwo = [$("#3").html(), $("#5").html(), $("#7").html()];
		
		
		if (rowA[0] === rowA[1] && rowA[2] === rowA[0] && rowA[0] !== "") {
			sayWinner();
		} else if (rowB[0] === rowB[1] && rowB[2] === rowB[0] && rowB[0] !== "") {
			sayWinner();
		} else if (rowC[0] === rowC[1] && rowC[2] === rowC[0] && rowC[0] !== "") {
			sayWinner();
		}
		
		if (colA[0] === colA[1] && colA[2] === colA[0] && colA[0] !== "") {
			sayWinner();
		} else if (colB[0] === colB[1] && colB[2] === colB[0] && colB[0] !== "") {
			sayWinner();
		} else if (colC[0] === colC[1] && colC[2] === colC[0] && colC[0] !== "") {
			sayWinner();
		}

		
		if (diagOne[0] === diagOne[1] && diagOne[2] === diagOne[0] && diagOne[0] !== "") {
			sayWinner();
		} else if (diagTwo[0] === diagTwo[1] && diagTwo[2] === diagTwo[0] && diagTwo[0] !== "") {
			sayWinner();
		}
	}
};

$(".game-board td").on("click", function() {
	if ($(this).html() !== "") {
		alert("This spot has been taken...Sorry!");
		return false;
	} else {
		var gamePiece = $(this).attr("id");
		moves.changeElement(gamePiece);
	}
});

var tiles = document.querySelectorAll("#tile");

tiles.style.backgroundColor = "yellow";


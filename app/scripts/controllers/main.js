'use strict;'

angular.module('wdiApp').controller('MainCtrl', function ($scope, angularFire){
	var isXTurn = true;
	 $scope.queue = {};
  

var board = new Firebase("https://newtic-jason.firebaseio.com/board");
  angularFire(board, $scope, "board").then(function () {

var queue = new Firebase("https://newtic-jason.firebaseio.com/queue");
  angularFire(queue, $scope, "queue").then(function () {
    
    if ($scope.queue.gameId == undefined) {
      console.log("I'm player 1");
      $scope.player = "p1";

      var newGame = {
        board: [[{square: ""},{square: ""},{square: ""}],[{square: ""},{square: ""},{square: ""}],[{square: ""},{square: ""},{square: ""}]],
        turn: 'p1',
        //win: false,
        turnCount: 0
      };

      $scope.gameId = $scope.board.push(newGame) - 1;

      //create game
      //add game id to queue
      $scope.queue.gameId = $scope.gameId;
      console.log("Player 1's game is: " + $scope.gameId);

    } else {
      console.log("I'm player 2");
      $scope.player = "p2";
      
      //read game id from queue
      //clear the queue
      $scope.gameId = $scope.queue.gameId;
      $scope.queue = {};
      console.log("Player 2's game is: " + $scope.gameId);



    };
  });

    $scope.hello = function () {
      $scope.games[$scope.gameId].board[0]
    }

	$scope.clickDiv = function (cell){
		if(cell.square != "")
			return;
		
		if(isXTurn)
			cell.square = "X";
		else
			cell.square = "O";
		

		isXTurn = !isXTurn; 
		$scope.checkWin(); 

		};

	$scope.checkWin = function(cell) {
	

if($scope.board[0][0].square == "X" &&
  $scope.board[0][1].square == "X" &&
  $scope.board[0][2].square == "X") {alert("X wins!")}

else if($scope.board[1][0].square  == "X" &&
  $scope.board[1][1].square  == "X" &&
  $scope.board[1][2].square  == "X") {alert("X wins!")}

else if($scope.board[2][0].square  == "X" &&
  $scope.board[2][1].square  == "X" &&
  $scope.board[2][2].square  == "X") {alert("X wins!")}


	//column X wins

else if($scope.board[0][0].square  == "X" &&
  $scope.board[1][0].square  == "X" &&
  $scope.board[2][0].square  == "X") {alert("X wins!")}

else if($scope.board[0][1].square  == "X" &&
  $scope.board[1][1].square  == "X" &&
  $scope.board[2][1].square  == "X") {alert("X wins!")}

else if($scope.board[0][2].square  == "X" &&
  $scope.board[1][2].square  == "X" &&
  $scope.board[2][2].square  == "X") {alert("X wins!")}

  	//diagonal X wins

  else if($scope.board[0][0].square  == "X" &&
  $scope.board[1][1].square  == "X" &&
  $scope.board[2][2].square  == "X") {alert("X wins!")}

  else if($scope.board[2][0].square  == "X" &&
  $scope.board[1][1].square  == "X" &&
  $scope.board[0][2].square  == "X") {alert("X wins!")}	

  	//column O wins

  else if($scope.board[0][0].square  == "O" &&
  $scope.board[0][1].square  == "O" &&
  $scope.board[0][2].square  == "O") {alert("O wins!")}

else if($scope.board[1][0].square  == "O" &&
  $scope.board[1][1].square  == "O" &&
  $scope.board[1][2].square  == "O") {alert("O wins!")}

else if($scope.board[2][0].square  == "O" &&
  $scope.board[2][1].square  == "O" &&
  $scope.board[2][2].square  == "O") {alert("O wins!")}


	//column O wins

else if($scope.board[0][0].square  == "O" &&
  $scope.board[1][0].square  == "O" &&
  $scope.board[2][0].square  == "O") {alert("O wins!")}

else if($scope.board[0][1].square  == "O" &&
  $scope.board[1][1].square  == "O" &&
  $scope.board[2][1].square  == "O") {alert("O wins!")}

else if($scope.board[0][2].square  == "O" &&
  $scope.board[1][2].square  == "O" &&
  $scope.board[2][2].square  == "O") {alert("O wins!")}

  	//diagonal O wins

  else if($scope.board[0][0].square  == "O" &&
  $scope.board[1][1].square  == "O" &&
  $scope.board[2][2].square  == "O") {alert("O wins!")}

  else if($scope.board[2][0].square  == "O" &&
  $scope.board[1][1].square  == "O" &&
  $scope.board[0][2].square  == "O") {alert("O wins!")}



}


	 var ref = new Firebase("https://newtic-jason.firebaseio.com/board");
	  angularFire(ref, $scope, "board", {})
     angularFire(ref, $scope, "turncount", {})
     

	
});

});
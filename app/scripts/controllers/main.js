'use strict;'

angular.module('wdiApp').controller('MainCtrl', function ($scope, angularFire){
	var isXTurn = true;
	$scope.board = [[{square: ""},{square: ""},{square: ""}],[{square: ""},{square: ""},{square: ""}],[{square: ""},{square: ""},{square: ""}]];
;

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


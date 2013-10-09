'use strict;'

angular.module('wdiApp').controller('MainCtrl', function ($scope){
	var isXTurn = true;
	$scope.board = [[{square: ""},{square: ""},{square: ""}],[{square: ""},{square: ""},{square: ""}],[{square: ""},{square: ""},{square: ""}]];

	$scope.clickDiv = function (cell){
		if(cell.square != "")
			return;
		
		if(isXTurn)
			cell.square = "X";
		else
			cell.square = "O";
		

		isXTurn = !isXTurn
	};
	
});


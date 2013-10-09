'use strict;'

angular.module('wdiApp').controller('MainCtrl', function ($scope){

});

var isXTurn = true;
var board = [["","",""],["","",""],["","",""]];

function clickDiv(){
	if(event.target.innerHTML != "")
		return;
	var moveLetter;
	if(isXTurn)
		moveLetter = "X";
	else
		moveLetter = "O";
	event.target.innerHTML = moveLetter;

	board[(event.target.id[0]) - 1][(event.target.id[2]) - 1]
		= moveLetter;

		isXTurn = !isXTurn
}
function pageLoaded(){
	var box = document.getElementsByClassName("box");
	for(i=0;i<box.length;++i)
		box[i].onclick = clickDiv;
}


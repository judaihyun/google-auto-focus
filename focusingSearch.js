
'use strict'


/*
	ArrowDown : 40
	ArrowRight : 39
	ArrowUp : 38
	ArrowLeft : 37

let value = {
 				ArrowDown : 40,
 				ArrowRight : 39, 
 				ArrowUp : 38, 
 				ArrowLeft : 37 
 			};
 			
 */

	window.onkeydown = function(event)
	{
		var queryEle = document.getElementsByTagName('input').namedItem('q');
		var keyCode = event.keyCode;
		if(queryEle != document.activeElement)
		{
			queryEle.selectionStart = queryEle.selectionEnd = queryEle.value.length;
			queryEle.focus();
		}
	}


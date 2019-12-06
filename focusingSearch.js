
'use strict'


window.onkeydown = function(event)
{
	var queryEle = document.getElementsByName('q')[0];
	var keyCode = event.keyCode;
	if(queryEle != document.activeElement)
	{
		if(keyCode===8) queryEle.value = '';
		queryEle.selectionStart = queryEle.selectionEnd = queryEle.value.length;
		queryEle.focus();
	}
}


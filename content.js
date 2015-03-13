window.onload = function() {	
	localStorage.setItem('favoriteflavor','vanilla');
	document.getElementById("button").onclick = function() {
		alert(localStorage.getItem('favoriteflavor'));
	}
}
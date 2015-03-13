/*chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
	switch(message.type) {
		case "colors-div":
			var divs = document.querySelectorAll("div");
			if(divs.length === 0) {
				alert("There are no any divs in the page.");
			} else {
				for(var i=0; i<divs.length; i++) {
					divs[i].style.backgroundColor = message.color;
				}
			}
		break;
	}
});*/

window.onload = function() {	
	//var divs = document.querySelectorAll("div");
	//for(var i=0; i<divs.length; i++) {
	//	divs[i].style.backgroundColor = "blue";
	//}
	localStorage.setItem('favoriteflavor','vanilla');
	document.getElementById("button").onclick = function() {
		alert(localStorage.getItem('favoriteflavor'));
	}
}
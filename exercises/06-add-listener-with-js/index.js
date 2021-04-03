window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
	buttonGreen.addEventListener("click", wuju);
};

//the listener function here

let buttonGreen = document.getElementById("theGreen");

function wuju() {
	alert("WUJUUUU! It works");
}

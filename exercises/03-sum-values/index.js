// adding the function to the window makes it globally available
window.calculateSumListener = function() {
	//Return the value of the input #firstNumber
	var stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	var stringB = document.getElementById("secondNumber").value;

	//your code goes here
	let resultInput = document.getElementById("resultNumber");
	let numberA = parseInt(stringA);
	let numberB = parseInt(stringB);

	let sum = numberA + numberB;

	resultInput.value = sum;
};

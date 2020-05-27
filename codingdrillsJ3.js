window.onload = function(){
    var formhanlde = document.forms.input_form;
	formhanlde.onsubmit = validation;
    function validation() 
	{
		var integer = parseInt(document.forms[0].integer_value.value);//getting integer value
		var pattern = document.getElementById("pattern");//getting div id to print value
		//if condition to check if integer is less than 25
		if(integer <= 25)
		{
			// I searched a lot about how to print multiple * value
			// then in www.stackoverflow I found .repeat method to repeat characters 
			// Earlier I was trying to use &nbsp; to put space But the output was not displaying correctly
			// Then I found \xa0 to put space in pattern
			pattern.innerHTML = ("*".repeat(integer) + "x".repeat(integer) + "*".repeat(integer) + "</br>").repeat(integer) + 
								("\xa0\xa0".repeat(integer) + "x".repeat(integer) + "x".repeat(integer) + "</br>").repeat(integer) +
								("*".repeat(integer) + "\xa0\xa0".repeat(integer) + "*".repeat(integer) + "</br>").repeat(integer);
			return false;	
		}
		// else statement to check if input is greater than 25 and returning an error message
		else
		{
			pattern.innerHTML = "Please enter integer between 1 and 25 ";
			return false;
		}
	}
	}
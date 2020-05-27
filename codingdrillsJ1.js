window.onload = function(){
    var formhanlde = document.forms.input_form;
	formhanlde.onsubmit = validation;
    function validation() 
	{
		var first_integer = document.forms[0].FirstInteger.value;//getting first integer value into a variable
		var second_integer = document.forms[0].SecondInteger.value;//getting second integer value into a variable
		var third_integer = document.forms[0].ThirdInteger.value;//getting third integer value into a variable
		var result = document.getElementById("result");//getting id of empty div to display result value
		//using parseInt method to convert string variables into integers so as to calculate their sum
		var integers_sum = parseInt(first_integer) + parseInt(second_integer) + parseInt(third_integer);
		//using if statement to check whether all three integers are greater than 0
		if(first_integer > 0 && second_integer > 0 && third_integer > 0)
		{
			//using if statement to check if all three varaiables are less than 180
			if(first_integer < 180  && second_integer < 180 && third_integer < 180)
			{
				//using if statement to determine if all three integers are 60 then traingle is equilateral
				if(first_integer == 60 && second_integer == 60 && third_integer == 60)
				{
					result.innerHTML = "Traingle is Equilateral";
					return false;
				}
				//using if statement to determine
				//if sum of three variables is 180 and two of them are same
				if((integers_sum === 180) && (first_integer === second_integer || second_integer === third_integer || first_integer === third_integer))
				{
					//if condition is true traingle is isosceles
					result.innerHTML = "Traingle is Isosceles";
					return false;
				}
				//using if statement to check if sum of all three varaiables is 180 but two of them are not same
				if((integers_sum === 180) && (first_integer != second_integer || second_integer != third_integer || first_integer != third_integer))
				{
					//if condition is true traingle is scalene
					result.innerHTML = "Traingle is Scalene";
					return false;
				}
				//using if statement to check if sum of three varaibles is not 180
				if(integers_sum != 180)
				{
					//if condition is true there is an error
					result.innerHTML = "Error";
					return false;
				}
			}
		}
		else if (first_integer === "" || second_integer === "" || third_integer === "")
		{
			result.innerHTML = "Please enter all integer values";
			return false;
		}
	}
	return false;
}
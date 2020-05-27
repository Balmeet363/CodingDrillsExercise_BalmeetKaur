window.onload = function(){
    var formhanlde = document.forms.votecount_form;
	formhanlde.onsubmit = validation;
    function validation() 
	{
		var total_votes = parseInt(document.forms[0].total_votes.value);//getting total_votes value and converting it to integer
		var characters = document.forms[0].characters_sequence.value;//getting characters sequence entered by user
		var characters_length = parseInt(characters.length);//getting length of total characters
		var result = document.getElementById("result_message"); //result div to display result message
		var charactersErr = document.getElementById("charactersErr");//variable to display error message after entering characters sequence
		var votesErr = document.getElementById("votesErr");//variable to display error message if votes are not in range1<=V<=15
		var singerA = 0;
		var singerB = 0;
		//using if statement to check if total votes are greater than or equal to 1 or less than or equal to 15
		if (total_votes >= 1 && total_votes <=15)
		{
			//using logic to check if user enters same characters of sequence as per total number of votes
			if(total_votes === characters_length)
			{
				//using for loop to match character by character from sequence of characters
				// as which singer won can be counted as how many votes per that singer
				//such as if sequence is aabbaa then a occurs 4 times so singerA is winner
				for(var i=0;i<characters_length;i++)
				{
					//logic to check if user enters some other character except a or b
					if(characters[i] !== "a" && characters[i] !== "b")
					{
						charactersErr.innerHTML = "please enter vote characters either A or B";
						result.innerHTML = "";
						return false;
					}
					else
					{
						//if statement to count number of a characters in sequence of characters
					if(characters[i] === "a" || characters[i] === "A")
					{
						singerA++;
						charactersErr.innerHTML = "";
						result.innerHTML = "";
						
					}
					//if statement to count number of b characters in sequence of characters 
					if(characters[i] === "b" || characters[i] === "B")
					{
						singerB++;
						charactersErr.innerHTML = "";
						result.innerHTML = "";
					}
					}					
				}
				//logic to check if singerA votes are higher than singerB votes
				if(parseInt(singerA) > parseInt(singerB))
				{
					result.innerHTML = "A";
					return false;
				}
				//if singerB votes are higher than singerA votes
				if(parseInt(singerA) < parseInt(singerB))
				{
					result.innerHTML = "B";
					return false;
				}//if both singerA and singerB votes are equal
				if(parseInt(singerA) === parseInt(singerB))
				{
					result.innerHTML = "Tie";
					return false;
				}
				return false;
			}
            else //else statement so that user enters as many characters as total number of votes
			{
				charactersErr.innerHTML = "please enter characters as per total number of votes";
				result.innerHTML = "";
				votesErr.innerHTML = "";
				return false;
			}				
		}
		else//else statement to check to display message that total votes are in range 1<=V<=15
		{
			votesErr.innerHTML = "Total votes range only between 1 and 15";
			return false;
		}
		
	}
}
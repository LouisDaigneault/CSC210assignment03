// don't execute any JS until after the DOM is loaded
document.addEventListener("DOMContentLoaded", function() 
{

	// create "handles" on the buttons from the HTML
	var ingredientsButton = document.getElementById("showNextIngredients");
	var stepsButton = document.getElementById("showNextSteps");

	// create "handles" on the lists
	var ingredientsList = document.getElementById("ingredientsList");
	var stepsList = document.getElementById("stepsList");

	// get the lengths of the lists
	var ingredientsListLength = ingredientsList.children.length;
	var stepsListLength = stepsList.children.length;

	// for each item in the lists, set their display value to "none" (hide them)
	for (var i = 0; i < ingredientsListLength; i++) {
		ingredientsList.children[i].style.display ="none";
	}
	for (var i = 0; i < stepsListLength; i++) {
		stepsList.children[i].style.display ="none";
	}

	var ingredientsListHead = 0;
	var stepsListHead = 0;
	var enjoyedFired = 0;

	ingredientsButton.addEventListener("click", function() 
	{
		ingredientsListHead += ingredientCalc(ingredientsListLength, ingredientsListHead, ingredientsList);

		
		if(ingredientsListHead >= ingredientsListLength && enjoyedFired != 1)
		{
			 enjoyedFired = enjoyMessage(ingredientsListHead, ingredientsListLength, stepsListHead, stepsListLength);
		}
		
	});

	stepsButton.addEventListener("click", function() 
	{
		
		stepsListHead += stepsCalc(stepsListLength, stepsListHead, stepsList);

		if(stepsListHead >= stepsListLength && enjoyedFired != 1)
		{
			enjoyedFired = enjoyMessage(ingredientsListHead, ingredientsListLength, stepsListHead, stepsListLength);
		}
		
	});

	//console.log("ing " + ingredientsListHead + " " + ingredientsListLength + " step " + stepsListHead + " " + stepsListLength);

});

function ingredientCalc(ingredientsListLength, ingredientsListHead, ingredientsList)
{
	if (ingredientsListLength > ingredientsListHead) 
		{
			ingredientsList.children[ingredientsListHead].style.display="revert";
		}

		return 1;

}

function stepsCalc( stepsListLength, stepsListHead, stepsList)
{
	if(stepsListLength > stepsListHead)
		{
			stepsList.children[stepsListHead].style.display="revert";		
		}

		return 1;
}

function enjoyMessage(ingredientsListHead, ingredientsListLength, stepsListHead, stepsListLength )
{
	if(ingredientsListHead >= ingredientsListLength && stepsListHead >= stepsListLength)
	{
		alert("Enjoy the recipe!")

		return 1;
	}

	return 0;
}
const foodKey = "93332e8ccaef48679b22fa190b412297";
var userIngredients = "";




async function fetchRecipes() {
  fetch(
    "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
      userIngredients +
      "&number=4&apiKey=" +
      foodKey
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);



      var recipe1Name = data[0].title 
      var recipe2Name = data[1].title
      var recipe3Name = data[2].title 
      var recipe4Name = data[3].title 

      //var recipe1Description = data[0].
      
      var recipeImage1 = data[0].image
      var recipeImage2 = data[1].image
      var recipeImage3 = data[2].image
      var recipeImage4 = data[3].image

      console.log(recipe1Name);
      





      $("#results-header").text('Here are your results.');

        $("#title1").text(recipe1Name);
				$("#title2").text(recipe2Name);
				$("#title3").text(recipe3Name);
				$("#title4").text(recipe4Name);

        $("#recipeImage1").attr("src", recipeImage1);
				$("#recipeImage1").attr("alt", recipe1Name);

				$("#recipeImage2").attr("src", recipeImage2);
				$("#recipeImage2").attr("alt", recipe2Name);

				$("#recipeImage3").attr("src", recipeImage3);
				$("#recipeImage3").attr("alt", recipe3Name);

				$("#recipeImage4").attr("src", recipeImage4);
				$("#recipeImage4").attr("alt", recipe4Name);

			


     


    });


    

  

     
    
}

function addIngredient() {
  userIngredients = document.querySelector("#ingredientInput").value;

  console.log(userIngredients);
  fetchRecipes();
}

document
  .getElementById("searchButton")
  .addEventListener("click", addIngredient);

//document.getElementById("searchButton").addEventListener("click", fetchRecipes);

//function fetchDrinks() {
// fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
//.then(response => response.json())
/// .then(data => console.log(data));

//}

//function fetchRecipes() {
// fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + userIngredients +'&=4&//////apiKey=' +  foodKey)
// .then(response => response.json())
// .then(data => console.log(data));

//}

//fetchRecipes();
//fetchDrinks();

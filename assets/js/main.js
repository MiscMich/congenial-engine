

function fetchDrinks() {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
  .then(response => response.json())
  .then(data => console.log(data));

  

  
}

function fetchRecipes() {
  fetch('https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2')
  .then(response => response.json())
  .then(data => console.log(data));

}

fetchRecipes();
fetchDrinks();
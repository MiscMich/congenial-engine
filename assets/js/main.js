let weatherTemperature = document.getElementById(
  "weather-temperature"
).innerHTML;
// console.log(weatherTemperature);
$.getJSON("https://ipinfo.io/json", function (data) {
  // console.log(data.ip);
  var zipCode = data.postal;

  // console.log(zipCode);

  // console.log("yo");

  document.getElementById("weather-temperature").innerHTML = zipCode;

  getWeatherTemperature();
});

//function setZipCode() {
// var zipCode = document.getElementById("weather-temperature").innerHTML;
// console.log(zipCode);
// getWeatherTemperature();
//}
async function getWeatherTemperature() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=" +
      document.getElementById("weather-temperature").innerHTML +
      "&APPID=6b8ff502f80dcf5372abe6360c0d7966"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      // console.log(data.main.temp);
      var userTemperature = data.main.temp;
      var userCity = data.name;

      console.log(userCity, userTemperature);

      $("#weather-temperature").text(
        "We've analyzed the weather in your location. In " +
          userCity +
          " it is currently " +
          userTemperature +
          "°F"
      );
    });
}

const foodKey = "447b89e875a847c59f33b3aa81928b85";
var userIngredients = "";
// var userIngredientsArray = [];
var viewRecipe1 = document.getElementById("#view-recipe-1");
var viewRecipe2 = document.getElementById("#view-recipe-2");
var viewRecipe3 = document.getElementById("#view-recipe-3");
var viewRecipe4 = document.getElementById("#view-recipe-4");
var searchButton = document.getElementById("#searchButton");

/*HAMBURGER*/
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);


pageLoad();

async function pageLoad() {
  fetch(
    "https://api.spoonacular.com/recipes/random?number=4" + "&apiKey=" + foodKey
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);

      var likes1 = data.recipes[0].aggregateLikes;
      var likes2 = data.recipes[1].aggregateLikes;
      var likes3 = data.recipes[2].aggregateLikes;
      var likes4 = data.recipes[3].aggregateLikes;

      $("#view-recipe-1").removeClass("hidden");
      $("#view-recipe-2").removeClass("hidden");
      $("#view-recipe-3").removeClass("hidden");
      $("#view-recipe-4").removeClass("hidden");

      var recipe1Id = data.recipes[0].id;
      var recipe2Id = data.recipes[1].id;
      var recipe3Id = data.recipes[2].id;
      var recipe4Id = data.recipes[3].id;
      // console.log(recipe1Id, recipe2Id, recipe3Id, recipe4Id);

      var recipe1Name = data.recipes[0].title;
      var recipe2Name = data.recipes[1].title;
      var recipe3Name = data.recipes[2].title;
      var recipe4Name = data.recipes[3].title;

      //var recipe1Description = data[0].

      var recipeImage1 = data.recipes[0].image;
      var recipeImage2 = data.recipes[1].image;
      var recipeImage3 = data.recipes[2].image;
      var recipeImage4 = data.recipes[3].image;

      // console.log(recipe1Name);

      $("#results-header").text("Featured Recipes");

      $("#likes1").text("This recipe has been liked by " + likes1 + " people.");
      $("#likes2").text("This recipe has been liked by " + likes2 + " people.");
      $("#likes3").text("This recipe has been liked by " + likes3 + " people.");
      $("#likes4").text("This recipe has been liked by " + likes4 + " people.");

      $("#title1").text(recipe1Name);
      $("#title2").text(recipe2Name);
      $("#title3").text(recipe3Name);
      $("#title4").text(recipe4Name);

      $("#recipeImage1").attr("src", recipeImage1);
      $("#recipeImage1").attr("alt", recipe1Name);
      $("#view-recipe-1").attr("foodId", recipe1Id);

      $("#recipeImage2").attr("src", recipeImage2);
      $("#recipeImage2").attr("alt", recipe2Name);
      $("#view-recipe-2").attr("foodId", recipe2Id);

      $("#recipeImage3").attr("src", recipeImage3);
      $("#recipeImage3").attr("alt", recipe3Name);
      $("#view-recipe-3").attr("foodId", recipe3Id);

      $("#recipeImage4").attr("src", recipeImage4);
      $("#recipeImage4").attr("alt", recipe4Name);
      $("#view-recipe-4").attr("foodId", recipe4Id);

      // console.log("hello");

      // console.log($("#view-recipe-1").attr("foodId"));
    });
}

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
      // console.log(data);

      var likes1 = data[0].likes;
      var likes2 = data[1].likes;
      var likes3 = data[2].likes;
      var likes4 = data[3].likes;

      $("#view-recipe-1").removeClass("hidden");
      $("#view-recipe-2").removeClass("hidden");
      $("#view-recipe-3").removeClass("hidden");
      $("#view-recipe-4").removeClass("hidden");

      var recipe1Id = data[0].id;
      var recipe2Id = data[1].id;
      var recipe3Id = data[2].id;
      var recipe4Id = data[3].id;
      // console.log(recipe1Id, recipe2Id, recipe3Id, recipe4Id);

      var recipe1Name = data[0].title;
      var recipe2Name = data[1].title;
      var recipe3Name = data[2].title;
      var recipe4Name = data[3].title;

      var recipeImage1 = data[0].image;
      var recipeImage2 = data[1].image;
      var recipeImage3 = data[2].image;
      var recipeImage4 = data[3].image;

      // console.log(recipe1Name);

      $("#results-header").text("Here are your results.");

      $("#likes1").text("This recipe has been liked by " + likes1 + " people.");
      $("#likes2").text("This recipe has been liked by " + likes2 + " people.");
      $("#likes3").text("This recipe has been liked by " + likes3 + " people.");
      $("#likes4").text("This recipe has been liked by " + likes4 + " people.");

      $("#title1").text(recipe1Name);
      $("#title2").text(recipe2Name);
      $("#title3").text(recipe3Name);
      $("#title4").text(recipe4Name);

      $("#recipeImage1").attr("src", recipeImage1);
      $("#recipeImage1").attr("alt", recipe1Name);
      $("#view-recipe-1").attr("foodId", recipe1Id);

      $("#recipeImage2").attr("src", recipeImage2);
      $("#recipeImage2").attr("alt", recipe2Name);
      $("#view-recipe-2").attr("foodId", recipe2Id);

      $("#recipeImage3").attr("src", recipeImage3);
      $("#recipeImage3").attr("alt", recipe3Name);
      $("#view-recipe-3").attr("foodId", recipe3Id);

      $("#recipeImage4").attr("src", recipeImage4);
      $("#recipeImage4").attr("alt", recipe4Name);
      $("#view-recipe-4").attr("foodId", recipe4Id);

      // console.log("hello");

      // console.log($("#view-recipe-1").attr("foodId"));
    });
}

function addIngredient() {
  userIngredients = document.querySelector("#ingredientInput").value;

  // console.log(userIngredients);
  fetchRecipes();
  saveRecentSearches();
}

document
  .getElementById("searchButton")
  .addEventListener("click", addIngredient);

document.getElementById("view-recipe-2").onclick = function (fetchRecipes) {
  let viewRecipeLink2;

  fetch(
    "https://api.spoonacular.com/recipes/" +
      $("#view-recipe-2").attr("foodId") +
      "/information?" +
      "&apiKey=" +
      foodKey
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);

      var recipeWebsite2 = data.sourceUrl;

      // console.log(recipeWebsite2);

      var url2 = data.sourceUrl;
      window.open(recipeWebsite2, "_blank");;
    });
};

document.getElementById("view-recipe-1").onclick = function (fetchRecipes) {
  let viewRecipeLink1 = fetch(
    "https://api.spoonacular.com/recipes/" +
      $("#view-recipe-1").attr("foodId") +
      "/information?" +
      "&apiKey=" +
      foodKey
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);

      var recipeWebsite1 = data.sourceUrl;

      // console.log(recipeWebsite1);

      var url1 = data.sourceUrl;
      window.open(recipeWebsite1, "_blank");
    });
};

document.getElementById("view-recipe-3").onclick = function (fetchRecipes) {
  let viewRecipeLink3;

  fetch(
    "https://api.spoonacular.com/recipes/" +
      $("#view-recipe-3").attr("foodId") +
      "/information?" +
      "&apiKey=" +
      foodKey
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);

      var recipeWebsite3 = data.sourceUrl;

      // console.log(recipeWebsite3);

      var url1 = data.sourceUrl;
      window.open(recipeWebsite3, "_blank");
    });
};

document.getElementById("view-recipe-4").onclick = function (fetchRecipes) {
  let viewRecipeLink4 = fetch(
    "https://api.spoonacular.com/recipes/" +
      $("#view-recipe-4").attr("foodId") +
      "/information?" +
      "&apiKey=" +
      foodKey
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);

      var recipeWebsite4 = data.sourceUrl;

      // console.log(recipeWebsite4);

      var url4 = data.sourceUrl;
      window.open( recipeWebsite4, "_blank");
    });
};


function saveRecentSearches () {

    var result = {
      ingredient: userIngredients,
  
    }

    const savedIngredients = localStorage.getItem('ingredient') || '[]'
 
    const ingredients = [...JSON.parse(savedIngredients), result]
    .sort((a, b) => b.ingredient- a.ingredient) 
    .slice(0, 5) // 

    localStorage.setItem('ingredient', JSON.stringify(ingredients)) 
    
    console.log(ingredients);

    if (ingredients.length > 0) {
      var lastItem = ingredients[ingredients.length - 1];
      console.log(lastItem);
      var ul = document.getElementById("menu")
      var li = document.createElement("li")
      var a = document.createElement("a")
      a.setAttribute("class", "menuItem");
        a.appendChild(document.createTextNode(lastItem.ingredient));
        li.appendChild(a);
        ul.appendChild(li)

        return 
    }; 
};
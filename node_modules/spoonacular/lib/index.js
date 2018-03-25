/**
  * @module SpoonacularAPILib
  *  
  * The spoonacular Nutrition, Recipe, and Food API allows you to access over 360,000 recipes and 80,000 food products. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as "gluten free brownies without sugar" or "low fat vegan cupcakes." You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal. We will soon be adding Weight Watchers.
  */

var Configuration = require('./Configuration');;
var APIController = require('./Controllers/APIController');
var Productjson = require('./Models/Productjson');
var Classifiedproduct = require('./Models/Classifiedproduct');
var Productjsonarray = require('./Models/Productjsonarray');
var FindByIngredientsModel = require('./Models/FindByIngredientsModel');


function initializer () { }

//Main functional components of SpoonacularAPILib
initializer.Configuration = Configuration;
initializer.APIController = APIController;

//Main Models of SpoonacularAPILib
initializer.Productjson = Productjson;
initializer.Classifiedproduct = Classifiedproduct;
initializer.Productjsonarray = Productjsonarray;
initializer.FindByIngredientsModel = FindByIngredientsModel;

module.exports = initializer;

# Getting started

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:
* `node --version`
* `npm -version` 
![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=spoonacular%20API-Node)  

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):
* `npm install`
![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=spoonacular%20API-Node)
![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder. 

Once dependencies are resolved, you will need to move the folder `SpoonacularAPI ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.  
Click on `File` and select `Open Folder`
![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.
![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=spoonacular%20API-Node)


### 2. Creating a Test File
Now right click on the folder name and select the `New File` option to create a new test file.    Save it as `index.js` Now import the generated NodeJS library using the following lines of code:
```JavaScript
var lib = require('lib');
```
Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=spoonacular%20API-Node)
![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=spoonacular%20API-Node)

### 3. Running The Test File
To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:  
`node index.js`
![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=spoonacular%20API-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 
###### (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2
###### (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3
###### (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  spoonacular APIController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TESTTIMEOUT` parameter's value in `Configuration.js`.  
> ***NOTE:*** Changing default timeout is available for only Binary/File type endpoint tests

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=spoonacular%20APIController)

## Initialization

### 
You need the following information for initializing the API client.

| Parameter | Description |
|-----------|-------------|
| xMashapeKey | The Mashape application you want to use for this session. |



API client can be initialized as following:

```JavaScript
// Configuration parameters
$xMashapeKey = "xMashapeKey"; // The Mashape application you want to use for this session.

var lib = require('lib');
```

## Class Reference

### <a name="list_of_controllers"></a>List of Controllers

* [APIController](#api_controller)

### <a name="api_controller"></a>![Class: ](https://apidocs.io/img/class.png ".APIController") APIController

#### Get singleton instance

The singleton instance of the ``` APIController ``` class can be accessed from the API Client.

```javascript
var controller = lib.APIController;
```

#### <a name="get_product_information"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.getProductInformation") getProductInformation

> *Tags:*  ``` Skips Authentication ``` 

> Get information about a packaged food product.


```javascript
function getProductInformation(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  ``` DefaultValue ```  | The id of the packaged food product. |



#### Example Usage

```javascript

    var id = 221;

    controller.getProductInformation(id, function(error, response, context) {

    
	});
```



#### <a name="find_similar_recipes"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.findSimilarRecipes") findSimilarRecipes

> *Tags:*  ``` Skips Authentication ``` 

> Find recipes which are similar to the given one.


```javascript
function findSimilarRecipes(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  ``` DefaultValue ```  | The id of the source recipe to which similar recipes should be found. |



#### Example Usage

```javascript

    var id = 221;

    controller.findSimilarRecipes(id, function(error, response, context) {

    
	});
```



#### <a name="get_autocomplete_ingredient_search"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.getAutocompleteIngredientSearch") getAutocompleteIngredientSearch

> *Tags:*  ``` Skips Authentication ``` 

> Autocomplete a search for an ingredient.


```javascript
function getAutocompleteIngredientSearch(query, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| query |  ``` Required ```  ``` DefaultValue ```  | The query - a partial or full ingredient name. |



#### Example Usage

```javascript

    var query = "query";

    controller.getAutocompleteIngredientSearch(query, function(error, response, context) {

    
	});
```



#### <a name="create_visualize_price_breakdown"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.createVisualizePriceBreakdown") createVisualizePriceBreakdown

> *Tags:*  ``` Skips Authentication ``` 

> Visualize the price breakdown of a recipe.


```javascript
function createVisualizePriceBreakdown(ingredientList, servings, defaultCss, mode, formParams, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ingredientList |  ``` Required ```  ``` DefaultValue ```  | The ingredient list of the recipe, one ingredient per line. |
| servings |  ``` Required ```  ``` DefaultValue ```  | The number of servings. |
| defaultCss |  ``` Optional ```  ``` DefaultValue ```  | Whether the widget should be styled with the default css. |
| mode |  ``` Optional ```  ``` DefaultValue ```  | The mode in which the widget should be delivered. 1 = separate views (compact), 2 = all in one view (full). |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |



#### Example Usage

```javascript

    var ingredientList = "ingredientList";
    var servings = 221;
    var defaultCss = "defaultCss";
    var mode = 221;
    // key-value map for optional form parameters
    var formParams = [];

    controller.createVisualizePriceBreakdown(ingredientList, servings, defaultCss, mode, formParams, function(error, response, context) {

    
	});
```



#### <a name="create_visualize_nutrition"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.createVisualizeNutrition") createVisualizeNutrition

> *Tags:*  ``` Skips Authentication ``` 

> Visualize a recipe's nutritional information.


```javascript
function createVisualizeNutrition(ingredientList, servings, defaultCss, formParams, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ingredientList |  ``` Required ```  ``` DefaultValue ```  | The ingredient list of the recipe, one ingredient per line. |
| servings |  ``` Required ```  ``` DefaultValue ```  | The number of servings. |
| defaultCss |  ``` Optional ```  ``` DefaultValue ```  | Whether the ingredient list should be styled with the default css. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |



#### Example Usage

```javascript

    var ingredientList = "ingredientList";
    var servings = 221;
    var defaultCss = "defaultCss";
    // key-value map for optional form parameters
    var formParams = [];

    controller.createVisualizeNutrition(ingredientList, servings, defaultCss, formParams, function(error, response, context) {

    
	});
```



#### <a name="create_visualize_ingredients"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.createVisualizeIngredients") createVisualizeIngredients

> *Tags:*  ``` Skips Authentication ``` 

> Visualize ingredients of a recipe.


```javascript
function createVisualizeIngredients(ingredientList, servings, defaultCss, measure, view, formParams, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ingredientList |  ``` Required ```  ``` DefaultValue ```  | The ingredient list of the recipe, one ingredient per line. |
| servings |  ``` Required ```  ``` DefaultValue ```  | The initial number of servings. |
| defaultCss |  ``` Optional ```  ``` DefaultValue ```  | Whether the ingredient list should be styled with the default css. |
| measure |  ``` Optional ```  ``` DefaultValue ```  | The initial measure, either "metric" or "us". |
| view |  ``` Optional ```  ``` DefaultValue ```  | The initial view, either "grid" or "list". |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |



#### Example Usage

```javascript

    var ingredientList = "ingredientList";
    var servings = 221;
    var defaultCss = "defaultCss";
    var measure = "measure";
    var view = "view";
    // key-value map for optional form parameters
    var formParams = [];

    controller.createVisualizeIngredients(ingredientList, servings, defaultCss, measure, view, formParams, function(error, response, context) {

    
	});
```



#### <a name="get_summarize_recipe"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.getSummarizeRecipe") getSummarizeRecipe

> *Tags:*  ``` Skips Authentication ``` 

> Summarize the recipe in a short text.


```javascript
function getSummarizeRecipe(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  ``` DefaultValue ```  | The id of the recipe that should be summarized. |



#### Example Usage

```javascript

    var id = 58;

    controller.getSummarizeRecipe(id, function(error, response, context) {

    
	});
```



#### <a name="search_grocery_products"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.searchGroceryProducts") searchGroceryProducts

> *Tags:*  ``` Skips Authentication ``` 

> Search packaged food products like frozen pizza and snickers bars.


```javascript
function searchGroceryProducts(query, number, offset, queryParams, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| query |  ``` Required ```  ``` DefaultValue ```  | The search query. |
| number |  ``` Optional ```  ``` DefaultValue ```  | The number of results to retrieve, defaults to 10. |
| offset |  ``` Optional ```  ``` DefaultValue ```  | The number of results to skip, defaults to 0. |
| queryParameters | ``` Optional ``` | Additional optional query parameters are supported by this method |



#### Example Usage

```javascript

    var query = "query";
    var number = 58;
    var offset = 58;

    // key-value map for optional query parameters
    var queryParams = [];

    controller.searchGroceryProducts(query, number, offset, queryParams, function(error, response, context) {

    
	});
```



#### <a name="get_quick_answer"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.getQuickAnswer") getQuickAnswer

> *Tags:*  ``` Skips Authentication ``` 

> Answer a nutrition related natural language question.


```javascript
function getQuickAnswer(q, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| q |  ``` Required ```  ``` DefaultValue ```  | The nutrition-related question. |



#### Example Usage

```javascript

    var q = "q";

    controller.getQuickAnswer(q, function(error, response, context) {

    
	});
```



#### <a name="get_recipe_information"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.getRecipeInformation") getRecipeInformation

> *Tags:*  ``` Skips Authentication ``` 

> Get information about a recipe.


```javascript
function getRecipeInformation(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  ``` DefaultValue ```  | The id of the recipe. |



#### Example Usage

```javascript

    var id = 58;

    controller.getRecipeInformation(id, function(error, response, context) {

    
	});
```



#### <a name="create_parse_ingredients"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.createParseIngredients") createParseIngredients

> *Tags:*  ``` Skips Authentication ``` 

> Extract an ingredient from plain text.


```javascript
function createParseIngredients(ingredientList, servings, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ingredientList |  ``` Required ```  ``` DefaultValue ```  | The ingredient list of the recipe, one ingredient per line. |
| servings |  ``` Required ```  ``` DefaultValue ```  | The number of servings that you can make from the ingredients. |



#### Example Usage

```javascript

    var ingredientList = "ingredientList";
    var servings = 58;

    controller.createParseIngredients(ingredientList, servings, function(error, response, context) {

    
	});
```



#### <a name="create_map_ingredients"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.createMapIngredients") createMapIngredients

> *Tags:*  ``` Skips Authentication ``` 

> Map ingredients to food products.


```javascript
function createMapIngredients(ingredientList, servings, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ingredientList |  ``` Required ```  ``` DefaultValue ```  | A new line-separated list of ingredients. |
| servings |  ``` Required ```  ``` DefaultValue ```  | The number of servings this recipe makes. |



#### Example Usage

```javascript

    var ingredientList = "ingredientList";
    var servings = 58;

    controller.createMapIngredients(ingredientList, servings, function(error, response, context) {

    
	});
```



#### <a name="get_extract_recipe_from_website"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.getExtractRecipeFromWebsite") getExtractRecipeFromWebsite

> *Tags:*  ``` Skips Authentication ``` 

> Extract recipe data from a recipe blog or Web page.


```javascript
function getExtractRecipeFromWebsite(url, forceExtraction, queryParams, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| url |  ``` Required ```  ``` DefaultValue ```  | The URL of the recipe page. |
| forceExtraction |  ``` Optional ```  ``` DefaultValue ```  | If true, the extraction will be triggered no matter whether we know the recipe already. Use that only if information is missing as this operation is slower. |
| queryParameters | ``` Optional ``` | Additional optional query parameters are supported by this method |



#### Example Usage

```javascript

    var url = "url";
    var forceExtraction = false;

    // key-value map for optional query parameters
    var queryParams = [];

    controller.getExtractRecipeFromWebsite(url, forceExtraction, queryParams, function(error, response, context) {

    
	});
```



#### <a name="get_compute_daily_meal_plan"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.getComputeDailyMealPlan") getComputeDailyMealPlan

> *Tags:*  ``` Skips Authentication ``` 

> Compute a meal plan for a day.


```javascript
function getComputeDailyMealPlan(targetCalories, timeFrame, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| targetCalories |  ``` Required ```  ``` DefaultValue ```  | The target number of calories per day. |
| timeFrame |  ``` Required ```  ``` DefaultValue ```  | For one day or a complete week, allowed values are "day" and "week". |



#### Example Usage

```javascript

    var targetCalories = 58;
    var timeFrame = "timeFrame";

    controller.getComputeDailyMealPlan(targetCalories, timeFrame, function(error, response, context) {

    
	});
```



#### <a name="create_classify_grocery_products_batch"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.createClassifyGroceryProductsBatch") createClassifyGroceryProductsBatch

> *Tags:*  ``` Skips Authentication ``` 

> Given a set of product jsons, get back classified products.


```javascript
function createClassifyGroceryProductsBatch(productJsonArray, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| productJsonArray |  ``` Required ```  ``` Collection ```  | A JSON Array of products. |



#### Example Usage

```javascript

    var productJsonArray = [{"key":"value"}].map(function(elem) {
        return new productjsonarray(elem);
    });

    controller.createClassifyGroceryProductsBatch(productJsonArray, function(error, response, context) {

    
	});
```



#### <a name="create_classify_cuisine"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.createClassifyCuisine") createClassifyCuisine

> *Tags:*  ``` Skips Authentication ``` 

> Classify the recipe's cuisine.


```javascript
function createClassifyCuisine(ingredientList, title, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ingredientList |  ``` Required ```  ``` DefaultValue ```  | The ingredient list of the recipe, one ingredient per line. |
| title |  ``` Required ```  ``` DefaultValue ```  | The title of the recipe. |



#### Example Usage

```javascript

    var ingredientList = "ingredientList";
    var title = "title";

    controller.createClassifyCuisine(ingredientList, title, function(error, response, context) {

    
	});
```



#### <a name="create_classify_a_grocery_product"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.createClassifyAGroceryProduct") createClassifyAGroceryProduct

> *Tags:*  ``` Skips Authentication ``` 

> Given a grocery product title, this endpoint allows you to detect what basic ingredient it is.


```javascript
function createClassifyAGroceryProduct(productJson, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| productJson |  ``` Required ```  | The json representation of a product. |



#### Example Usage

```javascript

    var productJson = new Productjson({"key":"value"});

    controller.createClassifyAGroceryProduct(productJson, function(error, response, context) {

    
	});
```



#### <a name="search_recipes"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.searchRecipes") searchRecipes

> *Tags:*  ``` Skips Authentication ``` 

> Search recipes in natural language.


```javascript
function searchRecipes(query, cuisine, diet, excludeIngredients, intolerances, limitLicense, number, offset, type, queryParams, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| query |  ``` Required ```  ``` DefaultValue ```  | The (natural language) recipe search query. |
| cuisine |  ``` Optional ```  ``` DefaultValue ```  | The cuisine(s) of the recipes. One or more (comma separated) of the following: african, chinese, japanese, korean, vietnamese, thai, indian, british, irish, french, italian, mexican, spanish, middle eastern, jewish, american, cajun, southern, greek, german, nordic, eastern european, caribbean, or latin american. |
| diet |  ``` Optional ```  ``` DefaultValue ```  | The diet to which the recipes must be compliant. Possible values are: pescetarian, lacto vegetarian, ovo vegetarian, vegan, and vegetarian. |
| excludeIngredients |  ``` Optional ```  ``` DefaultValue ```  | An comma-separated list of ingredients or ingredient types that must not be contained in the recipes. |
| intolerances |  ``` Optional ```  ``` DefaultValue ```  | A comma-separated list of intolerances. All found recipes must not have ingredients that could cause problems for people with one of the given tolerances. Possible values are: dairy, egg, gluten, peanut, sesame, seafood, shellfish, soy, sulfite, tree nut, and wheat. |
| limitLicense |  ``` Optional ```  ``` DefaultValue ```  | Whether the recipes should have an open license that allows for displaying with proper attribution. |
| number |  ``` Optional ```  ``` DefaultValue ```  | The number of results to return (between 0 and 100). |
| offset |  ``` Optional ```  ``` DefaultValue ```  | The number of results to skip (between 0 and 900). |
| type |  ``` Optional ```  ``` DefaultValue ```  | The type of the recipes. One of the following: main course, side dish, dessert, appetizer, salad, bread, breakfast, soup, beverage, sauce, or drink. |
| queryParameters | ``` Optional ``` | Additional optional query parameters are supported by this method |



#### Example Usage

```javascript

    var query = "query";
    var cuisine = "cuisine";
    var diet = "diet";
    var excludeIngredients = "excludeIngredients";
    var intolerances = "intolerances";
    var limitLicense = false;
    var number = 58;
    var offset = 58;
    var type = "type";

    // key-value map for optional query parameters
    var queryParams = [];

    controller.searchRecipes(query, cuisine, diet, excludeIngredients, intolerances, limitLicense, number, offset, type, queryParams, function(error, response, context) {

    
	});
```



#### <a name="find_by_nutrients"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.findByNutrients") findByNutrients

> *Tags:*  ``` Skips Authentication ``` 

> Find a set of recipes that adhere to the given nutrient limits. All the found recipes will have macro nutrients within the calories, protein, fat, and carbohydrate limits.


```javascript
function findByNutrients(maxcalories, maxcarbs, maxfat, maxprotein, mincalories, minCarbs, minfat, minProtein, queryParams, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| maxcalories |  ``` Optional ```  ``` DefaultValue ```  | The maximum number of calories the recipe can have. |
| maxcarbs |  ``` Optional ```  ``` DefaultValue ```  | The maximum number of carbohydrates in grams the recipe can have. |
| maxfat |  ``` Optional ```  ``` DefaultValue ```  | The maximum number of fat in grams the recipe can have. |
| maxprotein |  ``` Optional ```  ``` DefaultValue ```  | The maximum number of protein in grams the recipe can have. |
| mincalories |  ``` Optional ```  ``` DefaultValue ```  | The minimum number of calories the recipe must have. |
| minCarbs |  ``` Optional ```  ``` DefaultValue ```  | The minimum number of carbohydrates in grams the recipe must have. |
| minfat |  ``` Optional ```  ``` DefaultValue ```  | The minimum number of fat in grams the recipe must have. |
| minProtein |  ``` Optional ```  ``` DefaultValue ```  | The minimum number of protein in grams the recipe must have. |
| queryParameters | ``` Optional ``` | Additional optional query parameters are supported by this method |



#### Example Usage

```javascript

    var maxcalories = 58;
    var maxcarbs = 58;
    var maxfat = 58;
    var maxprotein = 58;
    var mincalories = 58;
    var minCarbs = 58;
    var minfat = 58;
    var minProtein = 58;

    // key-value map for optional query parameters
    var queryParams = [];

    controller.findByNutrients(maxcalories, maxcarbs, maxfat, maxprotein, mincalories, minCarbs, minfat, minProtein, queryParams, function(error, response, context) {

    
	});
```



#### <a name="find_by_ingredients"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.findByIngredients") findByIngredients

> *Tags:*  ``` Skips Authentication ``` 

> Find recipes that use as many of the given ingredients as possible and have as little as possible missing ingredients. This is a whats in your fridge API endpoint.


```javascript
function findByIngredients(ingredients, limitLicense, number, ranking, queryParams, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ingredients |  ``` Required ```  ``` DefaultValue ```  | A comma-separated list of ingredients that the recipes should contain. |
| limitLicense |  ``` Optional ```  ``` DefaultValue ```  | Whether to only show recipes with an attribution license. |
| number |  ``` Optional ```  ``` DefaultValue ```  | The maximal number of recipes to return (default = 5). |
| ranking |  ``` Optional ```  ``` DefaultValue ```  | Whether to maximize used ingredients (1) or minimize missing ingredients (2) first. |
| queryParameters | ``` Optional ``` | Additional optional query parameters are supported by this method |



#### Example Usage

```javascript

    var ingredients = "ingredients";
    var limitLicense = false;
    var number = 58;
    var ranking = 58;

    // key-value map for optional query parameters
    var queryParams = [];

    controller.findByIngredients(ingredients, limitLicense, number, ranking, queryParams, function(error, response, context) {

    
	});
```



#### <a name="create_recipe_card"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.createRecipeCard") createRecipeCard

> *Tags:*  ``` Skips Authentication ``` 

> Create a recipe card given a recipe.


```javascript
function createRecipeCard(backgroundImage, image, ingredients, instructions, mask, readyInMinutes, servings, title, author, backgroundColor, fontColor, source, formParams, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| backgroundImage |  ``` Required ```  ``` DefaultValue ```  | The background image ("none","background1", or "background2"). |
| image |  ``` Required ```  ``` DefaultValue ```  | The binary image of the recipe as jpg. |
| ingredients |  ``` Required ```  ``` DefaultValue ```  | The ingredient list of the recipe, one ingredient per line. |
| instructions |  ``` Required ```  ``` DefaultValue ```  | The instructions to make the recipe. One step per line. |
| mask |  ``` Required ```  ``` DefaultValue ```  | The mask to put over the recipe image ("ellipseMask", "diamondMask", "diamondMask", "starMask", "heartMask", "potMask", "fishMask"). |
| readyInMinutes |  ``` Required ```  ``` DefaultValue ```  | The number of minutes it takes to get the recipe on the table. |
| servings |  ``` Required ```  ``` DefaultValue ```  | The number of servings that you can make from the ingredients. |
| title |  ``` Required ```  ``` DefaultValue ```  | The title of the recipe. |
| author |  ``` Optional ```  ``` DefaultValue ```  | The author of the recipe. |
| backgroundColor |  ``` Optional ```  ``` DefaultValue ```  | The background color on the recipe card as a hex-string. |
| fontColor |  ``` Optional ```  ``` DefaultValue ```  | The font color on the recipe card as a hex-string. |
| source |  ``` Optional ```  ``` DefaultValue ```  | The source of the recipe. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |



#### Example Usage

```javascript

    var backgroundImage = "backgroundImage";
    var image = data;
    var ingredients = "ingredients";
    var instructions = "instructions";
    var mask = "mask";
    var readyInMinutes = 58;
    var servings = 58;
    var title = "title";
    var author = "author";
    var backgroundColor = "backgroundColor";
    var fontColor = "fontColor";
    var source = "source";
    // key-value map for optional form parameters
    var formParams = [];

    controller.createRecipeCard(backgroundImage, image, ingredients, instructions, mask, readyInMinutes, servings, title, author, backgroundColor, fontColor, source, formParams, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)




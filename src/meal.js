function nameMenuItem(tastyMenuItem) {
  return `Delicious ${tastyMenuItem}`
}

function createMenuItem(newItemName, menuItemPrice, menuItemType) {
  var menuItem = {
    name: newItemName,
    price: menuItemPrice,
    type: menuItemType,
  };
  return menuItem;
 }


function addIngredients(ingredient, listIngredients) {
  if (listIngredients.includes(ingredient) === false) {
    listIngredients.push(ingredient);
    return listIngredients;
  } else {
    return listIngredients;
  }
 }

function formatPrice(initialPrice) {
  var formattedPrice = `$${initialPrice}`;
  return formattedPrice;
}

function decreasePrice(initialPrice) {
  var decreasedPrice = (initialPrice - (.1 * initialPrice));
  return decreasedPrice;
}

function createRecipe(title, ingredients, menuItemType) {
  var newRecipeObject = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }
  return newRecipeObject;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}

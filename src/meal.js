function nameMenuItem(tastyMenuItem) {
  return `Delicious ${tastyMenuItem}`
};

function createMenuItem(newItemName, menuItemPrice, menuItemType) {
  var menuItem = {
  name: newItemName,
  price: menuItemPrice,
  type: menuItemType,
 };
  return menuItem;
}

function addIngredients(ingredient, listIngredients) {
  listIngredients.push(ingredient);
  return listIngredients;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}

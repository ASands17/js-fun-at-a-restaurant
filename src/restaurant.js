function createRestaurant(restaurantName) {
  var newRestaurantObject = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner:[],
    }
  }
  return newRestaurantObject;
 }



 function addMenuItem(restaurantObject, newMenuItem) {
   if (newMenuItem.type === "breakfast" && !restaurantObject.menus.breakfast.includes(newMenuItem)) {
     restaurantObject.menus.breakfast.push(newMenuItem);
     return restaurantObject;
    } else if (newMenuItem.type === "lunch" && !restaurantObject.menus.lunch.includes(newMenuItem)) {
        restaurantObject.menus.lunch.push(newMenuItem);
        return restaurantObject;
    } else if (newMenuItem.type === "dinner" && !restaurantObject.menus.dinner.includes(newMenuItem)) {
        restaurantObject.menus.dinner.push(newMenuItem);
        return restaurantObject;
    } else {
        return restaurantObject;
    }
  }



function removeMenuItem (restaurantObject, nameValue, typeValue) {
 for (i = 0; i < restaurantObject.menus[typeValue].length; i++) {
   if (nameValue === restaurantObject.menus[typeValue][i].name) {
     restaurantObject.menus[typeValue].splice(i, 1);
   }
  return `No one is eating our ${nameValue} - it has been removed from the ${typeValue} menu!`
  }
  return `Sorry, we don't sell ${nameValue}, try adding a new recipe!`
}



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}

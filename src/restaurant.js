function createRestaurant(restaurantName) {
var newRestaurantObject =
  {name: restaurantName,
  menus: {
    breakfast: [],
    lunch: [],
    dinner:[],
  }
}

return newRestaurantObject;
 }






module.exports = {
  createRestaurant,
  // addMenuItem,
  // removeMenuItem
}

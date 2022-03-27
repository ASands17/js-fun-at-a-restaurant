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



 //  function addMenuItem(restaurantObject, newMenuItem) {
 //  if (newMenuItem.type === "breakfast") {
 //   restaurantObject.menus.breakfast.push(newMenuItem);
 //   return restaurantObject;
 // } else if (newMenuItem.type === "lunch") {
 //   restaurantObject.menus.lunch.push(newMenuItem);
 //   return restaurantObject;
 // } else if (newMenuItem.type === "dinner") {
 //   restaurantObject.menus.dinner.push(newMenuItem);
 //   return restaurantObject;
 // } else {
 //   return restaurantObject;
 // }
 // }

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




// for test, pizzaRestaurant is the object:
// {name: "sexyPizza",
// menus: {
//   breakfast: [],
//   lunch: [],
//   dinner:[],
// }
// } --I called this newRestaurantObject
// --when the value of createRestaurant() is returned, it
// will be a new value-- pizzaRestaurant. I called this new value
// restaurantObject, and even though it has a different name, it is the
// same value of newRestaurantObject

// and bbqPizza is the object: (newMenuItem in my test)
// {
//   name: "BBQ Chicken Pizza",
//   price: "12.49",
//   type: "lunch"
// };

//And that means that pizzaRestaurant.menus.lunch[0]
//should access the bbqPizza object type.
//This means the bbqPizza object needs to be in
//the lunch array, as an object.






module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}

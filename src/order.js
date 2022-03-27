



function takeOrder(orderObject, arrayOfOrders) {
  if (arrayOfOrders.length < 3) {
  arrayOfOrders.push(orderObject);
  return arrayOfOrders;
} else {
  return arrayOfOrders;
 }
}



function refundOrder(orderNumToRemove, arrayOfOrders) {
  for (var i = 0; i < arrayOfOrders.length; i++) {
    var allPrices = arrayOfOrders[i].orderNumber;
    if (allPrices === orderNumToRemove) {
    arrayOfOrders.splice(i, 1);
    return arrayOfOrders;
    }
  }
}


  function listItems(arrayOfOrders) {
    if (arrayOfOrders.length ===  1) {
      return arrayOfOrders[0].item
    } else {
      var output = "";
      for (var i = 0; i < arrayOfOrders.length; i++) {
        if (i !== arrayOfOrders.length - 1) {
        output += `${arrayOfOrders[i].item}, `;
        } else {
          output += arrayOfOrders[i].item;
        }
       }
       return output;
    }
  }

    function searchOrder(arrayOfOrders, itemTypeString) {
      var isOrderInArray = false;
      for (var i = 0; i < arrayOfOrders.length; i++) {
        if (arrayOfOrders[i].item === itemTypeString) {
          isOrderInArray = true;
        }
      }
      return isOrderInArray;
    }


module.exports = {
 takeOrder,
 refundOrder,
 listItems,
 searchOrder
}

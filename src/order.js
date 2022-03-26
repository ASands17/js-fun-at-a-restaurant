
function takeOrder(orderObject, arrayOfOrders) {
  if (arrayOfOrders.length < 3) {
    arrayOfOrders.push(orderObject);
      return arrayOfOrders;
  } else
  return arrayOfOrders;
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




module.exports = {
 takeOrder,
 refundOrder,
  // listItems,
  // searchOrder
}

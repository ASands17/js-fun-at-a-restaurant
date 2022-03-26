
function takeOrder(orderObject, arrayOfOrders) {
  if (arrayOfOrders.length < 3) {
    arrayOfOrders.push(orderObject);
      return arrayOfOrders;
  } else
  return arrayOfOrders;
}





module.exports = {
 takeOrder,
 //refundOrder,
  // listItems,
  // searchOrder
}

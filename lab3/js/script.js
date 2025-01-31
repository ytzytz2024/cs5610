const prices = { original: 2.5, mango: 3.0, strawberry: 3.5, small: 1.0, 
  medium: 1.5, large: 2.0, boba: 0.5, jelly: 0.75, pudding: 1.0 };
 

function displayOrderSummary(order) {
  // example order object: 
  // {flavor: "mango", size: "medium", toppings: ["boba", "jelly"], finalPrice: 5.63 }
  // const toppingsList = order.toppings.join(", ");
  console.log(`You have ordered a ${order.size} ${order.flavor} boba with these toppings: ${
    order.toppings.join(" ")}\nTotal price: $${order.finalPrice.toFixed(2)}`);
}



function placeOrder(flavor, size, toppings) {
  let flavorPrice = prices[flavor];
  let sizePrice = prices[size];
  let toppingsPrice = 0;
  for (i = 0; i < toppings.length; i++) {
    toppingsPrice = toppingsPrice+ prices[toppings[i]];
  }
  
  let finalPrice = sizePrice * (flavorPrice + toppingsPrice);

  let order = {flavor: flavor, size: size, toppings: toppings, finalPrice: finalPrice}
  displayOrderSummary(order)
}

// Test cases
let order = {flavor: "original", size: "medium", toppings: ["boba", "jelly"], finalPrice: 5.63 }
displayOrderSummary(order);
  
let flavor = "mango";
let size = "medium";
let toppings = ["boba", "jelly"];
placeOrder(flavor, size, toppings);


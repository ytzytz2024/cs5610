const prices = { original: 2.5, mango: 3.0, strawberry: 3.5, small: 1.0, 
  medium: 1.5, large: 2.0, boba: 0.5, jelly: 0.75, pudding: 1.0 };

function displayOrderSummary(order) {
  let summaryContent = document.getElementById("order-summary").querySelector("p");
  if (orderChecker(order.flavor, order.size)) {
    summaryContent.innerText = (`You have ordered a ${order.size} ${order.flavor} boba with these toppings: ${
      order.toppings.join(" ")}. Total price: $${order.finalPrice.toFixed(2)}`);
  }
  else {
    summaryContent.innerText = "Your order details will appear here.";
  }
}

function orderChecker(flavor, size) {
  if (!flavor || !size) {
    alert("Please select both a flavor and a size.");
    return false;
  }
  return true;
}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", placeOrder);

function placeOrder() {
  let flavor = document.getElementById("flavor").value;
  console.log(flavor);
  let size = document.getElementById("size").value;
  console.log(size);
  let toppingsSelect = document.getElementById("toppings");
  let toppings = [];
  for (let i = 0; i < toppingsSelect.options.length; i++) {
    if (toppingsSelect.options[i].selected && toppingsSelect.options[i].value !== "") {
      toppings.push(toppingsSelect.options[i].value);
    }
  }
  console.log(toppings);

  let flavorPrice = prices[flavor];
  let sizePrice = prices[size];
  let toppingsPrice = 0;
  
  for (i = 0; i < toppings.length; i++) {
    toppingsPrice = toppingsPrice + prices[toppings[i]];
  }
  
  let finalPrice = sizePrice * (flavorPrice + toppingsPrice);

  let order = {flavor: flavor, size: size, toppings: toppings, finalPrice: finalPrice}
  displayOrderSummary(order)
}


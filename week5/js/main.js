/*
const radiusP = document.querySelector("#radius");
const resultP = document.querySelector("#result");

function getNumber() {
  let radius;
  radius = prompt("Enter the radius of the circle: ");
  radiusP.innerText += radius;

  return radius;
}

function calculateArea() {
  const radius = getNumber();
  console.log(radius);
  if (isNaN(radius)) {
    return "Please enter a valid number";
  }
  return (Math.PI * radius * radius).toFixed(2);
}

const result = calculateArea();
console.log(result);

resultP.innerText += result;
*/

/*
function populateShoppingList(items) {
  const shoppingList = document.querySelector(".shopping");
  for (let item of items) {
    //we need a li element for each item
    const listItem = document.createElement("li");
    listItem.innerText = item;
    shoppingList.appendChild(listItem);
  };
}

let shoppingItems = ["bread", "cheese", "green pepper"];
populateShoppingList(shoppingItems);

function changeListMarkerType() {
  const shoppingList = document.querySelector(".shopping");
  // shoppingList.setAttribute("class", "squareList");
  shoppingList.classList.add("squareList");
}

changeListMarkerType();
*/

const button = document.querySelector("#updateImage");
function changeButtonText() {
    if (button.innerText === "clicked!") {
        button.innerText = "Click Me!";
    }
    else if (button.innerText === "Click Me!") {
        button.innerText = "clicked!";
    }
}
    // if I want this to be called only one time
    // button.removeEventListener("click", changeButtonText);

// cannot pass parameters to the function changeButtonText
button.addEventListener("click", changeButtonText);
// (alternative way) if I want this to be called only one time
// button.addEventListener("click", changeButtonText, {once: true});


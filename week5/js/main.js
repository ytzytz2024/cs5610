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

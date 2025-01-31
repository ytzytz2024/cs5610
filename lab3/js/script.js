let user;
do {
  user = prompt("What is your name?");
} while (isNaN(user) == false || user.length === 1);
console.log(typeof user); // string

let students = [
  {
    name: "Cristian",
    age: 30,
    location: "Vancouver",
  },
  {
    name: "James",
    age: 40,
    location: "Toronto",
  },
  {
    name: "Garry",
    age: 20,
    location: "Vancouver",
  },
];

function findStudentsInVancouver() {
  let vancouverStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].location === "Vancouver") {
      console.log(`${students[i].name} lives in ${students[i].location}`);
      vancouverStudents.push(students[i]);
      // console.log(students[i].name);
    }
  }
  return vancouverStudents;
}

const renturnedArray = findStudentsInVancouver(); // Cristian, Garry
console.log(renturnedArray);


const prices = { original: 2.5, mango: 3.0, strawberry: 3.5, small: 1.0, 
  medium: 1.5, large: 2.0, boba: 0.5, jelly: 0.75, pudding: 1.0 };
 


function displayOrderSummary(order) {
  // example order object: 
  //{falvor:"mango", size:"medium", toppings:["boba","jelly"], totalPrice: 5.63 }
order.flavor = prices[order.flavor];
}


function placeOrder(flavor, size, toppings) {

  let order = {flavor:..., size:..., toppings:..., finalPrice:...}
  displayOrderSummary(order)
  }

let flavor = "mango";
let size = "small";
let toppings = ["chocolate", "sprinkles"];
placeOrder(flavor, size, toppings);
*/
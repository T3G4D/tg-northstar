var nameoError = document.getElementById("nameo-error");
var emailoError = document.getElementById("emailo-error");
var submitoError = document.getElementById("submito-error");
function validateNameo() {
  var nameo = document.getElementById("full-nameo").value;
  if (nameo.length == 0) {
    nameoError.innerHTML = "Name is required";
    nameoError.style.color = "red";
    return false;
  }
  if (!nameo.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameoError.innerHTML = "First and last name required";
    nameoError.style.color = "red";
    return false;
  }
  nameoError.innerHTML = "✓";
  nameoError.style.color = "green";
  return true;
}
function validateEmailo() {
  var emailo = document.getElementById("contact-emailo").value;
  if (emailo.length == 0) {
    emailoError.innerHTML = "Email is required";
    emailoError.style.color = "red";
    return false;
  }
  if (!emailo.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailoError.innerHTML = "Valid email is required";
    emailoError.style.color = "red";
    return false;
  }
  emailoError.innerHTML = "✓";
  emailoError.style.color = "green";
  return true;
}
function validateFormo() {
  if (!validateNameo() || !validateEmailo()) {
    submitoError.style.display = "block";
    submitoError.innerHTML = "Please fix errors to submit";
    setTimeout(function () {submitoError.style.display = "none";}, 2000); //hides error message after 2 seconds
    submitoError.style.color = "red";
    return false;
  }
  submitoError.innerHTML = "";
  return true;
}
//above is form validation for pre-order form
var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var subjectError = document.getElementById("subject-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");


function validateName() {
  var name = document.getElementById("full-name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    nameError.style.color = "red";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "First and last name required";
    nameError.style.color = "red";
    return false;
  }
  nameError.innerHTML = "✓";
  nameError.style.color = "green";
  return true;
}
function validateEmail() {
  var email = document.getElementById("contact-email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    emailError.style.color = "red";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Valid email is required";
    emailError.style.color = "red";
    return false;
  }
  emailError.innerHTML = "✓";
  emailError.style.color = "green";
  return true;
}
function validateSubject() {
  var subject = document.getElementById("subject").value;
  if (!(subject.length >= 5)) {
    subjectError.innerHTML = "Subject must be at least 5 characters";
    subjectError.style.color = "red";
    return false;
  }
  subjectError.innerHTML = "✓";
  subjectError.style.color = "green";
  return true;
}
function validateMessage() {
  var message = document.getElementById("message").value;
  if (!(message.length >= 10)) {
    messageError.innerHTML = "Message must be at least 10 characters";
    messageError.style.color = "red";
    return false;
  }
  messageError.innerHTML = "✓";
  messageError.style.color = "green";
  return true;
}
function validateForm() {
  if (!validateName() || !validateEmail() || !validateSubject() || !validateMessage()) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix errors to submit";
    setTimeout(function () {submitError.style.display = "none";}, 2000); //hides error message after 2 seconds
    submitError.style.color = "red";
    return false;
  }
  submitError.innerHTML = "";
  return true;
}
let submitSuccess = document.getElementById("submit-success");
function openSubmitSuccess() {
  submitSuccess.classList.add("open-submit-success");
}
function closeSubmitSuccess() {
  submitSuccess.classList.remove("open-submit-success");
}

//above is form validation and success popup for inquiry form
//below is menu
const bread_1 = {
  name: "Sourdough",
  price: "value2",
  key3: "value3"
}
console.log(bread_1); //goes to console
console.log(bread_1["price"]); //goes to console, prints just value

console.log("nuts" in bread_1); //goes to console, prints false if nuts is not in bread_1, true if it is
//can use that to filter out nuts from menu

for(let property in bread_1) {
  console.log(bread_1[property]); //goes to console, prints all values in bread_1
}

//array for menut items, idk how to transfer to html though

const bread=[
  {id:1, name:"Whole Wheat", price:10.00, description:"Our signature loaf; high in fiber, proteins, and vitamins", image:""},
  {id:2, name:"Sourdough", price:10.00, description:"Soft and fluffy on the inside, crunchy on the outside"},
  {id:3, name:"Multigrain", price:11.00, description:"A hearty combination of barley, rye, and wheat"},
  {id:4, name:"Walnut Raisin Rye", price:14.00, description:"Sweet, nutty perfection"},
];
//bread[0].name = "Breadley Cooper" changes whole wheat name, but i don't understand how to make this do what i want
//know how to access each object inside the array, but i want to  access and display name of all objects simultaneously

const container = document.getElementById('display-bread-names');

bread.forEach(block => {
  const div = document.createElement('div');
  div.innerHTML = `
    <h4>${block.name} ($${block.price} per loaf)</h4>
    <p class="description">${block.description}</p>
  `;
  container.appendChild(div);
});
//took like 3 hours but finally found clues on how to do this so i don't plague my html with <h4> and <p> 20 times over

const pastries=[
  {id:1, name:"Butter Pecan Cookies", price:9.00, description:"Rich, buttery cookies made with toasted pecans"},
  {id:2, name:"Chocolate Chip Cookies", price:10.00, description:"The classic, made soft and chewy so you forget you're even eating"},
  {id:3, name:"Chocolate Peanut Butter Cookies", price:12.00, description:"A magical combination of sweet chocolate and salty peanuts"},
];
const cakes=[
  {id:1, name:"Raspberry Almond", price:8.00, description:"Nutty and fruity, layered with raspberry jam"},
  {id:2, name:"Chocolate Strawberry", price:11.00, description:"Moist, spongy richness garnished with fresh strawberries"},
  {id:3, name:"Lemon Mascarpone", price:11.00, description:"Light and moist citrus cake balanced with rich and creamy mascarpone"},
  {id:4, name:"Tiramisu", price:12.00, description:"Baked layer cake featuring espresso flavor and layered with custard filling"},
];

cakes.forEach(cake => {
  console.log(cake.name + " - $" + cake.price + " - " + cake.description);
});//displays in consle log everything in array as well as dollar sign

const containsNuts = bread.filter(bread => bread.description.toLowerCase().includes("nut")); //filters for nut allergies. idk how to use this yet
//can also apply true/false for containsNuts on each to filter if it's easier







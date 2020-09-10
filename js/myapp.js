// select the elements
// const clear = document.querySelector(".clear");
// const dateElement = document.getElementById("date");
// const list = document.getElementById("list");
// const input = document.getElementById("input");


// variables that selects the elements 
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");

//
const input = document.getElementById("input").addEventListener("input",myInputFunction);

//// i might need these vairables below 
const numInput = document.getElementById("mySelect").addEventListener("change", mySelectFunction);

// for the submit form button
const foodSubmit = document.getElementById("sub-button").addEventListener("click", myFoodButton);









// function to grab the value for expiration 
function mySelectFunction() {
    var expValue = document.getElementById("mySelect");
    console.log(expValue.value)
  }

//function to grab the vale for food product
function myInputFunction(){
    var foodInput = document.getElementById("input");
    console.log(foodInput.value)
}

function myFoodButton(e){
    // var expV = doucment.getElementById("mySelect");
    // var fooIn = doucment.getElementById("input")
    //e.preventDefault()
   //const addForm = document.getElementById("addForm");
}











// show current dates
const options = {weekday:"long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US",options);




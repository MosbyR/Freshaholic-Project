


// variables that selects the elements 
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//variable to grab the expiration date variable 
const myExpList = document.getElementById("mySelect");







// select add button element
const addList = document.querySelector(".add-to-do");



//class names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//variables
let LIST;
let id;

// get item from local storage
let data = localStorage.getItem("TODO");

//check if data is not empty
if(data){
    LIST = JSON.parse(data);
    id = LIST.length; // sets the id to late one in the list
    loadList(LIST); // load the list to the user interface

}else{
    //if data not empty
    LIST =[];
    id =0;
}

// load items to user interface
function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done,item.trash,item.expDate);

    });
}

// clear button(clears the local storage)
clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
})




// show current dates////////////////////
const options = {weekday:"long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US",options);
///////////////////////////

// add to do function
function addToDo(toDo, id, done, trash,exp){

    if(trash){return;}

    const DONE = done ? CHECK: UNCHECK;
    const LINE = done? LINE_THROUGH : "";

    const item = `
            <li class="item">
                <i class ="fa ${DONE} co" job="complete" id="${id}"></i>
                <p class ="text ${LINE}">${toDo}<br> <span style="font-size: 15px;">Expires: ${exp} days</span></p>
                <i class = "fa fa-trash-o de" job="delete" id ="${id}"></i>
            </li>`;

    const position ="beforeend";

    list.insertAdjacentHTML(position,item);
}


// add an item to the list when user enters 
document.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        const toDo = input.value;
        const exp = mySelect.value;

        // if the input is not empty
        if(toDo){
            addToDo(toDo, id, false, false,exp);

            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash : false,
                expDate: exp
            });
            // add item to local storage (must be written everywhere we update the LIST array)
localStorage.setItem("TODO", JSON.stringify(LIST));
            id++;
        }
        input.value = "";
        mySelect.value ="";
    }
});

// function that add item to list when you click button
 document.getElementById("addList").addEventListener("click", submitToList);

 function submitToList(){
    const toDo = input.value;
    const exp = mySelect.value

    if(toDo){
        addToDo(toDo, id, false, false,exp);

        LIST.push({
            name: toDo,
            id: id,
            done: false,
            trash : false,
            expDate: exp
        });
        // add item to local storage (must be written everywhere we update the LIST array)
localStorage.setItem("TODO", JSON.stringify(LIST));
        id++;
    }
    input.value = "";
 };






// complete to do fucntion
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false: true;
};

// remove to do function
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
};

// targets the items created dynamically

list.addEventListener("click", function(event){
    const element = event.target; // returns the clicked element inside list 
    const elementJob = element.attributes.job.value;  // complete or delete 

    if(elementJob == "complete"){
        completeToDo(element)
    }else if(elementJob == "delete"){
        removeToDo(element);
    }
    // add item to local storage (must be written everywhere we update the LIST array)
localStorage.setItem("TODO", JSON.stringify(LIST));
});




// //  data for my-fridge autocomplete 
// const countries = [
//     {name: "LA"},
//     {name: "OH"},
//     {name: "NY"},
//     {name: "NJ"}
// ];

// const searchInput = document.querySelector(".search-input");
// const suggestionsPanel = document.querySelector(".suggestions");

// searchInput.addEventListener('keyup',function() {
//     suggestionsPanel.classList.add('show');
//     const inputSearch = searchInput.value;

//     suggestionsPanel.innerHTML ='';
//     const suggestions = countries.filter(function(food){
//         return food.name.toLowerCase().startsWith(inputSearch);
//     });
//     suggestions.forEach(function(suggested){
//         const div = document.createElement('div');
//         div.innerHTML = suggested.name;
//         div.setAttribute('class','suggestion');
//         suggestionsPanel.appendChild(div);
//     });
//     if(inputSearch === ""){
//         suggestionsPanel.innerHTML = '';
//     }
// // cited by https://www.youtube.com/watch?v=MBJuTkILZYo
// })


// // function that selects a value from the autocomplete and places it in the text bo
// document.addEventListener('click',function(e){
//     if (e.target.className === 'suggestion'){
//         searchInput.value = e.target.innerHTML;
//         suggestionsPanel.classList.remove('show');
//     }
// });

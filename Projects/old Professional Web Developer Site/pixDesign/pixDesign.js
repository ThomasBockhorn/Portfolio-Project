//Global variables
var dropButton = document.getElementById("dropDownButton");
var eraseButton = document.getElementById("erase");
var menuListing = document.getElementById("menuItems");
var selectedReset = document.getElementById("reset");
var selectedColor = document.getElementById("colorPicker");
var sizeSelector = document.querySelectorAll("a");
var tbl = document.getElementById("pixelCanvas");
var color;

//Functioning behind the dropdown menu
dropButton.addEventListener("mouseover", function(){
    menuListing.classList.toggle("show"); 
});

//This function will erase but keep the grid in place
eraseButton.addEventListener("click", function(){
    color = "";
});

//If the user hovers outside of the menu
menuListing.addEventListener("mouseleave", function(){
    menuListing.classList.remove("show");
});


//Color Selector
//getting the input value of the colorPicker
selectedColor.addEventListener("input", function () {
    color = event.target.value;
});

//This gets the size the user chooses for the grid
for (var i = 0; i < sizeSelector.length; i++){
    sizeSelector[i].addEventListener("click", function(){
        if (this.innerText === "10x10"){
            makeGrid(10,10);
        }
        else if (this.innerText === "15x15"){
            makeGrid(15,15);
        }
        else if (this.innerText === "20x20"){
            makeGrid(20,20);
        }
        else if (this.innerText === "25x25"){
            makeGrid(25,25);
        }
        else if (this.innerText === "30x30"){
            makeGrid(30,30);
        }
    });
}

//resets the form
selectedReset.addEventListener("click", function () {
    var tableRow = document.getElementsByTagName("tr");
    var numberRows = tableRow.length;
    for(var i = 0; i < numberRows; i++){
        console.log("Deleting row "+ i);
        tbl.removeChild(tableRow[0]);
    }
});

// When size is submitted by the user, call makeGrid()
function makeGrid(rowInput, columnInput) {
    //creating the cells needed for the drawing game
    for (var i = 0; i < rowInput; i++) {
        //creates a table row
        var row = document.createElement("tr");

        for (var j = 0; j < columnInput; j++) {
            //Creating a <td> element and putting the <td> at the end of table
            var cell = document.createElement("td");
            cell.addEventListener("mouseover", function () {
                if(color === undefined){
                    this.style.backgroundColor = "black";
                }else if (color === ""){
                    this.style.backgroundColor = "";
                }else{
                    this.style.backgroundColor = color;
                } 
            });
            row.appendChild(cell);
        }
        //add the row to the end of the table body
        tbl.appendChild(row);
    }
}
const containerDiv = document.querySelector(".container");
const innerContainer = document.createElement("div");
innerContainer.setAttribute("class", "grid-containers");
const chooseGridSize = document.querySelector(".gridPicker");
let numberOfDivs = 10;
let calculatePixel = "100px";

chooseGridSize.addEventListener("click", () => {
    let gridSize = prompt("Choose Grid");
    numberOfDivs = gridSize*gridSize; 
    calculateGrid(gridSize);
});


function calculateGrid(grid){
    deleteChildren();
    calculatePixel = 1000/grid;
    calculatePixel += "px";
    drawDivs();
}
function deleteChildren(){
    
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
      }
}

function drawDivs(){
    for(let i=0; i<numberOfDivs; i++){
        const innerContainer = document.createElement("div");
        innerContainer.setAttribute("class", "grid-containers");
        innerContainer.style.width = calculatePixel;
        innerContainer.style.height = calculatePixel;
        
        containerDiv.appendChild(innerContainer);
    }
}





containerDiv.addEventListener("mouseover", (event) =>{
    
    if (event.target.className == "grid-containers"){
        
        event.target.style.backgroundColor = `rgb( ${randColor()}, ${randColor()}, ${randColor()})`; 
       
    } 
    
});
containerDiv.addEventListener("mouseout", (event) =>{
    
    if (event.target.className == "grid-containers"){
        event.target.style.background = "black";
    } 
});
drawDivs();
function randColor(){
    
    let color = Math.floor(Math.random()* 256);
    return color;
}
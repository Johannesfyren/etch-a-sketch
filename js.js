const containerDiv = document.querySelector(".container");
const innerContainer = document.createElement("div");
innerContainer.setAttribute("class", "grid-containers");
const chooseGridSize = document.querySelector(".gridPicker");
let numberOfDivs = 256;

chooseGridSize.addEventListener("click", () => {
    let gridSize = prompt("Choose Grid");
    numberOfDivs = gridSize*2; 
    calculateGrid(gridSize);
});



function calculateGrid(grid){
    deleteChildren();
    let calculatePixel = 1000/grid;
    calculatePixel += "px";
    innerContainer.style.width = calculatePixel;
    innerContainer.style.height = calculatePixel; 
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
        containerDiv.appendChild(innerContainer);
    }
}





containerDiv.addEventListener("mouseover", (event) =>{
    
    if (event.target.className == "grid-containers"){
        event.target.style.background = "blue";
    } 
    
});
containerDiv.addEventListener("mouseout", (event) =>{
    
    if (event.target.className == "grid-containers"){
        event.target.style.background = "black";
    } 
});
drawDivs();
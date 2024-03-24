const containerDiv = document.querySelector(".container");
const innerContainer = document.createElement("div");
innerContainer.setAttribute("class", "grid-containers");


for(let i=0; i<256; i++){
    const innerContainer = document.createElement("div");
    innerContainer.setAttribute("class", "grid-containers");
    containerDiv.appendChild(innerContainer);
}


console.log(innerContainer);
console.log(containerDiv);
containerDiv.addEventListener("mouseover", (event) =>{
    
    if (event.target.className == "grid-containers"){
        console.log(event.target);
        event.target.style.background = "blue";
    } 
    
});
containerDiv.addEventListener("mouseout", (event) =>{
    
    if (event.target.className == "grid-containers"){
        console.log(event.target);
        event.target.style.background = "black";
    } 
});
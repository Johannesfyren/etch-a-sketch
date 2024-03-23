const containerDiv = document.querySelector(".container");
const innerContainer = document.createElement("div");


for(let i=0; i<256; i++){
    const innerContainer = document.createElement("div");
    innerContainer.setAttribute("class", "grid-containers");
    containerDiv.appendChild(innerContainer);
}


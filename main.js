let nrOfImages = 7
let imgArray = new Array();
for(let i = 1; i <= nrOfImages; ++i){
    imgArray[i] = new Image();
    imgArray[i].src = `./images/img (${i}).jpg`;
}

let imgHooverArray = new Array();
for(let i = 1; i <= nrOfImages; ++i){
    imgHooverArray[i] = new Image();
    imgHooverArray[i].src = `./images/hoover/imgh (${i}).jpg`;
}
imgHooverArray[3].src = `./images/hoover/imgh (3).heic`;

for(let i = 1; i <= nrOfImages; ++i){

    var img = document.createElement("img")
    img.src = imgArray[i].src
    img.style.display = "block"
    img.style.width = "250px"
    img.style.border = "10px solid transparent"
    img.style.position = "relative"
    img.style.borderRadius = "25px"
    img.style.display = "block"
    
    let div = document.createElement("div")
    div.id = `poza${i}`
    div.className = "pozeArray"
    div.style.position = "right"
    div.appendChild(img)
    document.getElementById("poze").appendChild(div)
   //document.getElementById("poze").removeChild(div) useful pt cand vrei sa schimbi pozele
    

}




/*let p = document.createElement("p");
p.className = "myp";
p.id = "myP";
p.textContent = "buna";
document.body.append(p);

setTimeout(function () {
    p.style.color = "red";
}, 2000)

setInterval(function(){
    p.style.position = "absolute";
    let Top = Math.random() * 100;
    let Left = Math.random() * 100;
    p.style.top =`'${Top}px`;
    p.style.left = `${Left}px`;
    console.log("im alive");
}, 1000)

let l = document.getElementById("lista");

let xhr = new XMLHttpRequest;

xhr.open('GET', 'https://pixabay.com/api/?key=8156433-1f1d20d41a35fcae4e667e5b5&image_type=photo&q=cat');

xhr.send();

xhr.onload = function (){
    const response = JSON.parse(xhr.responseText)

    console.log(response);
    for(let i = 0; i < response.hits.length; ++i){

        let img = document.createElement("img");
        img.src = response.hits[i].largeImageURL;
        img.style.width = "200px";    
        document.body.append(img);

    }
}

for(let i = 0; i < l.children.length; ++i){
    if(i % 2 == 0){
        l.children[i].style.color = "darkblue";
    }
    else {
        l.children[i].style.color = "magenta";
    }
}*/
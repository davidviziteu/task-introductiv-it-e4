/*
in html este un div (gol initial) cu id = "poze"

cand apesi butonul unui departament se sterg toti copii div ului "poze" si
se creeaza mai multe div uri (class = "currentContent", id = "currentContent[1,2,3....]") 

fiecare div "currentContent" are asa:
-o poza cu class = currentPhoto, id = currentPhoto[1,2,3....]
-un textBox (class = textBox, id = textBox[1,2,3.....])
            text box ul are in el asa: <p> parere asii </p> (class = "whatThePrsSays")
                                       <h1> nume <h1>        (class = "nameOfPrs")


it
geta
pro 
ri 
re
prm 
eval
ziar

structura varibile:

let dept = {                  it / geta / pro...
    imgArray: [],
    imgArrayHoover: [],
    opinionArray: [],
    nameArray: [],
    nrOfPpl: 6
}

*/
function removeCurrentPhotos(){
    document.getElementById("poze").innerHTML = '';
}

//useless
function addPhotos(departArray, departArrayLength){
    removeCurrentPhotos();
    for(let i = 1; i <= departArrayLength; ++i){
        var img = document.createElement("img");
        img.src = departArray[i].src;


        //styling
        img.style.display = "block";
        img.style.width = "250px";
        img.style.border = "10px solid transparent";
        img.style.position = "relative";
        img.style.borderRadius = "25px";
        img.style.display = "block";
        

        //appending
        let div = document.createElement("div");
        div.id = `photo${i}`;
        div.className = "currentPhotos";
        div.appendChild(img);
        document.getElementById("poze").appendChild(div);
    }
}


// ---------------photo&text adder -----------------------
function addPhotosTest(obj){ // merge, asa ca nu i mai schimb numele
    removeCurrentPhotos();
    
    for(let i = 1; i <= obj.nrOfPpl; ++i){
        
        var img = document.createElement("img");
        img.src = obj.imgArray[i].src;
        img.className = "currentPhoto"
        img.id = `currentPhoto${i}`
        

        //styling
        img.style.display = "block";
        img.style.width = "250px";
        img.style.border = "10px solid transparent";
        img.style.position = "relative";
        img.style.display = "block";
        img.style.width = "400px"; 
        img.style.margin = "50px"
        img.style.marginBottom = "20px"
        img.style.borderRadius = `25px`
        if(i % 2 == 1)
            img.style.cssFloat = "left"
        else
            img.style.cssFloat = "right"

        img.style.zIndex = "5" //not working :(

        //img hoover
        img.onmouseover = function(){
            this.src = obj.imgArrayHoover[i].src
        }
        img.onmouseleave = function(){
            this.src = obj.imgArray[i].src
        }
                
        //name positioning
        let nameOfPrs = document.createElement("h2")
        nameOfPrs.innerHTML = obj.nameArray[i]
        nameOfPrs.className = `nameOfPrs`
        nameOfPrs.position = "relative"

        //opinion positioning
        let whatThePrsSays = document.createElement("p")
        whatThePrsSays.innerHTML = obj.opinionArray[i]
        whatThePrsSays.className = `whatThePrsSays`
        whatThePrsSays.position = "relative"

        //text box
        let textBox = document.createElement("div")
        textBox.id = `textBox${i}`
        textBox.className = `textBox`
        textBox.position = `relative`
        textBox.style.zIndex = "6"
        textBox.style.backgroundColor = "#B6E3E9"
        textBox.appendChild(whatThePrsSays)
        textBox.appendChild(nameOfPrs)

        
        //~positioning
        let content = document.createElement("div");
        content.id = `content${i}`;
        content.className = "currentContent";
        content.style.position = "sticky"
        content.style.display = "inline-block"
        content.style.width = "100%"        
        
        content.appendChild(img);
        content.appendChild(textBox)
        document.getElementById("poze").appendChild(content);
    }

    //----------autoscroll------------- inca nush cum sa l fac sa ia in considerare nav bar ul
    console.log(navBarDim)
    document.getElementById('content1').scrollIntoView({behavior: 'smooth'});
}


/*
document.getElementById("itButton").addEventListener("click", () => addPhotosTest(it));*/
document.getElementById("getaButton").addEventListener("click", () => addPhotosTest(geta));
document.getElementById("reButton").addEventListener("click", () => addPhotosTest(re));
document.getElementById("riButton").addEventListener("click", () => addPhotosTest(ri));
document.getElementById("prmButton").addEventListener("click", () => addPhotosTest(prm));
document.getElementById("ziarButton").addEventListener("click", () => addPhotosTest(ziar));
document.getElementById("evalButton").addEventListener("click", () => addPhotosTest(eval));
document.getElementById("proButton").addEventListener("click", () => addPhotosTest(pro));
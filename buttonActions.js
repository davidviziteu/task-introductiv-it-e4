/*
nrOfPpl.departament

in html este un div cu id = "poze"

cand apesi butonul unui departament se sterg toti copii div ului "poze" si
se creeaza div uri (class = "currentPhotos") cu poze 

eventual animat

it
geta
pro 
ri 
re
prm 
eval
ziar

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
        img.style.zIndex = "5"
        img.onmouseover = function(){
            this.src = obj.imgArrayHoover[i].src
        }
        img.onmouseleave = function(){
            this.src = obj.imgArray[i].src
        }
        
        //positioning
        let div = document.createElement("div");
        div.id = `photo${i}`;
        div.className = "currentPhotos";
        div.style.position = "sticky"
        div.style.display = "inline-block"
        div.style.width = "100%"        
        
        div.appendChild(img);
        document.getElementById("poze").appendChild(div);
    }

    //----------autoscroll------------- inca nush cum sa l fac sa ia in considerare nav bar ul
    let navBarDim = document.getElementById("navBar").offsetHeight
    console.log(navBarDim)
    document.getElementById('photo1').scrollIntoView({behavior: 'smooth'});
}


document.getElementById("test").addEventListener("click", () => addPhotosTest(dept));
document.getElementById("itButton").addEventListener("click", () => addPhotosTest(it));
document.getElementById("getaButton").addEventListener("click", () => addPhotosTest(geta));
document.getElementById("reButton").addEventListener("click", () => addPhotosTest(re));
document.getElementById("riButton").addEventListener("click", () => addPhotosTest(ri));
document.getElementById("prmButton").addEventListener("click", () => addPhotosTest(prm));
document.getElementById("ziarButton").addEventListener("click", () => addPhotosTest(ziar));
document.getElementById("evalButton").addEventListener("click", () => addPhotosTest(eval));
document.getElementById("proButton").addEventListener("click", () => addPhotosTest(pro));
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
        img.style.borderRadius = "25px";
        img.style.display = "block";
        img.style.width = "400px";
        
        
        //appending
        let div = document.createElement("div");
        div.id = `photo${i}`;
        div.className = "currentPhotos";
        div.style.position = "relative"
        if(i % 2 == 0)
            div.style.left = "100px"
        else div.style.left = "500px"
        
        div.appendChild(img);
        document.getElementById("poze").appendChild(div);
    }
}


/*document.getElementById("itButton").addEventListener("click", () => addPhotos(it.imgArray, it.nrOfPpl));
document.getElementById("getaButton").addEventListener("click", () => addPhotos(geta.imgArray, geta.nrOfPpl));
document.getElementById("reButton").addEventListener("click", () => addPhotos(re.imgArray, re.nrOfPpl));
document.getElementById("riButton").addEventListener("click", () => addPhotos(ri.imgArray, ri.nrOfPpl));
document.getElementById("prmButton").addEventListener("click", () => addPhotos(prm.imgArray, prm.nrOfPpl));
document.getElementById("ziarButton").addEventListener("click", () => addPhotos(ziar.imgArray, ziar.nrOfPpl));
document.getElementById("evalButton").addEventListener("click", () => addPhotos(eval.imgArray, eval.nrOfPpl));
document.getElementById("proButton").addEventListener("click", () => addPhotos(pro.imgArray, pro.nrOfPpl));*/
document.getElementById("test").addEventListener("click", () => addPhotosTest(dept));
document.getElementById("itButton").addEventListener("click", () => addPhotosTest(it));
document.getElementById("getaButton").addEventListener("click", () => addPhotosTest(geta));
document.getElementById("reButton").addEventListener("click", () => addPhotosTest(re));
document.getElementById("riButton").addEventListener("click", () => addPhotosTest(ri));
document.getElementById("prmButton").addEventListener("click", () => addPhotosTest(prm));
document.getElementById("ziarButton").addEventListener("click", () => addPhotosTest(ziar));
document.getElementById("evalButton").addEventListener("click", () => addPhotosTest(eval));
document.getElementById("proButton").addEventListener("click", () => addPhotosTest(pro));
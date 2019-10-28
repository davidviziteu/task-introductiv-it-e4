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

document.getElementById("itButton").addEventListener("click", () => addPhotos(itImgArray, nrOfPpl.it));
document.getElementById("getaButton").addEventListener("click", () => addPhotos(getaImgArray, nrOfPpl.geta));
document.getElementById("reButton").addEventListener("click", () => addPhotos(reImgArray, nrOfPpl.re));
document.getElementById("riButton").addEventListener("click", () => addPhotos(riImgArray, nrOfPpl.ri));
document.getElementById("prmButton").addEventListener("click", () => addPhotos(prmImgArray, nrOfPpl.prm));
document.getElementById("ziarButton").addEventListener("click", () => addPhotos(ziarImgArray, nrOfPpl.ziar));
document.getElementById("evalButton").addEventListener("click", () => addPhotos(evalImgArray, nrOfPpl.eval));
document.getElementById("proButton").addEventListener("click", () => addPhotos(proImgArray, nrOfPpl.pro));
document.getElementById("test").addEventListener("click", () => addPhotos(dept.imgArray, dept.pplNr));
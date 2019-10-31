document.getElementById("easterEggTrigger").addEventListener("click", () => easterEgg());

function easterEgg(){
    alert("EasterEgg");
    let Egg = new Array;
    removeCurrentPhotos()
    for (i=1;i<=4;i++)
    {
        Egg[i] = new Image;
        Egg[i].id = `gif ${i}`
        Egg[i].src = `./images/georgegif/egg (${i}).gif` 
        Egg[i].style.position = "center"
        Egg[i].style.width = "432px";
        Egg[i].style.height = "600px";

        document.getElementById("poze").appendChild(Egg[i]);
    }
    document.getElementById('gif 1').scrollIntoView({behavior: 'smooth'});
}

        
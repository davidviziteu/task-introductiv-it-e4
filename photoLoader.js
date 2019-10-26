/*
it
geta
pro 
ri 
re
prm 
eval
ziar
8*/


for(let i = 1; i <= it.nrOfPpl; ++i){
    it.imgArray[i] = new Image();
    it.imgArray[i].src = `./images/it/img (${i}).jpg`;
}
for(let i = 1; i <= geta.nrOfPpl; ++i){
    geta.imgArray[i] = new Image();
    geta.imgArray[i].src = `./images/geta/img (${i}).jpg`;
}
for(let i = 1; i <= pro.nrOfPpl; ++i){
    pro.imgArray[i] = new Image();
    pro.imgArray[i].src = `./images/pro/img (${i}).jpg`;
}
for(let i = 1; i <= ri.nrOfPpl; ++i){
    ri.imgArray[i] = new Image();
    ri.imgArray[i].src = `./images/ri/img (${i}).jpg`;
}
for(let i = 1; i <= re.nrOfPpl ;++i){
    re.imgArray[i] = new Image();
    re.imgArray[i].src = `./images/re/img (${i}).jpg`;
}
for(let i = 1; i <= prm.nrOfPpl ;++i){
    prm.imgArray[i] = new Image();
    prm.imgArray[i].src = `./images/prm/img (${i}).jpg`;
}
for(let i = 1; i <= eval.nrOfPpl ;++i){
    eval.imgArray[i] = new Image();
    eval.imgArray[i].src = `./images/eval/img (${i}).jpg`;
}
for(let i = 1; i <= ziar.nrOfPpl ;++i){
    ziar.imgArray[i] = new Image();
    ziar.imgArray[i].src = `./images/ziar/img (${i}).jpg`;
}

for(let i = 1; i <= dept.nrOfPpl ;++i){
    dept.imgArray[i] = new Image();
    dept.imgArray[i].src = `./images/sample_photos/img (${i}).jpg`;
}
alert(dept.imgArray[1].src);



const body=document.getElementsByTagName("body")[0]

function colorFlipper(color){
    body.style.backgroundColor=color;
}

function colorRandom(){
    const red=Math.round(Math.random()*255);
    const green=Math.round(Math.random()*255);
    const blue=Math.round(Math.random()*255);
    const random=`rgb(${red},${green},${blue})`
    body.style.backgroundColor=random;
}
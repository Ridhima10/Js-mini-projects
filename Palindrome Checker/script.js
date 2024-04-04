const input=document.getElementById("input")

function revString(str){
   return str.split("").reverse().join("");
}

function check(){
    const value=input.value;
    const reverse=revString(value)

    if(value===reverse){
        alert("P A L I N D R O M E")
    }
    else{
        alert("Not Today !!")
    }
    input.value=""
}
document.getElementById("hover").onscroll = ()=>{
    document.getElementById("red").style.width =  window.scrollX;
   
}

window.onscroll =  function f(){
    document.getElementById('red').style.left = (pageYOffset/10)+"px";

  
}
;
document.getElementById("red").onclick = ()=>{
    document.getElementById("red").style.height = "100px";
}
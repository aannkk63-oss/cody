function checkPass(){
let pass=document.getElementById("pass").value;

if(pass==="سكر شهد"){
document.getElementById("passwordScreen").style.display="none";
document.getElementById("envelope").classList.remove("hidden");
}else{
alert("الباسورد غلط 😅");
}
}

function openEnvelope(){
document.getElementById("envelope").style.display="none";
document.getElementById("main").classList.remove("hidden");
document.getElementById("music").play();
startDecor();
}

function startDecor(){
setInterval(()=>{
let el=document.createElement("div");
el.classList.add("decor");

if(Math.random()>0.5){
el.innerHTML="🏮";
}else{
el.innerHTML="❤️";
}

el.style.left=Math.random()*100+"vw";
document.body.appendChild(el);

setTimeout(()=>{el.remove()},7000);

},400);
}

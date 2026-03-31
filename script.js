// ✅ طلب الاسم ورقم الموبايل أول ما الموقع يفتح
window.onload = function () {

let name = prompt("اكتب اسمك 👤");
let phone = prompt("اكتب رقم الموبايل 📱");

if(name && phone){
alert("أهلاً " + name + " ❤️");
}else{
alert("من فضلك ادخل البيانات كاملة");
}

// ✅ تشغيل سلايدر الصور
startSlider();

};


// ✅ تحريك الصور تلقائي
function startSlider(){

let cards = document.querySelectorAll(".card");
let index = 0;

setInterval(()=>{

cards.forEach(card=>{
card.style.display="none";
});

cards[index].style.display="block";

index++;
if(index>=cards.length){
index=0;
}

},2000);

}


// زر الطلب
function orderNow(){
alert("تم الضغط على طلب الآن 🍔");
} 
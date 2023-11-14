const click1=document.querySelector('.bam1')
click1.addEventListener("click",function(){
   document.querySelector('.anh1').style.display="flex";
   document.querySelector('.anh2').style.display="none";
   document.querySelector('.anh3').style.display="none";
   document.querySelector('.anh4').style.display="none";
   document.querySelector('.anh5').style.display="none";
})  
const click2=document.querySelector('.bam2')
click2.addEventListener("click",function(){
   document.querySelector('.anh2').style.display="flex";
   document.querySelector('.anh1').style.display="none";
   document.querySelector('.anh3').style.display="none";
   document.querySelector('.anh4').style.display="none";
   document.querySelector('.anh5').style.display="none";
})  
const click3=document.querySelector('.bam3')
click3.addEventListener("click",function(){
   document.querySelector('.anh3').style.display="flex";
   document.querySelector('.anh2').style.display="none";
   document.querySelector('.anh1').style.display="none";
   document.querySelector('.anh4').style.display="none";
   document.querySelector('.anh5').style.display="none";
}) 
const click4=document.querySelector('.bam4')
click4.addEventListener("click",function(){
   document.querySelector('.anh4').style.display="flex";
   document.querySelector('.anh1').style.display="none";
   document.querySelector('.anh2').style.display="none";
   document.querySelector('.anh3').style.display="none";
   document.querySelector('.anh5').style.display="none";
})  
const click5=document.querySelector('.bam5')
click5.addEventListener("click",function(){
   document.querySelector('.anh5').style.display="flex";
   document.querySelector('.anh1').style.display="none";
   document.querySelector('.anh2').style.display="none";
   document.querySelector('.anh3').style.display="none";
   document.querySelector('.anh4').style.display="none";
}) 
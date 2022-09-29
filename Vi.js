


function change1(){

    document.getElementById("orchid").src=("./orchid1_AdobeExpress.mp")  
 }
 function change2(){

    document.getElementById("orchid").src=("./orchid.mp4")
 }
function change3(){

    document.getElementById("rose").src=("./roses_AdobeExpress.mp4")  
 }
 function change4(){
    
    document.getElementById("rose").src=("./red rose.mp4")
 }
 function change5(){

    document.getElementById("peony").src=("./peony1.mp4")  
 }
//  function change6(){
    
//     document.getElementById("peony").src=("./peony.mp4")
//  }
 function change7(){

    document.getElementById("tulip").src=("./tulip_AdobeExpress.mp4")  
 }
 function change8(){
    
    document.getElementById("tulip").src=("./light pink tulip.mp4")
 }
 function change9(){

    document.getElementById("carnation").src=("./carnation_AdobeExpress.mp4")  
 }
 function change10(){
    
    document.getElementById("carnation").src=("./light pink carnation.mp4")
 }
 function change11(){

    document.getElementById("lily").src=("./lily.mp4")  
 }
//  function change12(){
    
//     document.getElementById("lily").src=("./orange lily.mp4")
//  }
function change13(){

   document.getElementById("lace").src=("./lace leaf.mp4")  
}
function change14(){

   document.getElementById("gypsphila").src=("./gypsphila_Trim.mp4")  
}
function change15(){

   document.getElementById("hyacinth").src=("./hyacinth.mp4")  
}
function change16(){

   document.getElementById("sun_flower").src=("./sun_flower_AdobeExpress.mp4")  
}
function change17(){

   document.getElementById("lilac").src=("./lilac.mp4")  
}
function change18(){

   document.getElementById("narcissus").src=("./narcissus.mp4")  
   
}

var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
}
var clicks1 = 0;
function onClick1() {
   clicks += 1;
   document.getElementById("clicks1").innerHTML = clicks1;
 }
 function onClick2() {
   clicks += 1;
   document.getElementById("clicks2").innerHTML = clicks;
 }
 function onClick3() {
   clicks += 1;
   document.getElementById("clicks3").innerHTML = clicks;
 }
 function onClick4() {
   clicks += 1;
   document.getElementById("clicks4").innerHTML = clicks;
 }
 function onClick5() {
   clicks += 1;
   document.getElementById("clicks5").innerHTML = clicks;
 }
 function onClick6() {
   clicks += 1;
   document.getElementById("clicks6").innerHTML = clicks;
 }
 function onClick7() {
   clicks += 1;
   document.getElementById("clicks7").innerHTML = clicks;
 }
 function onClick8() {
   clicks += 1;
   document.getElementById("clicks8").innerHTML = clicks;
 }
 function onClick9() {
   clicks += 1;
   document.getElementById("clicks9").innerHTML = clicks;
 }
 function onClick10() {
   clicks += 1;
   document.getElementById("clicks10").innerHTML = clicks;
 }
 function onClick11() {
   clicks += 1;
   document.getElementById("clicks11").innerHTML = clicks;
 }


 var cardDrop = document.getElementById('card-dropdown');
var activeDropdown;
cardDrop.addEventListener('click',function(){
  var node;
  for (var i = 0; i < this.childNodes.length-1; i++)
    node = this.childNodes[i];
    if (node.className === 'dropdown-select') {
      node.classList.add('visible');
       activeDropdown = node; 
    };
})

window.onclick = function(e) {
  console.log(e.target.tagName)
  console.log('dropdown');
  console.log(activeDropdown)
  if (e.target.tagName === 'LI' && activeDropdown){
    if (e.target.innerHTML === 'Master Card') {
      document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Master Card';
    }
    else if (e.target.innerHTML === 'American Express') {
         document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/f5hyn6u05ktql8d/amex-icon-6902.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'American Express';      
    }
    else if (e.target.innerHTML === 'Visa') {
         document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Visa';
    }
  }
  else if (e.target.className !== 'dropdown-btn' && activeDropdown) {
    activeDropdown.classList.remove('visible');
    activeDropdown = null;
  }
}

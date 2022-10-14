// rotating img

window.onscroll = function () {
    scrollRotate();
 };

function scrollRotate() {
let image = document.getElementById("rotateImg");
image.style.transform = "rotate(" + window.pageYOffset/5 + "deg)";
}

// text changing

const textArray=["Get charming, refurbished  rooms, round the globe.","Starting from $3500 month plus security deposit."];
var i=0;
function slideit(){
    document.getElementById("t1").innerHTML=textArray[i];
    if(i<1){
        i++;
    } else{
        i=0;
    } setTimeout(slideit,2000);
}
slideit();

// --------------------on scroll content animation

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var j = 0; j < reveals.length; j++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[j].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[j].classList.add("active");
      } else {
        reveals[j].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  // -------------------- Hamburger menu

  const element= document.querySelector('.ham-btn');
  element.addEventListener('click',hamburger);

  function hamburger(){
    
    const itemClass =document.querySelector('.main-nav');
    itemClass.classList.toggle('show');
  }

//  ------------------------ form input validation

function formValidate(){
  const fname=document.getElementById('fname').value;
  const lname=document.getElementById('lname').value;
  const inEmail=document.getElementById('inEmail').value;

  function validateEmail(email){
    const pattern=/\S+@\S+\.\S+/;
    return pattern.test(email);
  }

  if(fname===""){
    alert("Enter first name.");
  }else if(lname===""){
    alert("Enter last name.");
  }else if(!validateEmail(inEmail)){
    alert("Enter a valid email id example : 'mymail@gmail.com'")
  }else{
  alert("Thanks for signing up with us < "+fname+" > your Response has been submited.") ;
  }
};



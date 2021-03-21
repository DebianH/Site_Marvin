const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
//Slides js
var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 5000);

//Animation url
//const frames = ['_____🎵🎵🎵_____📻📻','Marvin'];
//let posicion = 0;
//function animarURL(){
//  window.location.hash = frames[posicion%frames.length];
//  posicion++;
//  setTimeout(animarURL, 200)
//}
//animarURL();


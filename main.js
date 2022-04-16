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


//Animation url
//const frames = ['_____🎵🎵🎵_____📻📻','Marvin'];
//let posicion = 0;
//function animarURL(){
//  window.location.hash = frames[posicion%frames.length];
//  posicion++;
//  setTimeout(animarURL, 200)
//}
//animarURL();

//Play Audio
var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause(){
  if(count == 0){
    count = 1;
    audio.play();
    playPauseBTN.innerHTML = "Pause";
  }else{
    count = 0;
    audio.pause();
    playPauseBTN.innerHTML = "Play ►";
  }

}

function stop(){
  playPause()
  audio.pause();
  audio.currentTime = 0;
  playPauseBTN.innerHTML = "Play ►";
}


      
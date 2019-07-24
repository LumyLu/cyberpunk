const icon = document.querySelector(".wrapper.music svg");
var audio = new Audio();
audio.src = "1.mp3";
icon.addEventListener("click", function(){
  icon.classList.toggle("mute");
  console.log("log:"+icon.classList[0]);
  if (!(icon.classList[0] == "mute")) {
    console.log("mute");
    audio.pause();
  }
  else{
    console.log("play");
    audio.play();
  }
});
console.log("welcome to spotify")

let songindex = 0;
let audioelement = new Audio('1.mp3');
let masterplay = document.querySelector('#masterplay')
let myprogreesbar = document.getElementById('myprogressbar')
let mastersongname = document.getElementById("mastersongname")
let gif = document.getElementById("gif")
let songitem = Array.from(document.getElementsByClassName("songitem"));
let songs = [
    {songname:"salam-e-Ishq" ,filepath:"1.mp3", coverpath:"power.jpg"},
    {songname:"power" ,filepath:"2.mp3", coverpath:"aatmukabla.jpg"},
    {songname:"Jatt Da Muqabala",filepath:"3.mp3",coverpath:".jpg"},
    {songname:"Davil" ,filepath:"4.mp3", coverpath:"cover/4.jpg"},
    {songname:"Cheques Mashup" ,filepath:"5.mp3", coverpath:"cover/5.jpg"},
]

songitem.forEach((element, i) => {
   element.getElementsByTagName("img")[0].src[i].coverpath
   element.getElementsByClassName("songname")[0].innerHTML = songs[i].songname;
})

masterplay.addEventListener("click", () => {
   if(audioelement.paused || audioelement.currenttime<=0) {
    audioelement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
   } else {
      audioelement.pause();
      masterplay.classList.remove("fa-pause-circle");
      masterplay.classList.add("fa-play-circle");
      gif.style.opacity = 0;
   }
})

audioelement.addEventListener("timeupdate" , () => {
   console.log("timeupdate");
    progrees = parseInt((audioelement.currentTime/audioelement.duration)*100)
    console.log(progrees);
    myprogreesbar.value = progrees;
})

myprogreesbar.addEventListener("change", () => {
   audioelement.currentTime = myprogreesbar.value * audioelement.duration/100;
})

const makeallplay = () => {
   Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
   element.classList.remove("fa-pause-circle");
   element.classList.add("fa-play-circle");
  })
}

Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
   element.addEventListener("click",(e) => {
    makeallplay();
    songindex = parseInt(e.target.id);
    e.target.classList.remove("fa-play-circle");
     e.target.classList.add("fa-pause-circle");
     audioelement.src = `${songindex+1}.mp3`;
       mastersongname.innerText = songs[songindex].songname;
     audioelement.currentTime = 0;
     audioelement.play();
     gif.style.opacity = 1;
     masterplay.classList.remove("fa-play-circle");
     masterplay.classLista.add("fa-pause-circle");
   })
})


document.getElementById("next").addEventListener("click", () => {
  if(songindex>=5){
   songindex = 0;
  } else{
   songindex += 1;
  }
  audioelement.src = `${songindex+1}.mp3`;
  mastersongname.innerText = songs[songindex].songname;
  audioelement.currentTime = 0;
  audioelement.play();
  masterplay.classList.remove("fa-play-circle");
  masterplay.classLista.add("fa-pause-circle");
})

document.getElementById("previous").addEventListener("click", () => {
   if(songindex<=0){
    songindex = 0;
   } else{
    songindex -= 1;
   }
   audioelement.src = `${songindex+1}.mp3`;
   mastersongname.innerText = songs[songindex].songname;
   audioelement.currentTime = 0;
   audioelement.play();
   masterplay.classList.remove("fa-play-circle");
   masterplay.classLista.add("fa-pause-circle");
 })
// CHANGING MORNING AFTERNOON AND EVENING
let timeOfDay = document.getElementById("time-of-day");

function updateTime() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();

    if (currentHour < 12) {
        timeOfDay.innerHTML = "Good morning";
    } else if (currentHour < 18) {
        timeOfDay.innerHTML = "Good afternoon";
    } else {
        timeOfDay.innerHTML = "Good evening";
    }
}

setInterval(updateTime, 1000);


// Vol range value changer

let volResult = document.getElementById("vol-result");
let volEntry = document.getElementById("volume");
function change(){
    volResult.innerText = volEntry.value;
    setInterval(change, 10);
    music.volume = volEntry.value/100;
}


// LIKE JS
const heartText = document.getElementById('like');
let clicked = false;
heartText.addEventListener('click', function() {
  if (!clicked) {
    heartText.style.color = 'rgb(31, 216, 96';
    clicked = true;
  } else {
    heartText.style.color = 'transparent';
    clicked = false;
  }
});


// SHUFFLE JS
const shuffle = document.getElementById('shuffle');
let clickedShuffle = false;
shuffle.addEventListener('click', function() {
  if (!clickedShuffle) {
    shuffle.style.color = 'rgb(31, 216, 96';
    clickedShuffle = true;
  } else {
    shuffle.style.color = 'rgb(234, 238, 241)';
    clickedShuffle = false;
  }
});


// REPEAT JS
const repeat = document.getElementById('repeat');
let clickedRepeat = false;
repeat.addEventListener('click', function() {
  if (!clickedRepeat) {
    repeat.style.color = 'rgb(31, 216, 96';
    clickedRepeat = true;
  } else {
    repeat.style.color = 'rgb(234, 238, 241)';
    clickedRepeat = false;
  }
});

// COVERART CLICK 
const songInfo = document.getElementById('songinfo');
const coverArt = document.getElementById('coverart');
const likenArtist = document.getElementsByClassName('like-n-artist');
let clickedCoverart = false;
coverArt.addEventListener('click', function() {
if(!clickedCoverart){
  songInfo.style.transform = scale(2);
}
})

alert("UNDER CONSTRUCTION. This site is not responsive on mobile phones.");


let music = [new Audio("music/GUMAAN - Young Stunners _ Talha Anjum _ Talhah Yunus _ Prod. By Jokhay (Official Music Video).mp3"), new Audio("music/Osho Jain - Tu Aisa Kaise Hai.mp3")];
let i = 0;
const playpause = document.getElementById("playpausebtn");
playpause.addEventListener('click',()=> {
  if(playpause.innerHTML == '<i class="fa-solid fa-circle-pause"></i>'){
    playpause.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
    music[i].pause();
  }
  else{
    playpause.innerHTML = '<i class="fa-solid fa-circle-pause"></i>';
    music[i].play();
  }
});

const muteToggle = document.getElementById("volume-container");
muteToggle.addEventListener('click',()=> {
  if(muteToggle.innerHTML == '<i class="fa-solid fa-volume-xmark"></i>'){
    muteToggle.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    volEntry.value = Math.random()*100;
    music[i].muted = false;
  }
  else{
    muteToggle.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    volEntry.value =0;
    music[i].muted = true;
  }
});
music[i].addEventListener('timeupdate', () => {
  const currentTime = formatTime(music[i].currentTime);
  const duration = formatTime(music[i].duration);
  
  document.getElementById('current-time').textContent = currentTime;
  document.getElementById('duration').textContent = duration;
});

// Format time in MM:SS format
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  
  return `${formattedMinutes}:${formattedSeconds}`;
}
const progressBar = document.getElementById("progress");

// Update the progress bar as the audio plays
music[i].addEventListener('timeupdate', () => {
  const progress = (music[i].currentTime / music[i].duration) * 100;
  progressBar.style.width = `${progress}%`;
});

const artistButton = document.getElementById('artisttinformationclick');
const artistFlex = document.getElementById('songinfo');
const songName = document.querySelector('#artist-info-player>h6');
const artistName = document.querySelector('#artist-info-player>a>p');

artistButton.addEventListener('click', ()=>{
  if (artistButton.style.position= 'default') {
    artistButton.style.scale= '2';
    artistButton.style.position= 'absolute';
    artistButton.style.left= '6em';
    artistButton.style.bottom= '6em';
    artistButton.style.backgroundColor= '#1f1f1f';
    artistButton.style.padding= '.5rem';
    artistButton.style.fontSize= '0.7rem';
    artistButton.style.borderRadius= '0  10px 0 0';
    artistButton.style.borderTop= '1px solid var(--text-color)';
    artistButton.style.borderRight= '1px solid var(--text-color)';
    artistFlex.style.display= 'flex';
    artistFlex.style.flexDirection= 'column';
  } else if(artistButton.style.position== 'absolute') {
    artistButton.style.scale= '1';
    artistButton.style.position= 'default';
    artistButton.style.left= '0';
    artistButton.style.bottom= '0';
    artistButton.style.backgroundColor= 'transparent';
    artistButton.style.padding= '0';
    artistButton.style.fontSize= '0.7rem';
    artistButton.style.borderRadius= '0';
    artistButton.style.borderTop= 'none';
    artistButton.style.borderRight= 'none';
    artistFlex.style.display= 'block';
    artistFlex.style.flexDirection= 'default';
  }
 else {
    artistButton.style.scale= '1';
    artistButton.style.position= 'default';
    artistButton.style.left= '0';
    artistButton.style.bottom= '0';
    artistButton.style.backgroundColor= 'transparent';
    artistButton.style.padding= '0';
    artistButton.style.fontSize= '0.7rem';
    artistButton.style.borderRadius= '0';
    artistButton.style.borderTop= 'none';
    artistButton.style.borderRight= 'none';
    artistFlex.style.display= 'block';
    artistFlex.style.flexDirection= 'default';
  }
});
let song = document.getElementById('audio');
let progress = document.getElementById('progress');
let songCurrent = document.getElementById('song-current');
let songMax = document.getElementById('song-max');
let imgCover = document.getElementById('imageCover');
let songName = document.getElementById('sName');
let songAuthor = document.getElementById('sAuthor');
let isplaying = false;

progress.max = song.duration;
songMax.textContent = Math.floor(song.duration /60)+':'+ Math.floor(song.duration %60);

song.addEventListener('loadedmetadata', function(){
    progress.max = song.duration;
});

song.addEventListener('timeupdate', function(){
    progress.value = song.currentTime;
    let minutes = Math.floor(song.currentTime /60);
    let seconds = Math.floor(song.currentTime %60);

    if(seconds<10){
        seconds = '0'+seconds;
    }
    songCurrent.textContent = minutes+':'+seconds;
});

progress.addEventListener('click', function(event){
    let seekTime = (event.offsetX / progress.offsetWidth) * progress.max;
    song.currentTime = seekTime;
});


document.getElementById('playPause').addEventListener('click', function(){
    if(isplaying){
        document.getElementById('playBTN').style.display = 'inline';
        document.getElementById('pauseBTN').style.display = 'none';
        song.pause();        
    }else{
        document.getElementById('playBTN').style.display = 'none';
        document.getElementById('pauseBTN').style.display = 'inline';
        song.play();
    }

    isplaying = !isplaying;
    this.classList.toggle('paused');
});

function changeSong(){
    var currSong = song.duration;
    
    
    if(currSong == 72.045688){
        document.getElementById('playBTN').style.display = 'inline';
        document.getElementById('pauseBTN').style.display = 'none';
        document.getElementById('audio').pause();
        isplaying = !isplaying;
    
        imgCover.src = "images/cover-2.png";
        songName.textContent = "Forest Lullaby"; 
        songAuthor.textContent = "Lesfm"; 
        song.src = "music/forest-lullaby-110624.mp3"; 
        songMax.textContent = '2:18';
    } else{
        document.getElementById('audio').pause();
        document.getElementById('playBTN').style.display = 'inline';
        document.getElementById('pauseBTN').style.display = 'none';
        isplaying = !isplaying;
    
        imgCover.src = "images/cover-1.png";
        songName.textContent = "Lost in the City Lights"; 
        songAuthor.textContent = "Cosmo SHeldrake"; 
        song.src = "music/lost-in-city-lights-145038.mp3";        
        songMax.textContent = '1:12';
    }
}



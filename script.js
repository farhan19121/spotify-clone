
//VARIABLES
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let play_sml = Array(document.getElementsByClassName("play"));
console.log(play_sml);
let songs = [
    {songName:"Salam-e-Ishq" , filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"Salam-e-Ishq" , filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"banjara" , filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"Salam-e-Ishq" , filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"Salam-e-Ishq" , filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
];

//PLAY PAUSE SYSTUM

masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play'); 
        
        gif.style.opacity =0;

    }
})

//PROGRESS BAR

audioElement.addEventListener('timeupdate' , () =>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
    console.log(progress);
})

myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = ((myProgressBar.value*audioElement.duration)/100);
})


//SONG LOADER   

songs.forEach((e,index) =>{

    container = document.getElementById('container');

    add_song = document.createElement("div");
    add_song.classList.add('songList');
    add_song.classList.add(index.toString());
    m = index+1;
    console.log(m);
    add_song.innerHTML = ("<div><div class='songItem'><img src='covers/"+ m +".jpg' alt='1'><span>"+e.songName+"</span><span class='songlistplay'><span class='timestamp'>05:34 <i class='fa-solid play fa-play'  id = '"+ m +"'></i></span></span></div></div>");
    console.log(add_song);
    container.appendChild(add_song);

    option_play = document.getElementById(m);

    option_play.addEventListener('click' , ()=>{

        for (let i =1 ; i<6 ; i++)
        {
            document.getElementById(i).addEventListener('click',()=>{
                if (audioElement.played || audioElement.currentTime>=0){
                    audioElement.pause;
                    audioElement.currentTime=0;
                }

                audioElement = new Audio("songs/"+i+".mp3");
                console.log(i);
            })
        }


        
        console.log(audioElement);
        if (audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
            gif.style.opacity =1;
            console.log("songs/"+option_play.id+".mp3"); 
        }
        
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-pause');
            masterPlay.classList.add('fa-play');
            gif.style.opacity =0;
    
        }
    });
})




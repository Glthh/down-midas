
isPlaying = false;
var musicPlaying = document.getElementById("music-playing");
var music = document.getElementById("music-playing");

var nome = "";
function musica() {
nome = document.getElementById('valor').value;
fetch(`https://saipulanuar.ga/api/yt/playmp3?query=${nome}`)
.then(bct => bct.json())
.then(ress => ress.result)
.then(puxJson => {
const kkkk = [];
biel = {
title : puxJson.title,
thumb: puxJson.thumb,
url: puxJson.url,
canal: puxJson.channel,

};
kkkk.push(biel);

mae = kkkk.map((kkk) => `
         <div class="pla">
       <br><br> <marquee class="kk"><h2>${kkk.title}<h2></marquee><br><br>
<div id="image-music">
    <img src="${kkk.thumb}" style="width: 300px; height: 300px;border-radius: 10%;border:2px solid black; "></img>
</div>
       <div class="kkkk"><i>${kkk.canal}</i></div>
                    <div class="duracao">
        <div class="barra">
            <progress value="0" max="1"></progress>
            <div class="ponto"></div>
        </div>
        
        

        <audio id="music-playing" src="${kkk.url}"></audio>

       <div class="player">
           <a href="${kkk.url}" class="btn-player">
                <img src="./download-music.svg" alt="">
            </a>
            

            <button class="btn-player" id="play-prevMusic">
                <img src="./prev-music.svg" alt="">
            </button>

            <div class="controlPlayPauseMusic" onclick="toggleIsPlaying()">

                <button class="btn-player" id="play-music">
                    <img id="play-music-icon" src="./play-music.svg"/>
                </button>

            </div>

            <button class="btn-player" id="play-nextMusic">
                <img src="./next-music.svg" alt="" onclick="nextMusic()">
            </button>

            <button class="btn-player" onclick="muteMusic()">
                <img id="mute-music-icon" src="./mute-music.svg"/>
            </button>
        </div>
        </div>

`).join(" ")
document.querySelector('.pg').innerHTML = mae;

})
}

//Setar a música atual selecionada
function setCurrentMusic(id) {
    var image = document.getElementById("image-music");
    var nameMusic = document.getElementById("name-music");
    var nameArtist = document.getElementById("name-artist");
    var musicPlaying = document.getElementById("music-playing");
    var playMusicIcon = document.getElementById("play-music-icon");
    
    image.style.backgroundImage = `url(${myMusics[id].bg})`;
    nameMusic.innerText = `${myMusics[id].name}`;
    nameArtist.innerText = `${myMusics[id].artist}`;
    musicPlaying.src = `${myMusics[id].song}`;

    progressBar.style.width = '0%';
    playMusicIcon.src = './play-music.svg';
    isPlaying = false;
};

//Toggle de play e pause
function toggleIsPlaying() {
    var playMusicIcon = document.getElementById("play-music-icon");

    if(isPlaying) {
        playMusicIcon.src = './play-music.svg';
        isPlaying = false;
        pauseMusic(playMusicIcon);
    } else {
        playMusicIcon.src = './pause-music.svg';
        isPlaying = true;
        playMusic(playMusicIcon);
    }
};


//Começar uma música
function playMusic(icon) {
    var playMusicIcon = document.getElementById("play-music-icon");
    playMusicIcon.src = './pause-music.svg';
    isPlaying = true;
    music = document.getElementById("music-playing");
    music.play();
};

//Pausar uma música



function pauseMusic(icon) {
    var playMusicIcon = document.getElementById("play-music-icon");
    playMusicIcon.src = './play-music.svg';
    music = document.getElementById("music-playing");
    music.pause();
};


      
      

let musicaa = document.querySelector('audio');
let musicaIndex = 0;

let tempoDecorrido = document.querySelector('.tempo .inicio');

let duracaoMusica = document.querySelector('.tempo .fim');

musicaa.addEventListener('timeupdate', atualizarBarra);


function renderizarMusica(musicaIndex){
    musica.setAttribute('src', musicas[musicaIndex].source);

    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[musicaIndex].titulo;
        nomeArtista.textContent = musicas[musicaIndex].artista;
        imagem.src = musicas[musicaIndex].img;
    
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });

    document.body.append(musica);
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;

    if (campoSegundos < 10){
        campoSegundos = '0'+ campoSegundos;
    }
    return `${campoMinutos}:${campoSegundos}`;
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration)*100) + '%';
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}


 function download() {  
const fs = require('fs');
 const folder = "downloads/"
 const fileName = `caju.png`
 const downloadFile = fetch("https://st2.depositphotos.com/2501025/5654/i/950/depositphotos_56545139-stock-photo-password.jpg")
 const file = fs.createWriteStream(folder + fileName);
 
downloadFile.then(res => {
            res.body.pipe(file)
            file.on("finish", () => {
                file.close()
                resolve()
            });
            file.on("error", (err) => reject(err));
});
        
  }

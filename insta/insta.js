
isPlaying = false;
var musicPlaying = document.getElementById("music-playing");
var music = document.getElementById("music-playing");

var nome = "";
function musica() {
nome = document.getElementById('valor').value;
fetch(`https://anonimo-api.herokuapp.com/api/instagram?url=${nome}&apikey=an%C3%B4nimo-api-v2`)
.then(bct => bct.json())
.then(ress => ress.resultado)
.then(puxJson => {
const kkkk = [];
biel = {
thumb: puxJson.thumb,
url: puxJson.download,
canal: puxJson.canal,

};
kkkk.push(biel);

mae = kkkk.map((kkk) => `
         <div class="plaf">
       <video width="320" height="240" controls="controls" autoplay="autoplay">
<source src="${kkk.url}" type="video/mp4">
</video>
</video>
<a href="${kkk.url}" class="button button3-1">Download</a>
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

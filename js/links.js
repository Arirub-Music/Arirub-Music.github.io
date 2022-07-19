$( document ).ready(function(){
const raiz = document.querySelector('#raiz');
const cate = document.querySelector('#cate');
const artistas = document.querySelector('#artistas');
const mes = document.querySelector('#mes');


const spotify = document.querySelector('#Spotify');
const YTM = document.querySelector('#YTM');
const SoundC = document.querySelector('#SoundC');
const Deezer = document.querySelector('#Deezer');
const ClaroM = document.querySelector('#ClaroM');
const YandexM = document.querySelector('#YandexM');
const Anghami = document.querySelector('#Anghami');
const AmazonM = document.querySelector('#AmazonM');


const DeezerUP = document.querySelector('#DeezerUP');
const SoundCUP = document.querySelector('#SoundCUP');
const YTUP = document.querySelector('#YTUP');
const spotifyUP = document.querySelector('#spotifyUP');
const ClaroMUP = document.querySelector('#ClaroMUP');
const YandexMUP = document.querySelector('#YandexMUP');



raiz.addEventListener('click', () => {
    window.location="/index.html"
});
cate.addEventListener('click', () => {
    window.location="/categorias/categorias.html"
});
artistas.addEventListener('click', () => {
    window.location="/artistas/artistas.html"
});
mes.addEventListener('click', () => {
    window.location="/mes/mes.html"
});


spotify.addEventListener('click', () => {
    window.open('https://open.spotify.com/user/naira12356?si=ab59800de9b84e11', '_blank');
});
YTM.addEventListener('click', () => {
    window.open('https://music.youtube.com/channel/UCuvdiDTFENmblPGEnzqVVOA', '_blank');
});
SoundC.addEventListener('click', () => {
    window.open('https://soundcloud.com/arirub-music/albums', '_blank');
});
Deezer.addEventListener('click', () => {
    window.open('https://www.deezer.com/es/profile/4779447822/playlists', '_blank');
});
ClaroM.addEventListener('click', () => {
    window.open('https://www.claromusica.com/profile/294795189', '_blank');
});
YandexM.addEventListener('click', () => {
    window.open('https://music.yandex.com/users/arirub.music21@gmail.com/playlists', '_blank');
});
Anghami.addEventListener('click', () => {
    window.open('https://play.anghami.com/profile/121049751', '_blank');
});
AmazonM.addEventListener('click', () => {
    window.open('https://music.amazon.com.mx/profiles/hm7clixdkvmlctwott5265n4ou?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_erBnOsLfYiXPOGlGl4EeBqgQX', '_blank');
});


DeezerUP.addEventListener('click', () => {
    window.open('https://www.deezer.com/es/playlist/10505630122', '_blank');
});
SoundCUP.addEventListener('click', () => {
    window.open('https://soundcloud.com/arirub-music/sets/junio-2022?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', '_blank');
});
YTUP.addEventListener('click', () => {
    window.open('https://youtu.be/8PfQOxCp4yA', '_blank');
});
spotifyUP.addEventListener('click', () => {
    window.open('https://open.spotify.com/playlist/3aWEEJ5bKvibgtqxZiQ8n7?si=fb5ba28e29e944ae', '_blank');
});
ClaroMUP.addEventListener('click', () => {
    window.open('https://www.claromusica.com/userPlaylist/63039571/MX', '_blank');
});
YandexMUP.addEventListener('click', () => {
    window.open('https://music.yandex.com/users/arirub.music21@gmail.com/playlists/1103?lang=en', '_blank');
});

})

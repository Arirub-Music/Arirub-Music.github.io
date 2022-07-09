const cate = document.querySelector('#cate');
const artistas = document.querySelector('#artistas');
const twitter = document.querySelector('#twitter');
const tiktok = document.querySelector('#tiktok');


cate.addEventListener('click', () => {
    window.location="/categorias/categorias.html"
});

artistas.addEventListener('click', () => {
    window.location="/artistas/artistas.html"
});

twitter.addEventListener('click', () => {
window.open("https://twitter.com/ArirubMusic", '_blank')
});

tiktok.addEventListener('click', () => {
window.open("https://www.tiktok.com/@arirubmusic", '_blank')
});

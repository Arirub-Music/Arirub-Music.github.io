const raiz = document.querySelector('#raiz');
const cate = document.querySelector('#cate');
const artistas = document.querySelector('#artistas');
const mes = document.querySelector('#mes');
const conciertos = document.querySelector('#conciertos');
const Discord = document.querySelector('#Discord');


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
conciertos.addEventListener('click', () => {
    window.location="/conciertos/conciertos.html"
});

const raiz = document.querySelector('#raiz');
const cate = document.querySelector('#cate');
const artistas = document.querySelector('#artistas');
const mes = document.querySelector('#mes');


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

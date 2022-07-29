  const facebook = document.querySelector('#facebook');
  const instagram = document.querySelector('#instagram');
  const twitter = document.querySelector('#twitter');
  const tiktok = document.querySelector('#tiktok');


  facebook.addEventListener('click', () => {
    window.open("https://www.facebook.com/Arirub-Music-106985735381525", '_blank')
});

instagram.addEventListener('click', () => {
  window.open("https://www.instagram.com/arirub_music/", '_blank')
});

twitter.addEventListener('click', () => {
  window.open("https://twitter.com/ArirubMusic", '_blank')
});

tiktok.addEventListener('click', () => {
  window.open("https://www.tiktok.com/@arirubmusic", '_blank')
});


/*Swal.fire({
  title: 'Unete a Nuestro <span class="icon-discord"></span> Discord',
  showCancelButton: false,
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
})*/

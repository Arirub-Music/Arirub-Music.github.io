const videos = document.querySelector('#videos');
  
videos.addEventListener('click', () => {
  const { value: red } = Swal.fire({
      title: 'Videos',
      input: 'radio',
      showCancelButton: true,
      html: '<span class="icon-gamestry"></span> <span class="icon-twitch"></span> <span class="icon-youtube"></span>',
      position: 'top-start',
      inputOptions: {
        Gamestry: 'Gamestry',
        Twitch: 'Twitch',
        YouTube: 'YouTube',
      },
      inputValidator: (value) => {
          if (value === 'Gamestry'){
              window.open("https://gamestry.com/Arirub%20Music", '_blank')
          }
          if (value === 'Twitch'){
              window.open("https://www.twitch.tv/arirubmusic", '_blank')
          }
          if (value === 'YouTube'){
              window.open("https://www.youtube.com/channel/UCuvdiDTFENmblPGEnzqVVOA", '_blank')
          }
        if (!value) {
          return 'You need to choose something!'
        }
      }
    })
});


const exclusiva = document.querySelector('#exclusiva');

exclusiva.addEventListener('click', () => {
    const { value: fruit } = Swal.fire({
        title: 'Playlist Exclusivas',
        input: 'select',
        html: '<span class="icon-spotify"></span> <span class="icon-deezer"></span> <span class="icon-soundcloud"></span> <span class="icon-youtube"></span>',
        inputOptions: {
            spotify: 'Spotify',
            deezer: 'Deezer',
            sound: 'SoundCloud',
            youtube: 'YouTube'
        },
        inputPlaceholder: 'Selecciona una',
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value === 'spotify') {
                window.location="/playlist_exclusivas/spotifyexclusivas.html";
            }if (value === 'deezer') {
                window.location="/playlist_exclusivas/deezerexclusivas.html";
            }if (value === 'sound') {
                window.location="/playlist_exclusivas/souncloud.html";
            }if (value === 'youtube') {
              window.location="/playlist_exclusivas/youtube.html";
            }else {
              resolve('Tienes que seleccionar una')
            }
          })
        }
      })
      
      if (fruit) {
        Swal.fire(`You selected: ${fruit}`)
      }
});


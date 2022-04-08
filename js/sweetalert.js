$("#btn0").click(function(){
	Swal.fire({
		html: '<strong><h3>Arirub Music es un creador de Playlist desde el 2015. <br> Actualmente cuenta con 833 Playlist  <br> Spotify: 255 Playlist <br> SoundCloud: 196 Playlist <br> Deezer: 189 Playlist <br> YouTube: 153 Playlist <br> Claro Música: 40 Playlist</h3>',
		position: "top",
		timerProgressBar: false,
		allowOutsideClick: true,
		allowEscapeKey: true,
		allowEnterKey: true,
		showConfirmButton: true,
		showClass: {
		  popup: 'animate__animated animate__fadeInDown'
		},
		hideClass: {
		  popup: 'animate__animated animate__fadeOutUp'
		}
	  })


	  

	  $("#btn1").click(function(){
		Swal.fire({
			imageUrl:'https://arirub-music.github.io/img/409-4092568_proximamente-proximamente-png.png',
			position: "center",
			timer: 3000,
			timerProgressBar: true,
			allowOutsideClick: true,
			allowEscapeKey: true,
			allowEnterKey: true,
			showConfirmButton: false,
			background: 'rgba(246,246,246)',
			showClass: {
			  popup: 'animate__animated animate__fadeInDown'
			},
			hideClass: {
			  popup: 'animate__animated animate__fadeOutUp'
			}
		  })
	})
})


Swal.fire({
	html:'<h3>Si quieres colabora en la playlist "Musica Random" envíame un DM en Twitter: <a href="https://twitter.com/ArirubMusic" target="_blank">@ArirubMusic</a></h3>',
	footer: '<a href="https://open.spotify.com/playlist/2JS8QpIeCriX0IavGhnH0E?si=3e175a783fc04ca9" target="_blank"> Musica Random ir</a>',
	position: "top",
	imageUrl: 'https://arirub-music.github.io/img/Musica%20Random.jpg',
	imageWidth: 200,
	imageHeight: 200,
	confirmButtonText: 'Despues',
	timerProgressBar: false,
	allowOutsideClick: false,
	allowEscapeKey: false,
	allowEnterKey: false,
	showConfirmButton: true,
	background: 'rgba(246,246,246)',
	showClass: {
	  popup: 'animate__animated animate__fadeInDown'
	},
	hideClass: {
	  popup: 'animate__animated animate__fadeOutUp'
	}
  })
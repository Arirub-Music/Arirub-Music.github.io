$("#btn0").click(function(){
	Swal.fire({
		html: '<strong><h3>Arirub Music es un creador de Playlist desde el 2015. <br> Actualmente cuenta con 762 Playlist  <br> Spotify: 249 Playlist <br> SoundCloud: 194 Playlist <br> Deezer: 188 Playlist <br> YouTube: 131 Playlist</h3>',
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
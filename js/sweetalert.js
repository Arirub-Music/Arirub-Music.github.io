$("#btn0").click(function(){
	Swal.fire({
		html: '<strong><h3>Arirub Music es un creador de Playlist desde el 2015. <br> Actualmente cuenta con 1.2K Playlist  <br> Spotify: 216 Playlist <br> SoundCloud: 183 Playlist <br> Deezer: 174 Playlist <br> YouTube: 78 Playlist</h3>',
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
			imageUrl:'https://arirubmusic.github.io/img/409-4092568_proximamente-proximamente-png.png',
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
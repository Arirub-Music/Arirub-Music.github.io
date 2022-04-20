$("#btn0").click(function(){
	Swal.fire({
		html: '<strong><h3>Arirub Music es un creador de Playlist desde el 2015. <br> Actualmente cuenta con 865 Playlist  <br> Spotify: 259 Playlist <br> SoundCloud: 199 Playlist <br> Deezer: 190 Playlist <br> YouTube: 172 Playlist <br> Claro Música: 45 Playlist</h3>',
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
})
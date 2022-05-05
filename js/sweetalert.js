$("#btn0").click(function(){
	Swal.fire({
		html: '<strong><h3>Arirub Music es un creador de Playlist desde el 2015.<br> Se encuentra en seis Plataformas Musicales. <br> Actualmente cuenta con 989 Playlist  <br><span class="icon-spotify"></span> Spotify: 263 Playlist <br> <span class="icon-soundcloud"></span> SoundCloud: 209 Playlist <br> <span class="icon-deezer"></span> Deezer: 202 Playlist <br> <span class="icon-youtube"></span> YouTube: 172 Playlist <br> <span class="icon-unnamed"></span> Claro Música: 52 Playlist <br> <span class="icon-yandex-music-seeklogocom"><span class="path1"></span><span class="path2"></span></span></span> Yandex Music: 92 Playlist</h3>',
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
if (localStorage.getItem('intro-mode') === 'false') {
    Swal.fire({
        html: '<video id="introAMU" width="100%" autoplay="autoplay" muted controlslist="nodownload" preload="auto"><source src="img/IntroArirubMusicOficial.mp4" type="video/mp4">Your browser does not support the video tag</video>',
        showConfirmButton: false,
        customClass: 'intro-width',
        timer: 6000,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        backdrop: `#000000`,
        showClass: {
            popup: 'animate__animated animate__zoomInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__zoomOutUp'
        }
    })
    localStorage.setItem('intro-mode', 'true');
}

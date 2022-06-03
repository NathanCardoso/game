const movie = () => {
    btnMovie = $('#movie .btn.btn-confirm')

    btnMovie.on('click', function() {
        switchScreen($('#movie'), $('#request'))
    })
}
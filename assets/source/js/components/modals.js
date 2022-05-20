const modals = () => {    

  const $closeModal = $('.close-modal')  
  const $modal = $('.modal')

  $closeModal.on('click', function()  {
    $modal.fadeOut()
  })

  return {
    open: function (opener, modal) {
      opener.on('click', function(e){
        e.preventDefault();
        modal.fadeIn()
        modal.addClass('open')
        $('html, body').css('overflow', 'hidden')
      })
    },
    close: function (modal) {
      modal.fadeOut()
      modal.removeClass('open')
      $('html, body').css('overflow', 'visible')
    },
  }
}
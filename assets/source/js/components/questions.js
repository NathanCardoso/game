const questions = () => {
  
  const button = $('#form-quiz .footer-questions')    

  $(document).on('change','#form-quiz .questions-list input', function(){    

    const buttonOffsetTop = button.offset().top    
    const $li = $(this).closest('li')

    AUDIO_LOAD.select.play()

    if(!$li.hasClass('selected')) {
      
      $li.addClass('selected')
      $li.siblings('.selected').removeClass('selected')
    }
    
    button.addClass('show')
    scrollingTo(buttonOffsetTop)
  })
}
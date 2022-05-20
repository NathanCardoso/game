const switchScreen = (currentScreen, nextScreen) => {    

  currentScreen.fadeOut(
    function () {
      currentScreen.removeClass('visible')
      currentScreen.find('.content-steps .step').addClass('hide').hide()
      currentScreen.find('.content-steps .step').filter(':first-child').removeClass('hide').show()
      nextScreen.fadeIn(function(){
        nextScreen.addClass('visible')
      })
    }
  )

  // quem sabe adicionar um boolean para trocar o background (cores)
}
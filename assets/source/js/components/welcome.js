const welcome = () => {  
  const screenWelcome = $('#welcome')  
  const screenStart = screenWelcome.next()

  AUDIO_LOAD.welcome.play()
  screenWelcome.addClass('start-animation')
  
  setTimeout(()=> {
    screenWelcome.fadeOut(function(){
      screenStart.fadeIn()
    })
  }, 3900)
    
}
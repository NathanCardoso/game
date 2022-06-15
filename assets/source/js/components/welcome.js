const welcome = () => {  
  const screenWelcome = $('#welcome')  
  const screenStart = screenWelcome.next()

  AUDIO_LOAD.startGame.play()

  // AUDIO_LOAD -> obj principal 
  // welcome -> é o nome da chave da musica 
  // play() -> ação em relação ao som - play ou stop


  screenWelcome.addClass('start-animation')
  
  setTimeout(()=> {
    screenWelcome.fadeOut(function(){
      screenStart.fadeIn()
    })
  }, 3900)
    
}
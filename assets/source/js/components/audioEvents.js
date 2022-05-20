const audioEvents = () => { 

  const btnConfirm = $('.btn-confirm')
  const $links = $('a[href="#"]')
  const closeModals = $('.close-modal')
  const btnNextStep = $('.btn-next-step')
  const btnNextQuestion = $('.btn-answer-next')
  const btnAnswerConfirm = $('.btn-next-question')
  const btnControler = $('.audio-control')
  let state = 'MAX'  


  function allSounds (arg){
    
    Object.keys(AUDIO_LOAD).forEach(key => {
      switch (arg) {
        case "MAX":           
          AUDIO_LOAD[key].mute(false)
          AUDIO_LOAD[key].volume(0.2)
          break;
        case "MIN":           
          AUDIO_LOAD[key].mute(false)
          AUDIO_LOAD[key].volume(0.1)
          break;
        default:           
          AUDIO_LOAD[key].mute(true)
          break;
      }      
    })
  }

  btnControler.on('click', function(e){
    e.preventDefault()
    
    if(state === 'MAX') {      
      state = 'MIN'
      $(this)
        .removeClass('max-volume')
        .addClass('min-volume')
    }
    else if (state === 'MIN') {
      state = 'MUTED'      
      $(this)
        .removeClass('min-volume')
        .addClass('muted-volume')
    }
    else {
      state = 'MAX'      
      $(this)
        .removeClass('muted-volume')
        .addClass('max-volume')
    }
    allSounds(state)
  })

  $links.on('click', function() {    
    AUDIO_LOAD.clickDigital.play()
  })

  btnConfirm.on('click submit', function() {
    AUDIO_LOAD.confirm.play()
  })

  btnNextStep.on('click', function(){
    AUDIO_LOAD.confirm.play()
  })

  btnAnswerConfirm.on('click', function(){
    AUDIO_LOAD.select.play()
  })

  btnNextQuestion.on('click', function(){
    AUDIO_LOAD.confirm.play()
  })
  
  closeModals.on('click', function(){
    AUDIO_LOAD.close.play()
  })

}
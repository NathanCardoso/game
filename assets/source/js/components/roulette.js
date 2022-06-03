const roulette = () => {

  const currentScreen = $('#roulette')
  const btnGoRoulette = $('#roulette .modal-content-footer .next-step') 
  const finishRoulette = $('#roulette .modal-content-footer .go-to-end')
  const modalYourChanceToWinPoinst = $('#roulette .modal.modal-your-chance')

  modalYourChanceToWinPoinst.fadeIn()
  AUDIO_LOAD.goToRoulette.play()
  AUDIO_LOAD.startGame.stop()

  finishRoulette.on('click', function() {
    // ajax({
    //   action: 'updateExtraPoints',
    //   method: 'post',
    //   data: {
    //     extraPoints: myPoints
    //   },
    //   headers: {
    //     Authorization: `Bearer ${storage("GET", "corteva-token")}}`
    //   },
    //   callback: function(data) {        
    //     if(data.sucesso) {
    //       end()
    //       switchScreen(currentScreen, currentScreen.next())
    //     }
    //   }
    // })

    switchScreen(currentScreen, $('#movie'))
    console.log('lalala')
  })


  btnGoRoulette.on('click', function(){
    $(this).closest('div.modal').fadeOut(
      function() {
        AUDIO_LOAD.rouletteGame.play()
      }
    )
  })
}
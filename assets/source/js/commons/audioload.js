const audioLoad = () => {

  function load (name, opts) {

    const { loop, volume } = { loop: false, volume: 0.15, ...(opts || {})}
    return new Howl({
      src: `../static/sounds/${name}`,
      autoplay: false,
      loop,
      volume
    })
  }

  return {
    //intro
    welcome: load('wait-music.mp3', {loop: true}),
    // Vai para quiz 
    startGame: load('start-game.mp3', {loop: true}),
    // Click nas perguntas
    select: load('select.mp3'),
    // Feedback perguntas - acertou
    feedbackCorrect: load('feedback-correct.mp3'),
    // Feedback junto com o som de acerto
    feedbackYes: load('yes.mp3'),
    // Feedback perguntas - errou
    feedbackWrong: load('feedback-wrong.mp3'),
    // Vai para Roleta
    goToRoulette: load('got-to-roulette.mp3'),
    // musica da tela de roleta
    rouletteGame: load('roulette-game.mp3', {loop: true}),
    // Giro da Roleta
    rotateRoulette: load('rotate-roulette.mp3'),
    // Feedbacks da roleta - ganhou ponto
    winnerPoint: load('winner-point.mp3'), // ou os aplausos
    // Feedbacks da roleta - não ganhou ponto
    loserPoint: load('male-cry.mp3'),
    // Tela de Agradecimento 
    end: load('end.mp3', {loop: true}),
    // alguns clicks
    clickDigital: load('click-on-other-things.mp3'),
    // confirm 
    confirm: load('confirmar.mp3'),
    // fachar os modais - quando tem botão de fechar
    close: load('close-modal.mp3')
  }
}

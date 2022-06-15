const quiz = () => {
  const roulette = $('#roulette')
  const btnInit = $('#quiz .start-quiz .buttons .btn-confirm')
  const currentStep = $('#quiz .content-steps')
  const formQuiz = $('#form-quiz')
  const modalFeedbackRight = $('.modal.modal-answer-correct')
  const modalFeedbackWrong = $('.modal.modal-answer-wrong')
  const btnNextAnswer = $('.modal-answer .buttons .btn-answer-next')
  const btnWrongAnswer = $('.modal-answer-wrong .button .btn-answer-next answer-wrong')


  let questionJson = {}
  let count = 0;


  // AUDIO_LOAD.startGame.stop()
  // AUDIO_LOAD.startGame.play()

  btnInit.on('click', function () {
    $(this).addClass('btn-loading')

    setTimeout(() => {
      switchStep(currentStep, currentStep.find('.step-2'))
      getQuestions()
      AUDIO_LOAD.welcome.stop()
    }, 1500)
  })


  async function getQuestions() {
    const questionResponse = await fetch('./question.json')
    questionJson = await questionResponse.json()
    populateQuestion(count)
  }


  function populateQuestion(index) {
    // definir o numero da questao
    // definir o cabeçalho da questao -> h3    
    const question = $('.question-statement .question')
    const headerQuestion = $('.iterate-questions-counter .number-of-question')
    const progressiveBarQuestion = $('.iterate-questions-counter .progressive-bar .overflow-bar')

    question.text(questionJson[index].description)
    headerQuestion.text(index + 1)
    progressiveBarQuestion.width((((index + 1) / questionJson.length) * 100) + "%")
  }

  function responseAnswer(res, index) {
    if (res === questionJson[index].answer) {
      return true;
    } else {
      return false;
    }
  }

  formQuiz.on('submit', function (e) {
    e.preventDefault()
    const responseAlternateRadio = $('#quiz .body-questions .questions-list input[name=response]:checked').val()
    console.log('question: ', count);

    if (!responseAnswer(responseAlternateRadio, count)) {
      console.log('error');
      $(modalFeedbackWrong).fadeIn()
      AUDIO_LOAD.feedbackWrong.play()
    } else {
      console.log('certo');
      $(modalFeedbackRight).fadeIn()
      AUDIO_LOAD.feedbackYes.play()
      count++;
    }

    setTimeout(() => {
      loadingGame.removeClass('show')
    }, 1500)
  })

  $(btnNextAnswer).on('click', function (e) {
    e.preventDefault()

    $(this).addClass('btn-loading')
    $(this).prop('disable', true)

    setTimeout(() => {
      $(this).closest('div.modal').fadeOut(
        function () {

          btnNextAnswer.removeClass('btn-loading')
          btnNextAnswer.prop('disable', false)

          if (count >= questionJson.length) {
            switchScreen($('#quiz'), $('#roulette'))
            roulette.fadeIn()
          } else {
            populateQuestion(count)
          }
        }
      )
    }, 1500)
  })



  $(btnWrongAnswer).on('click', function (e) {
    e.preventDefault()

    $(this).addClass('btn-loading')
    $(this).prop('disable', true)

    $(modalFeedbackWrong).fadeOut()

  })
}
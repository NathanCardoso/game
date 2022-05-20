const quiz = () => {
  
  // tela de Inicio do quiz   
  const fadeInTime = $('.timer')
  const btnInit = $('#quiz .start-quiz .buttons .btn-confirm')
  const btnSubmit = $('#quiz .footer-questions')
  const question = $('.question-statement .question')
  const idQuestion = $('#form-quiz input#id-question')
  const timeQuestion = $('#form-quiz input#time-question')
  const currentStep = $('#quiz .content-steps')
  const $alternatives = $('#quiz .body-questions .questions-list')
  const headerQuestion = $('.iterate-questions-counter .number-of-question')
  const progressiveBarQuestion = $('.iterate-questions-counter .progressive-bar .overflow-bar')
  const formQuiz = $('#form-quiz')
  const modalFeedbackRight = $('.modal.modal-answer-correct')
  const modalFeedbackWrong = $('.modal.modal-answer-wrong')
  const btnNextAnswer = $('.modal-answer .buttons .btn-answer-next')
  
  
  let timeInterval
  let selfData = {}

  AUDIO_LOAD.welcome.stop()
  AUDIO_LOAD.startGame.play()

  btnInit.on('click', function() {
    $(this).addClass('btn-loading')
    
    ajax({
      action: 'questionsAnswer',
      method: 'get',
      headers: {
        Authorization: `Bearer ${storage("GET", "corteva-token")}}`
      },
      callback: function(data) {
        if(data.sucesso) { 
          selfData.questions = data.data
          selfData.index = 0
          quizDynamic (selfData)
          switchStep(currentStep, currentStep.find('.step-2'))
        }
      }
    })
  })

  formQuiz.on('submit', function(e){
    e.preventDefault()

    const questioId = idQuestion.val()
    const responseAnswer = $(this).find('input[type="radio"]:checked').val()
    const timeResponse = timeQuestion.val()   
    
    timeInterval.clearTime()
    btnSubmit.find('.btn-next-question').prop('disabled', true)
    loadingGame.addClass('show')

    ajax({
      action: 'saveAnswer',
      method: 'post',
      data: {
        question_id: questioId,
        questionsanswer_id: responseAnswer,
        questionsTime: timeResponse
      },
      headers: {
        Authorization: `Bearer ${storage("GET", "corteva-token")}}`
      },
      callback: function(data) {
        if(data.sucesso) {
          if(data.acertou) {  

            $(modalFeedbackRight).fadeIn(
              function() {
                loadingGame.removeClass('show')
                AUDIO_LOAD.feedbackYes.play()
                AUDIO_LOAD.feedbackCorrect.play()
                
                scrollingTo(window.screenTop)
              }
            )

          } else {
            $(modalFeedbackWrong).fadeIn(
              function () {
                AUDIO_LOAD.feedbackWrong.play()
                loadingGame.removeClass('show')

                scrollingTo(window.screenTop)
                
              }
            )
          }
        }
      }
    })
  })

  btnNextAnswer.on('click', function(e){
    e.preventDefault()

    $(this).addClass('btn-loading')
    $(this).prop('disable', true)
    $(this).closest('div.modal').fadeOut(
      function() {

        btnNextAnswer.removeClass('btn-loading')
        btnNextAnswer.prop('disable', false)

        selfData.index += 1
        quizDynamic (selfData)

      }
    )
  })

  function quizDynamic (args) {
    if(args.questions[args.index]) {      
      const answers = args.questions[args.index].answers      
      const questionPoints = args.questions[args.index].questionsPoints
      // limpando os campos
      btnSubmit.removeClass('show')
      btnSubmit.find('.btn-next-question').prop('disabled', false)

      idQuestion.val(args.questions[args.index].id)
      timeQuestion.val("")
      question.text(args.questions[args.index].question)

      // exibindo os pontos no modal quando acertado
      modalFeedbackRight.find('.response .you-won .points').text(questionPoints+" pontos")


      const count = (args.index+1)
      headerQuestion.text(count > 9? count: "0"+count)
      progressiveBarQuestion.width(((count/args.questions.length) * 100)+"%")
      
      $alternatives.empty()
  
      answers.forEach((answer, index) => {
        const $option = `
          <li class="option">
            <div class="option-wrap">
              <span class="alternative">${alternative(index)}</span>
              <input type="radio" name="response" id="opt${answer.id}" value="${answer.id}" class="sr-only">
              <label for="opt${answer.id}" class="label-question">${answer.answer}</label>
            </div>
          </li>
        `      
        $alternatives.append($option)
      });
  
      
      fadeInTime.fadeIn(function () {
        timeInterval = timer()
      })

      $('.clocktime').removeClass('reset')

    } else {      
      roulette()
      switchScreen($('#quiz'), $('#quiz').next())
    }

  }

  function alternative (index_question) {
    switch (index_question) {
      case 0: return "A"        
      case 1: return "B"        
      case 2: return "C"        
      case 3: return "D"
    }
  }   
}
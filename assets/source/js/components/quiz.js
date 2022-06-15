const quiz = () => {
  const roulette = $('#roulette')
  const fadeInTime = $('.timer')
  const btnInit = $('#quiz .start-quiz .buttons .btn-confirm')
  const currentStep = $('#quiz .content-steps')
  const formQuiz = $('#form-quiz')
  const btnSubmit = $('#quiz .footer-questions')
  const alternatives = $('#quiz .body-questions .questions-list')
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

    console.log("entrei aqui ")
    
    // populateQuestion(questionJson)
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
    progressiveBarQuestion.width((((index + 1)/questionJson.length) * 100)+"%")


    // console.log(args.length)
    // question.text(args[index].description)
    // console.log(question.get(index))
    
    console.log(question.get(index))
    // const count = args[index+1]
    // headerQuestion.text(count > 9? count: "0"+count)
  }


  //   const idQuestion = $('#form-quiz input#id-question')
  //   const timeQuestion = $('#form-quiz input#time-question')
  //   const $alternatives = $('#quiz .body-questions .questions-list')
  //   const btnNextAnswer = $('.modal-answer .buttons .btn-answer-next')

  //   let timeInterval
  //   let selfData = {}

  //   async function getQuestions() {
  //     const questionResponse = await fetch('./question.json')
  //     const questionJson = await questionResponse.json()

  //     question.text(questionJson[0].description)
  //     console.log("entrei aqui ")

  //     proxQuestion(questionJson)
  //   }



  // function proxQuestion(json) {
  //   var prox = 0
  //   console.log("prox value:", prox)

  //   if(prox <= json.length) {
  //     alternatives.on('click', function(e) {
  //       if (($(this).val() === json[prox].answer)) {
  //         // $(modalFeedbackRight).fadeIn()
  //         prox++
  //         question.text(json[prox].description)
  //         console.log("Acertou")
  //       } else {
  //         // $(modalFeedbackWrong).fadeIn()
  //         console.log("Errou")
  //       }
  //     })
  //   } else {
  //     console.log('lalala')
  //   }
  // } 

  // function alternatives(jsonObj) {
    
  // }



  function responseAnswer (res,index) {
    if(res === questionJson[index].answer) {
      return true;
    } else {
      return false;
    }
  }

  formQuiz.on('submit', function (e) {
    e.preventDefault()
    const responseAlternateRadio = $('#quiz .body-questions .questions-list input[name=response]:checked').val()
    console.log('question: ' , count);

    if(!responseAnswer(responseAlternateRadio,count)){
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

    $(btnNextAnswer).on('click', function(e){
      e.preventDefault()

      $(this).addClass('btn-loading')
      $(this).prop('disable', true)

      setTimeout(() => {
        // quiz.fadeOut()
        // roulette.fadeIn()
        $(this).closest('div.modal').fadeOut(
          function() {

            btnNextAnswer.removeClass('btn-loading')
            btnNextAnswer.prop('disable', false)
            
            // selfData.index += 1
            // quizDynamic (selfData)
            if(count >= questionJson.length){
              // quiz.fadeOut()
              switchScreen($('#quiz'), $('#roulette'))
              roulette.fadeIn()
            }else{
              populateQuestion(count)
            }
          }
          )
        }, 1500)
    })



    $(btnWrongAnswer).on('click', function(e){
      e.preventDefault()

      $(this).addClass('btn-loading')
      $(this).prop('disable', true)

      $(modalFeedbackWrong).fadeOut()

    })

  //   function quizDynamic (args) {
  //     if(args.questions[args.index]) {      
  //       const answers = args.questions[args.index].answers      
  //       const questionPoints = args.questions[args.index].questionsPoints
  //       // limpando os campos
  //       // btnSubmit.removeClass('show')
  //       // btnSubmit.find('.btn-next-question').prop('disabled', false)

  //       idQuestion.val(args.questions[args.index].id)
  //       timeQuestion.val("")
  //       question.text(args.questions[args.index].question)

  //       // exibindo os pontos no modal quando acertado
  //       modalFeedbackRight.find('.response .you-won .points').text(questionPoints+" pontos")


  //       const count = (args.index+1)
  //       headerQuestion.text(count > 9? count: "0"+count)
  //       progressiveBarQuestion.width(((count/args.questions.length) * 100)+"%")

  //       $alternatives.empty()

  //       answers.forEach((answer, index) => {
  //         const $option = `
  //           <li class="option">
  //             <div class="option-wrap">
  //               <span class="alternative">${alternative(index)}</span>
  //               <input type="radio" name="response" id="opt${answer.id}" value="${answer.id}" class="sr-only">
  //               <label for="opt${answer.id}" class="label-question">${answer.answer}</label>
  //             </div>
  //           </li>
  //         `      
  //         $alternatives.append($option)
  //       });


  //       fadeInTime.fadeIn(function () {
  //         timeInterval = timer()
  //       })

  //       $('.clocktime').removeClass('reset')

  //     } else {      
  //       roulette()
  //       switchScreen($('#quiz'), $('#quiz').next())
  //     }

  //   }
}
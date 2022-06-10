const start = () => {
  
  // Tela de login 
  const $formStart = $('#form-login')
  const $inputUser = $('#form-login input#name')  
  const $inputRulesCheck = $('#form-regulation input:checkbox')
  const $userIdentity = $('#form-key-access .get-info-email span.info-email')
  const currentStep = $('#start .content-steps')
  const btnReturn = $('#form-key-access .footer-card .btn-cancel')
  const $formKeyAccess = $('#form-key-access')
  const $inputPass = $('#form-key-access .input-group input#access-code')
  const $formIdentity = $('#form-rename-user')
  const $formRegulation = $('#form-regulation')
  const $inptRenameUser = $('#form-rename-user .input-group input#nome')
  const btnSubmit = $('#form-login .buttons .btn-confirm')
  let errorFeedbackMessageAccess
  let _checkbox = false

  AUDIO_LOAD.welcome.play()


  //step 1
  $formStart.on('submit', function(e) {
    e.preventDefault()
    
    const userName = $inputUser.val()
    switch(userName) {
      case 'Gabrielly':
        btnSubmit.addClass('btn-loading')
        setTimeout(()=> {
          switchStep(currentStep, currentStep.find('.step-2'))
        }, 1500)
        break
      case 'gabrielly':
        btnSubmit.addClass('btn-loading')
        setTimeout(()=> {
          switchStep(currentStep, currentStep.find('.step-2'))
        }, 1500)
        break
      case 'Gabrielly dos Santos Sales':
        btnSubmit.addClass('btn-loading')
        setTimeout(()=> {
          switchStep(currentStep, currentStep.find('.step-2'))
        }, 1500)
        break
      case 'gabrielly dos santos sales':
        btnSubmit.addClass('btn-loading')
        setTimeout(()=> {
          switchStep(currentStep, currentStep.find('.step-2'))
        }, 1500)
        break
      case 'Gaby':
        btnSubmit.addClass('btn-loading')
        setTimeout(()=> {
          switchStep(currentStep, currentStep.find('.step-2'))
        }, 1500)
        break
      case 'gaby':
        btnSubmit.addClass('btn-loading')
        setTimeout(()=> {
          switchStep(currentStep, currentStep.find('.step-2'))
        }, 1500)
        break
      case 'Gabyzinha':
        btnSubmit.addClass('btn-loading')
        setTimeout(()=> {
          switchStep(currentStep, currentStep.find('.step-2'))
        }, 1500)
        break
      case 'Gabyzinha':
        btnSubmit.addClass('btn-loading')
        setTimeout(()=> {
          switchStep(currentStep, currentStep.find('.step-2'))
        }, 1500)
        break
      case 'BigLove':
        btnSubmit.addClass('btn-loading')
        setTimeout(()=> {
          switchStep(currentStep, currentStep.find('.step-2'))
        }, 1500)
        break
      case 'biglove':
        btnSubmit.addClass('btn-loading')
        setTimeout(()=> {
          switchStep(currentStep, currentStep.find('.step-2'))
        }, 1500)
        break
      case 'Poderosa':
        btnSubmit.addClass('btn-loading')
        setTimeout(()=> {
          switchStep(currentStep, currentStep.find('.step-2'))
        }, 1500)
        break
      case 'poderosa':
        btnSubmit.addClass('btn-loading')
        setTimeout(()=> {
          switchStep(currentStep, currentStep.find('.step-2'))
        }, 1500)
        break
      default:
        errorFeedbackMessageAccess = $(this).find('.error-info')
        errorFeedbackMessageAccess.text('Tente novamente: "BigLove"').css("display", "block").css("text-align", "center")
    }
  })  

  // step 2
  // Tela Chave de Acesso 
  $formKeyAccess.on('submit', function(e) {
    e.preventDefault()
    
    const passwd = +$inputPass.val()
    if(passwd === 310) {
      const btnSubmit = $('#form-key-access .buttons .btn-confirm')
      btnSubmit.prop('disabled', false)
      btnSubmit.addClass('btn-loading')
      setTimeout(() => {
        switchStep(currentStep, currentStep.find('.step-3'))
        checked()
      }, 1500)
    } else {
      errorFeedbackMessageAccess = currentStep.find('.step-2 .error-info')
      errorFeedbackMessageAccess.text('Todo mundo aí viu').css("display", "block")
    }  
  })   

  //step 3
  //Tela de Regulamento
  
  function checked () {
    const btnSubmit = $('#form-regulation .buttons button.disabled')
    $inputRulesCheck.on('change', function(){
      
      btnSubmit.prop('disabled', false) 
      btnSubmit.addClass('btn-confirm').removeClass('disabled')
      _checkbox = true
    })
  }
  $formRegulation.on('submit', function(e) {
    e.preventDefault()
    
    if($(this).valid() && _checkbox) {
      const btnSubmit = $('#form-regulation .buttons button.btn-confirm')
      btnSubmit.addClass('btn-loading')

      setTimeout(() => {
        switchScreen($('#start'), $('#quiz'))
      }, 2500)
    }
  })

  // Botão VOLTAR
  btnReturn.on('click', function(){    
    switchStep(currentStep, currentStep.find('.step-1'))
  })
}
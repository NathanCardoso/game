const start = () => {
  
  // Tela de login 
  const $formStart = $('#form-login')
  const $inputUser = $('#form-login input#email')  
  const $inputRulesCheck = $('#form-login input:checkbox')
  const $userIdentity = $('#form-key-access .get-info-email span.info-email')
  const currentStep = $('#start .content-steps')
  const btnReturn = $('#form-key-access .footer-card .btn-cancel')
  const $formKeyAccess = $('#form-key-access')
  const $inputPass = $('#form-key-access .input-group input#access-code')
  const $formIdentity = $('#form-rename-user')
  const $formRegulation = $('#form-regulation')
  const $inptRenameUser = $('#form-rename-user .input-group input#nome')
  let errorFeedbackMessageAccess
  
  //step 1 
  $formStart.on('submit', function(e) {
    e.preventDefault()

    errorFeedbackMessageAccess = $(this).find('.error-info')
    errorFeedbackMessageAccess.text('')

    const userEmail = $inputUser.val()
    const rulesCheck = $inputRulesCheck.is(':checked')

    $inputPass.val('')


    if($(this).valid()){
      const btnSubmit = $('#form-login .buttons .btn-confirm')
      btnSubmit.prop('disabled', true)
      btnSubmit.addClass('btn-loading')
      
      $userIdentity.text(userEmail)

      errorFeedbackMessageAccess = currentStep.find('.step-2 .error-info')
      errorFeedbackMessageAccess.text('')

      switchStep(currentStep, currentStep.find('.step-2'))
    }    
  })  

  // step 2
  // Tela Chave de Acesso 
  $formKeyAccess.on('submit', function(e) {
    e.preventDefault()

    errorFeedbackMessageAccess = $(this).find('.error-info')

    const passwd = $inputPass.val()

    if($(this).valid()) {

      const btnSubmit = $('#form-key-access .buttons .btn-confirm')
      btnSubmit.prop('disabled', true)
      btnSubmit.addClass('btn-loading')


      errorFeedbackMessageAccess = currentStep.find('.step-2 .error-info')
      errorFeedbackMessageAccess.text('')

      switchStep(currentStep, currentStep.find('.step-3'))
    }    
  })   

  //step 3
  //Tela de Regulamento
  $formRegulation.on('submit', function(e) {
    e.preventDefault()

    if($(this).valid()) {
      const btnSubmit = $('#form-regulation .buttons .btn-confirm')
      btnSubmit.prop('disabled', true)
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
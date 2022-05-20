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
  const $inputRenameUser = $('#form-rename-user .input-group input#nome')
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
      
      ajax({
        action: 'register',
        method: 'post',
        data: {
          email: userEmail,
          regulamento: rulesCheck
        },
        callback: function (data) {
          if(data.sucesso) {
            $userIdentity.text(userEmail)

            // limpando a mensagem de erro caso tenha
            errorFeedbackMessageAccess = currentStep.find('.step-2 .error-info')
            errorFeedbackMessageAccess.text('')

            switchStep(currentStep, currentStep.find('.step-2'))
          } 
          else {
            errorFeedbackMessageAccess.fadeIn(
              function() {
                errorFeedbackMessageAccess.text(`*${data.data}`)
              }
            )
          }
          btnSubmit.prop('disabled', false)
          btnSubmit.removeClass('btn-loading')
        }
      })
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

      ajax({ 
        action: 'login',
        method: 'post',
        data: {
          email: $userIdentity.text(),
          password: passwd
        },
        callback: function (data) {
          if(data.sucesso) {            
            storage("SET", "corteva-token", data.access_token)


            if(data.change_name) {
              switchStep(currentStep, currentStep.find('.step-3'))
            } else {
              
              if(data.all_response){
                if(data.check_roullete) {                  
                  end()
                  switchScreen($('#start'), $('#end'))
                }
                
                else {                  
                  roulette()
                  switchScreen($('#start'), $('#roulette'))
                }
              }
              else {
                quiz()
                switchScreen($('#start'), $('#quiz'))
              }
            }
          } else {
            $inputPass.val('')
            errorFeedbackMessageAccess.fadeIn(
              function() {
                errorFeedbackMessageAccess.text(`*${data.data}`)
              }
            )
          }

          btnSubmit.prop('disabled', false)
          btnSubmit.removeClass('btn-loading')
        }
      })
    }    
  })   
  // step 3
  // Tela de Identificação/Apelido
  $formIdentity.on('submit', function(e) {
    e.preventDefault()

    const userNewName = $inputRenameUser.val()

    if($(this).valid()) {
      
      const btnSubmit = $('#form-rename-user .buttons .btn-confirm')
      btnSubmit.prop('disabled', true)
      btnSubmit.addClass('btn-loading')

      ajax({
        action: 'updateName',
        method: 'post',
        data: {
          name: userNewName
        },
        headers: {
          Authorization: `Bearer ${storage("GET", "corteva-token")}}`
        },
        callback: function(data) {
          if(data.sucesso){
            quiz()
            switchScreen($('#start'), $('#start').next())
          }           
          btnSubmit.prop('disabled', false)
          btnSubmit.removeClass('btn-loading')
        }
      })
    }
  })

  // Botão VOLTAR
  btnReturn.on('click', function(){    
    switchStep(currentStep, currentStep.find('.step-1'))
  })
}
const formContactUs = () => {

  const formContactUs = $('#form-contact-us')
  // const modalMessageSend = $('')
  const inputEmail = $('#form-contact-us .input-group input#email')
  const inputMessage = $('#form-contact-us .box-message textarea#message')  
  const modalSendMessage = $('.modal.modal-send-message-success')
  const bodyMessage = modalSendMessage.find('.body-message p:first-child')

  formContactUs.on('submit', function(e){
    e.preventDefault()
    
    const reportEmail = inputEmail.val()
    const reportMessage = inputMessage.val()
    
    if($(this).valid()) {
      const btnReportUs = $('#form-contact-us .buttons .btn-confirm')
      btnReportUs.addClass('btn-loading')
      btnReportUs.prop('disabled', true)

      ajax({
        action: 'saveReport',
        method: 'post',
        data: {
          email: reportEmail,
          text: reportMessage,
          user_id: 1
        },       
        callback: function(data) {
          if(data.sucesso) {
            $(this).fadeOut (
              function() {
                bodyMessage.text(data.data)
                modalSendMessage.fadeIn()
              }
            )
          }
        }
      })
    }
  })
}
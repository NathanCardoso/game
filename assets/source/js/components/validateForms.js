const validationForms = () => {
  
  $('#form-login').validate({
    rules : {

      email: {
        required: true,
        email: true
      },      
      check: {
        required: true
      }
    }
  })
  $('#form-key-access').validate({
    rules: {
      password: {
        required: true
      }
    }
  })
  $('#form-rename-user').validate({
    rules: {
      nome: {
        required: true
      }
    }
  })
  $('#form-contact-us').validate({
    rules : {

      email: {
        required: true,
        email: true
      },    
      mensagem: {
        required: true
      }
    }
  })

  $.extend($.validator.messages, {
    required: "*Campo obrigatório.",    
    email: "Por favor, informe um email válido.",    
    minlength: "Este campo precisa de no mínimo 10 caracteres.",
  })
}
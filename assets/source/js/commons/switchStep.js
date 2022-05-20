const switchStep = (currentStep, nextStep) => {
  const $currentStep = currentStep.find('.step').not('.hide')

  $currentStep
    .addClass('hide')
    .removeClass('visible')
    .fadeOut(
      function(){
        // proximo passo fica visivel
        nextStep
          .removeClass('hide')
          .fadeIn()
          .addClass('visible')
      }
    )
}
// const button = () => {
//   btnLogin = $('.login')
//   cardLogin = $('#start')
//   btnInit = $('.init')
//   // cardInit = $('#quiz .step.step-1')
//   btnCorrect = $('.btn-next-question')
//   btnWrong = $('.btn-not-question')
//   modalFaedbackCorrect = $('.modal-answer-correct')
//   modalFaedbackWrong = $('.modal-answer-wrong')

//   btnLogin.on('click', function() {
//     cardLogin.hide()
//   })

//   btnInit.on('click', function() {
//     const step = $(this).closest('.step.step-1')
//     step.hide(function() {
//       step.next().show()
//     })
//   })

//   btnCorrect.on('click', function(e) {
//     e.preventDefault()
//     modalFaedbackCorrect.fadeIn()
//   })

//   btnWrong.on('click', function(e) {
//     e.preventDefault()
//     modalFaedbackWrong.fadeIn()
//   })
// }
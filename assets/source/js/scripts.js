let beforeDevice;
let currentDevice;
let myPoints = 0
let AUDIO_LOAD
let loadingGame = $('.loading')

$(document).ready(() => { 
  AUDIO_LOAD = audioLoad()   
  // Commons
  screenHeight();
  backgroundImage();
  targetBlank();  
  resizeRoulette();
  rouletteCanvas();


  // Components 
  validationForms();
  formContactUs();
  audioEvents();
  questions();
  getRanking();

  // call to modals
  // const modal = modals();
  // modal.open($('.call-to-rules'), $('.modal-rules'))
  // modal.open($('.contact-us > a'), $('.modal-contact-us'))
  // init();  
  start();
  quiz()
  movie()
  roulette()

  // Helpers
  currentDevice = device();


});

$(window).on('resize', () => {
  
  // Commons
  screenHeight();
  backgroundImage();
  resizeRoulette();

  // Helpers
  currentDevice = device();
  if (beforeDevice != currentDevice) {
    beforeDevice = currentDevice;
  }
});

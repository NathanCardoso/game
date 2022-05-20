const resizeRoulette = () => {

  
  const $canvasResizer = $('#roulette div.roulette canvas')
  const $appClient = $('#app')
  

  $canvasResizer.width(Math.max(Math.min(($appClient.width() * 0.8204694444444444), 500), 270))
  $canvasResizer.height(Math.max(Math.min($canvasResizer.width(), 500), 270))

  return resizeRoulette
}
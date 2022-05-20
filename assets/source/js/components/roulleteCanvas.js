const rouletteCanvas = () => {

  const glMatrix = window.glMatrix  

  let currentTime, lastTime, deltaTime, awards
  const $app = document.querySelector('#app')

  const $roulette = document.querySelector('#roulette')
  
  const $wrap = document.querySelector('#roulette div.roulette .canvas-content')
  const $awardsWrap = document.querySelector('#roulette div.roulette .awards')
  
  const $canvas = document.querySelector('#roulette div.roulette canvas')

  const ctx = $canvas.getContext('2d', { antialias: false, depth: false })
  let itensCount = 6
  const center = glMatrix.vec2.create()
  const canvasOffset = glMatrix.vec2.create()
  const pointerDownPosition = glMatrix.vec2.create()
  const pointerMovePosition = glMatrix.vec2.create()
  calculateCenter()
  let currentItem = 0.5

  // Calculate roulette rotation speed and acceleration
  rSpeed = 0
  const minSpeedToRelease = 0.5
  let currentMoveTime = Date.now()
  let lastMoveTime = Date.now()
  let lastHandSpeed = 0
  let pressed = false
  let released = false
  let positiveSpeed = true

  // acceleration before break setup
  const minSpeedToBreak = 7
  const maxSpeedToBreak = 15
  let maxSpeed = 0
  let speedAnimationMaxSpeed = 0
  let maxSpeedTime = 0
  let maxSpeedElaped = 0

  // breaking setups
  const minTimeBreak = 5 // seconds
  const maxTimeBreak = 10 // seconds
  let timeBreak = 0 // seconds
  let breakElapse = 0
  let breakingSpeed = 0
  let breaking = false
  
  const rouleteDefaults = {
    backgroundColor: '#903412',
    sliceColors: [      
      '#0091E1',
      '#0067E3',
      '#FF5667',
      '#00D5D3',
      '#FE384C',
      '#3D3079',
    ]
  }

  function getOffset (el, v) {
    const rect = el.getBoundingClientRect()
    v[0] = rect.left + window.scrollX
    v[1] = rect.top + window.scrollY
  }

  const getRouletteValue = attr => {
    return $wrap[attr] || rouleteDefaults[attr]
  }

  const drawBackground = (ctx, width, height, color) => {
    const size = Math.min(width, height) / 2
    ctx.beginPath()
    ctx.arc(0, 0, size, 0, Math.PI * 2)
    ctx.lineWidth = 0
    ctx.fillStyle = color || '#FFA722'
    ctx.fill()
  }

  const drawItensBackgrounds = (ctx, itensCount, sliceSize, sliceColors) => {
    const sliceRadians = (2 * Math.PI) / itensCount
    for (let i = 0; i < itensCount; i++) {
      const selected = Math.floor(currentItem) === itensCount - 1 - i

      const rad = i * sliceRadians
      const startX = sliceSize * Math.cos(rad)
      const startY = sliceSize * Math.sin(rad)

      ctx.lineCap = 'round'      
      ctx.fillStyle = (selected && (rSpeed != 0 || breakElapse === 1))? '#333333' : sliceColors[i]
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(startX, startY)
      ctx.arc(0, 0, sliceSize, rad, rad + sliceRadians)
      ctx.lineTo(0, 0)
      ctx.closePath()
      ctx.fill()
    }
  }

  const updateDeltaTime = () => {
    lastTime = currentTime
    currentTime = Date.now()
    deltaTime = (currentTime - lastTime) / 1000
  }

  const handlePointerDown = evt => {    
    if (released) return false
    pointerDownPosition[0] = evt.offsetX
    pointerDownPosition[1] = evt.offsetY
    glMatrix.vec2.subtract(pointerDownPosition, pointerDownPosition, center)
    if (
      glMatrix.vec2.length([0, center[1]]) >
      glMatrix.vec2.length(pointerDownPosition)
    ) {
      rSpeed = 0
      lastHandSpeed = 0
      pressed = true
    }
  }

  function diffPosToIndex (a, b, allowNegative = false) {
    let angle = glMatrix.vec2.angle(a, b)
    const cross = glMatrix.vec2.cross(
      glMatrix.vec3.create(),
      glMatrix.vec2.normalize([], a),
      glMatrix.vec2.normalize([], b)
    )
    if (cross[2] < 0) {
      if (allowNegative) {
        angle = -angle
      } else {
        angle = 2 * Math.PI - angle
      }
    }
    return (angle / (2 * Math.PI)) * itensCount
  }

  const handlePointerMove = evt => {
    if (!pressed) return false
    rSpeed = 0
    pointerMovePosition[0] = evt.offsetX
    pointerMovePosition[1] = evt.offsetY
    glMatrix.vec2.subtract(pointerMovePosition, pointerMovePosition, center)
    if (
      glMatrix.vec2.length([0, center[1]]) <
      glMatrix.vec2.length(pointerMovePosition)
    ) {
      handlePointerUp(evt)
      return false
    }
    const diff = diffPosToIndex(pointerDownPosition, pointerMovePosition, true)
    if (isFinite(diff)) {
      lastMoveTime = currentMoveTime
      currentMoveTime = Date.now()
      const deltaMoveTime = (currentMoveTime - lastMoveTime) / 1000
      lastHandSpeed = diff / deltaMoveTime
      currentItem += diff
      currentItem %= itensCount
      if (currentItem < 0) currentItem += itensCount
    }    
  }
  const handleClick = $('#roulette .canvas .hand-move')
  const handlePointerUp = evt => {
    if (!pressed || breaking || released) return false
    if (Math.abs(lastHandSpeed) >= minSpeedToRelease) {
      positiveSpeed = lastHandSpeed > 0
      lastHandSpeed = Math.abs(lastHandSpeed)
      breakElapse = maxSpeedElaped = 0
      timeBreak = Math.random() * minTimeBreak + (maxTimeBreak - minTimeBreak)
      maxSpeedTime = timeBreak / 2
      maxSpeed = Math.random() * minSpeedToBreak + (maxSpeedToBreak - minSpeedToBreak)
      breakingSpeed = lastHandSpeed
      released = true
      AUDIO_LOAD.rouletteGame.stop()
      AUDIO_LOAD.rotateRoulette.play()
      handleClick.removeClass('showing')
    }
    pressed = false
  }

  function calculateMaxSpeedAnimation () {
    if (!released || breaking) return false
    speedAnimationMaxSpeed =
      (1 - maxSpeedElaped) * lastHandSpeed + maxSpeedElaped * maxSpeed
    rSpeed = positiveSpeed
      ? speedAnimationMaxSpeed
      : -speedAnimationMaxSpeed
    maxSpeedElaped += deltaTime / maxSpeedTime
    maxSpeedElaped = Math.min(1, maxSpeedElaped)
    if (maxSpeedElaped === 1) {
      breaking = true
    }
  }

  const winnerPoints = $('#roulette .modal.modal-winner-point')
  const loserPoints = $('#roulette .modal.modal-loser-point')    

  function calculateBreak () {
    if (!released || !breaking) return false
    breakingSpeed = (1 - Math.pow(breakElapse, 0.5)) * maxSpeed
    rSpeed = positiveSpeed ? breakingSpeed : -breakingSpeed
    breakElapse += deltaTime / timeBreak
    breakElapse = Math.min(1, breakElapse)
    if (breakElapse === 1) {
      rSpeed = 0
      breaking = false
      released = false
      pressed = false
      myPoints = awards[Math.floor(currentItem)].value
      AUDIO_LOAD.rotateRoulette.stop()
      
      if(myPoints > 0) {
        winnerPoints.find('.more-points').text(`+${myPoints} pontos`)
        setTimeout(()=>{
          winnerPoints.fadeIn(
            function() {
              AUDIO_LOAD.winnerPoint.play()
            }
          )
        }, 1500)
      } else {
        setTimeout(()=> {
          loserPoints.fadeIn(
            function () {
              AUDIO_LOAD.loserPoint.play()
            }
          )
        }, 1500)
      }
    }
  }

  const rouletteTransform = () => {
    if (isFinite(deltaTime) && isFinite(rSpeed) && isFinite(itensCount)) {
      const lastIndex = Math.floor(currentItem)
      currentItem = (currentItem + deltaTime * (rSpeed || 0)) % itensCount
      if (currentItem < 0) currentItem += itensCount
      if (lastIndex !== Math.floor(currentItem) && itensCount && itensCount > 0) {
        AUDIO_LOAD.select.play()
      }
    }
    window.currentItem = currentItem
    $wrap.style.transform = `rotate(${((currentItem - 0.5) * 360) /
      itensCount}deg)`
  }

  function calculateCenter () {
    center[0] = $canvas.width * 0.5
    center[1] = $canvas.height * 0.5
    getOffset($canvas, canvasOffset)
  }

  function configAwards () {
    awards = [
      {
        name: 'pontuation-0',
        value: 0
      },
      {
        name: 'pontuation-130',
        value: 130
      },
      {
        name: 'pontuation-110',
        value: 110
      },
      {
        name: 'pontuation-170',
        value: 170
      },
      {
        name: 'pontuation-150',
        value: 150
      },
      {
        name: 'pontuation-90',
        value: 90
      },
    ].map(a => {
      const element = document.querySelector(
        `#roulette div.roulette div.award.${a.name}`
      )
      return { ...a, element }
    })

    itensCount = awards.length
    const rad = 2 * Math.PI * (1 / itensCount)
    const widthPct =
      itensCount <= 2
        ? 1
        : 0.5 *
          Math.sqrt(Math.pow(1 - Math.cos(rad), 2) + Math.pow(Math.sin(rad), 2))
    $awardsWrap.style.width = `${100 * Math.min(0.55, widthPct)}%`    
    $canvas.style.transform = `rotate(${(0.5 / itensCount) * 360 - 90}deg)`
    awards.forEach((award, ind) => {
      award.element.style.transform = `rotate(${(-ind * 360) / itensCount}deg)`
    })
  }
  
  const tick = () => {
    updateDeltaTime()
    calculateCenter()
    const sliceSize = Math.min(center[0], center[1]) * 0.82
    const sliceColors = getRouletteValue('sliceColors')
    const dt = deltaTime
    for (let i = 0; i < dt; i += 0.0625) {
      deltaTime = Math.min(0.0625, dt - i)
      calculateMaxSpeedAnimation()
      rouletteTransform()
      calculateBreak()
    }
    deltaTime = dt
    // Draw Roulette
    ctx.clearRect(0, 0, $canvas.width, $canvas.height)
    ctx.translate(center[0], center[1])
    drawBackground(ctx, $canvas.width, $canvas.height, '#FFA722')
    drawBackground(ctx, $canvas.width * 0.85, $canvas.height * 0.85, '#924D06')
    drawItensBackgrounds(ctx, itensCount, sliceSize, sliceColors)
    ctx.translate(-center[0], -center[1])
    ctx.restore()

    window.requestAnimationFrame(tick)
  } 

  const onEnter = () => {
    deltaTime = 0.22
    $wrap.addEventListener('pointerdown', handlePointerDown)
    $wrap.addEventListener('pointermove', handlePointerMove)
    $wrap.addEventListener('pointerup', handlePointerUp)
    $wrap.addEventListener('pointerout', handlePointerUp)
    $wrap.addEventListener('pointerleave', handlePointerUp)
    configAwards()
    tick()    
  }
  
  onEnter()  
}
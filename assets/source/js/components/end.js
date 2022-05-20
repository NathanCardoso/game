const end = () => { 
  
  const nameUser = $('.card-end .body-card .name-placed h4')
  const subDomain = $('.card-end .body-card .name-placed .sub-name')
  const userPoints = $('.card-end .body-card .total-of-points .number')
  const userPosition = $('.card-end .body-card .number-wrap .number')
  const totalTime = $('.card-end .footer-card .timer-box span')


  AUDIO_LOAD.winnerPoint.stop()
  AUDIO_LOAD.loserPoint.stop()
  AUDIO_LOAD.welcome.stop()
  AUDIO_LOAD.end.play() 
  
  ajax({
    action: 'getUserRanking',
    method: 'get',
    headers: {
      Authorization: `Bearer ${storage("GET", "corteva-token")}}`
    },
    callback: function(data) {
      const userData = data.data[0]
      const time = userData.totalTime
      const [hora, min, seg ] = time.split(":")
      
      nameUser.text(userData.name)
      subDomain.text(userData.empresa)
      userPosition.text(`${userData.ranking}°`)
      userPoints.text(userData.points)
      totalTime.text(`${min}:${seg}`)
    }
  })
}
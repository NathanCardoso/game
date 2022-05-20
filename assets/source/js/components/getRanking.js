const getRanking = () => {

  
  const modalRanking = $('.modal-ranking')
  const btnToRank = $('.call-to-rank')  
  const ranking = {}

  btnToRank.on('click', function(){
    // ajax 
    $(this).addClass('btn-loading')
    $(this).prop('disabled', true)

    ajax({
      action: 'getRanking',
      method: 'get',
      headers: {
        Authorization: `Bearer ${storage("GET", "corteva-token")}}`
      },
      callback: function(data) {          
        if(data.sucesso) {
          ranking.placeds = data.data
          populateRank(ranking)
          modalRanking.fadeIn()
        }
        btnToRank.removeClass('btn-loading')
        btnToRank.prop('disabled', false)
      }
    })
  })
  

  function populateRank(args) {

    const rank = args
    const $rankList = $('.modal-ranking .rank > ul')
    const placeds = rank.placeds

    $rankList.empty()
    placeds.forEach((placed, index) => {
      const isTopRanked = winners(index)
      const $placed = 
      `
        <li>
          <div class="placeds ${(isTopRanked[0]? 'top-ranked': '')}">
            <div class="placed-content">
              <div class="number-ranked">
                <div class="number-wrap">
                  <span class="number">${(index + 1)}°</span>
                </div>
              </div>
              <div class="name-placed">
                <h4>${placed.name}</h4>
                <span class="sub-name">${placed.empresa}</span>
              </div>
              <div class="total-of-points ${(isTopRanked[0]? 'winners': '')} ${(isTopRanked[1])}">
                <span class="number">${placed.totalPoints}</span>
              </div>
            </div>
          </div>
        </li>
      `
      $rankList.append($placed)
    });
  }

  function winners(arg) {
    const winner = (arg <= 2)
    let position
    switch(arg) {
      case 0: position = 'first-place'
      break;
      case 1: position = 'second-place'
      break;
      case 2: position = 'third-place'
      break;
      default: position = ''
      break
    }
    return [winner, position]
  }
}
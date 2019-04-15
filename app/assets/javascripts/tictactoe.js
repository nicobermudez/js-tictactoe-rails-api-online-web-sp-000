// Code your JavaScript / jQuery solution here


function buttonListeners() {
  $('td').on('click', function() {
    if(!$.text(this) && !checkWinner()) {
      doTurn(this)
    }
  })
  
  $("#save").on('click', () => saveGame())
  $('#previous').on('click', () => showPreviousGames())
  $('#clear').on("click", () => resetBoard())
}

function player() {
  
}
// Code your JavaScript / jQuery solution here

const WINNING_COMBOS = [[0,1,2], [3,4,5], [6,7,8], [0,3,6],
                        [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

let turn = 0
let currentGame = 0

$(document).ready(function() {
  attachListeners()
})


function attachListeners() {
  $('td').on('click', function() {
    if(!$.text(this) && !checkWinner()) {
      doTurn(this)
    }
  })

  $("#save").on('click', () => saveGame())
  $('#previous').on('click', () => showPreviousGames())
  $('#clear').on("click", () => resetBoard())
}

const player = () => turn % 2 ? 'O' : 'X'


function updateState(td) {
  let symbol = player()
  $(td).text(symbol)
}

function setMessage(string) {
  $('#message').text(string)
}

function doTurn() {

}

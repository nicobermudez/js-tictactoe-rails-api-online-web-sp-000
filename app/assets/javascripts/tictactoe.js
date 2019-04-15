// Code your JavaScript / jQuery solution here


function buttonListeners() {
  $("#save").on('click', () => saveGame())
  $('#previous').on('click', () => showPreviousGames())
  $('#clear').on("click", () => resetBoard())
}

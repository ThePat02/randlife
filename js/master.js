// Masterfile

function init()
{
  menuToggle(false, "menu_start");
}

function initNewGame(mode)
{
  showStartMenu(mode);
}

function startGame()
{
  menuToggle(false, "menu_start");
  write("You are born as " + m_name + " " + m_surname + " in " + m_year + ".", "bold");
  lineBreak();

  nextYear();
}

// Masterfile

function init()
{
  menuToggle(false, "menu_start");
  menuToggle(false, "button_nextyear");

  //Load resources
  jsonGetSchools();
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
  write("Your parents are " + writeParentalWealth() + " people.");
  lineBreak();

  menuToggle(true, "button_nextyear");
  nextYear();
}

function updateScroll(){
    var element = document.getElementById("gamebox");
    element.scrollTop = element.scrollHeight;
}

function updateStatGraph()
{
  myPolarArea.data.datasets[0].data[0] = m_health;
  myPolarArea.data.datasets[0].data[1] = m_appearance;
  myPolarArea.data.datasets[0].data[2] = m_intellect;
  myPolarArea.data.datasets[0].data[3] = m_fitness;
  myPolarArea.data.datasets[0].data[4] = m_popularity;

  myPolarArea.update();
}

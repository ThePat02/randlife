// Masterfile

function init()
{
  menuToggle(false, "menu_start");
  menuToggle(false, "button_nextyear");
  menuToggle(false, "dashboard_school");
  menuToggle(false, "dashboard_school2");

  //Load resources
  jsonGetSchools();
}

function initNewGame(mode)
{
  showStartMenu(mode);
}

function startGame()
{
  m_name = document.getElementById("box_name").value;
  m_surname = document.getElementById("box_surname").value;
  m_gender = document.getElementById("box_gender").value;


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

function updateInfoDashboard()
{
  changeContent("info_name", m_name + " " + m_surname);
  changeContent("info_age", m_age);

  changeContent("info_club", m_club);
  changeContent("info_act", m_act);
}

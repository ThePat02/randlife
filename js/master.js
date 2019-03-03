// Masterfile

function init()
{
  menuToggle(false, "menu_start");
  menuToggle(false, "button_nextyear");
  menuToggle(false, "dashboard_school");

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

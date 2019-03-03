//Menu interactions

function menuToggle(action, id) {
  switch (action) {
    case true:
      document.getElementById(id).style.display = 'block';
      break;
    case false:
      document.getElementById(id).style.display = 'none';
      break;
  }
}

function showStartMenu(mode) {

  menuToggle(true, "menu_start");
  menuToggle(false, "menu_init");


  switch (mode) {
    case "random":
      menuToggle(false, "menu_start_custom");
      break;

    case "custom":
      menuToggle(false, "menu_start_random");
      break;
  }
}

function showChooseSchoolMenu()
{
  write("Choose your school: ");
  jsonGetSchools()
  write("<a>" + school.name[0] + "</a> " + "<a>" + school.name[1] + "</a> " + "<a>" + school.name[2] + "</a>");
  lineBreak();
}

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

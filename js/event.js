function triggerEvent() {

  var random = Math.floor(Math.random() * 10) + 0;

  if (random == 5) {
    //triggerEvent
  }

}

function eventChildhood() {

}

function checkSpecialEvent() {
  if (1 == 2) {

  } //Placeholder
  else if (m_age == 6) {
    write("You are now old enough to start going to school.");
    lineBreak();
    showChooseSchoolMenu();
  }
}

function chooseSchool(school) {
  menuToggle(false, "menu_school");
  lineBreak();
  log("yes");

  if (school == 2) {
    if (school.req[2] == m_parentalwealth) {
      m_school = 2;
      write("You decide to go to a " + school.name[2] + ".");
    } else {
      m_school = 0;
      write("You can't afford this school so you go to a " + school.name[0] + ".");
    }
  } else if (school == 1) {
    if (school.req[1] == m_parentalwealth) {
      m_school = 1;
      write("You decide to go to a " + school.name[1] + ".");
    } else {
      m_school = 0;
      write("You can't afford this school so you go to a " + school.name[0] + ".");
    }
  }
  else {
    m_school = 0;
    write("You decide to go to a " + school.name[0] + ".");
  }
}


function debugEvent(folder, id) {
  $.ajax({
    type: "GET", //rest Type
    dataType: 'json', //mispelled
    url: "https://thepat02.github.io/randlife//data/event/" + folder + "/" + id + ".json",
    async: false,
    contentType: "application/json; charset=utf-8",
    success: function(msg) {
      console.log(msg);
    }
  });
}

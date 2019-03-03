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
    menuToggle(false, "button_nextyear");
    write("You are now old enough to start going to school.");
    lineBreak();
    showChooseSchoolMenu();
  }
  else if (m_schoolyear == 9) {
    studentCouncil();
    lineBreak();
  }
}


//School



  return result;
}



//Misc

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

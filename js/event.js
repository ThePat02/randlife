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
}


//School

function chooseSchool(school_arg) {
  menuToggle(false, "menu_school");
  lineBreak();

  if (school_arg == 2) {
    if (school.req[2] == m_parentalwealth) {
      m_school = 2;
      write("You decide to go to a " + school.name[2] + ".");
      m_popularity = m_popularity + 50;
    } else {
      m_school = 0;
      write("You can't afford this school so you go to a " + school.name[0] + ".");
      m_popularity = m_popularity + 20;
    }
  } else if (school_arg == 1) {
    if (school.req[1] == m_parentalwealth) {
      m_school = 1;
      write("You decide to go to a " + school.name[1] + ".");
      m_popularity = m_popularity + 30;
    } else {
      m_school = 0;
      write("You can't afford this school so you go to a " + school.name[0] + ".");
      m_popularity = m_popularity + 20;
    }
  } else {
    m_school = 0;
    write("You decide to go to a " + school.name[0] + ".");
    m_popularity = m_popularity + 20;
  }

  lineBreak();

  switch (true) {
    case (m_appearance < 25):
      write("You gained less popularity, because of your appearance.");
      m_popularity = m_popularity - 10;
      break;
    case (m_appearance > 80):
      write("Since you are the best looking in class, you are rather popular.");
      m_popularity = m_popularity + 25;
      break;
    case (m_appearance > 70):
      write("You are rather good looking and people want to talk with you.");
      m_popularity = m_popularity + 10;
      break;
    case (m_appearance > 40):
      write("Since you are average looking, people don't dislike you.");
      m_popularity = m_popularity + 5;
      break;
    default:
      break;
  }

  if (m_parentalwealth == 3) {
    write("Your parents wealth benefits your popularity!");
    m_popularity = m_popularity + 5;
  }

  lineBreak();
  write("You can join clubs etc. by selecting them on the school dashboard.", "hint");
  menuToggle(true, "dashboard_school");

  updateStatGraph();
  lineBreak();
  menuToggle(true, "button_nextyear");
}

function calcGrades() {
  var grade = m_intellect + (m_fitness / 3) + generateRandom(1, 30);
  m_intellect = m_intellect + grade/5;
  m_popularity = m_popularity + grade/6;

  var result = "";

  switch (true) {
    case (grade < 50):
      result = "Bad";
      break;
    case (grade < 80):
      result = "Average";
      break;
    case (grade < 90):
      result = "Good";
      break;
    case (grade > 90):
      result = "Very good";
      break;
  }

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

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
  menuToggle(true, "dashboard_school2");

  updateStatGraph();
  lineBreak();
  menuToggle(true, "button_nextyear");
}

function calcGrades() {
  var grade = m_intellect + (m_fitness / 5) + generateRandom(1, 30);

  var result = "";

  switch (true) {
    case (grade < 50):
      result = "Bad";
      m_happiness = m_happiness - 5;
      break;
    case (grade < 80):
      result = "Average";
      m_happiness = m_happiness - 1;
      break;
    case (grade < 90):
      result = "Good";
      break;
    case (grade > 90):
      result = "Very good";
      m_happiness = m_happiness + 1;
      break;
  }

  return result;
}


function studentCouncil() {
  if (m_intellect + m_popularity > 109) {
    write("You are elected to join the student council.");
    m_popularity = m_popularity + 10;
    m_trustworthyness = m_trustworthyness + 20;
    m_council = true;
  } else {
    write("You are not smart or popular enough to join the student council.");
  }
}

function joinClub(club) {
  switch (club) {
    case "none":
      write("You aren't going to any club.");
      m_club = "none";
      break;
    case "sport":
      write("You are going to the sports club.");
      m_club = "sport";
      break;
    case "literature":
      write("You are going to the literatrue club.");
      m_club = "literature";
      break;
    case "music":
      write("You are going to the music club.");
      m_club = "music";
      break;
  }
  lineBreak();

  updateInfoDashboard();
}

function updateClubStats() {
  switch (m_club) {
    case "none":
      break;
    case "sport":
      m_fitness = m_fitness + 2;
      break;
    case "literatrue":
      m_intellect = m_intellect + 2;
      break;
    case "music":
      m_popularity = m_popularity + 2;
      break;
  }

  updateStatGraph();
}

function updateActStats() {
  switch (m_act) {
    case "none":
      break;
    case "learning":
    m_intellect = m_intellect + 2;
    m_fitness = m_fitness - 1;
      break;
    case "workout":
    m_fitness = m_fitness + 2;
    m_appearance = m_appearance + 1;
      break;
    case "social":
      m_popularity = m_popularity + 1;
      break;
  }

  updateStatGraph();
}

function joinAct(act) {
  switch (act) {
    case "none":
      write("You aren't doing anything after school.");
      m_act = "none";
      break;
    case "learning":
      write("You start learning after school.");

      m_act = "learning";
      break;
    case "workout":
      write("You start working out after school.");
      m_act = "workout";

      break;
    case "social":
      write("You start meeting your friends after school.");
      m_popularity = m_popularity + 1;
      m_act = "social";
      break;
  }
  lineBreak();
  updateInfoDashboard();
}

function prom() {
  if (m_council == true) {
    write("As member of the student council you help with organizing the graduation prom.");
    var result = generateRandom(1, 20);

    switch (true) {
      case (result < 5):
        write(" It went horribly wrong.");
        m_trustworthyness = m_trustworthyness - 10;
        break;
      case (result < 15):
        write(" Overall everything went good.");
        m_trustworthyness = m_trustworthyness + 5;
        break;
      case (result > 15):
      write(" Everything was flawless.");
      m_trustworthyness = m_trustworthyness + 10;
      m_popularity = m_popularity + 10;
      break;
    }

  }
  else {
    write("You addented the graduation prom.");
  }

  lineBreak();
}

function schoolEnd() {
  menuToggle(false, "dashboard_school");
  menuToggle(false, "dashboard_school2");

  var finalgrades = calcGrades();

  write("You finish school with " + finalgrades + " grades.");
  changeContent("info_finalgrades", finalgrades);
  lineBreak();
  prom();
}

// Gamefiles

function nextYear()
{

  m_year = m_year + 1;
  m_age = m_age + 1;

  write("Year " + m_year + " - " + m_age + " years old", "bold");
  lineBreak();
  if (m_maxage <= m_age) {
    //Die
  }
  else {
    checkSpecialEvent();
    triggerEvent();
  }

  updateSchoolInfo();

  capStats();

  updateScroll();
  updateStatGraph();

  console.log("Finished year");
}

function updateSchoolInfo()
{
  if (m_age > 5)
  {
  m_schoolyear = m_schoolyear + 1;
  if (m_schoolyear < 13) {
    changeContent("info_schoolyear", "Year " + m_schoolyear);
    changeContent("info_grades", calcGrades());
    changeContent("info_schooltype", writeSchoolType());
  }
}
}

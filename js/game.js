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

  updateScroll();
}

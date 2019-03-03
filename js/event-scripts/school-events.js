function studentCouncil()
{
  if (m_intellect + m_popularity > 99) {
    write("You are elected to join the student council.");
    m_popularity = m_popularity + 10;
  }
  else {
    write("You are not smart or popular enough to join the student council.");
  }
}

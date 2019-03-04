//Saving/Loading data

var m_year = 2000;

//Important stats
var m_name = "Max";
var m_surname = "Mustermann";
var m_gender = "male";
var m_age = 0;

var m_parentalwealth = 1; //0 = Poor -- 1 = Average -- 2 = Rich -- 3 = Very rich

//Base stats
var m_health = 50;
var m_appearance = 50;
var m_intellect = 50;
var m_fitness = 50;
var m_popularity = 50;
var m_happiness = 50;
var m_trustworthyness = 50;

var m_school = 0 //0 public -- 1 private -- 2 high class private
var m_schoolyear = 0;

var m_club = "none";
var m_act = "none";
var m_council = false;

//Random stats
var m_maxage = 0;
m_maxage = generateRandom(70, 130);

//JSON Parsed objs
var school = [];

//Functions

function updateStatGraph()
{
  myPolarArea.data.datasets[0].data[0] = m_health;
  myPolarArea.data.datasets[0].data[1] = m_appearance;
  myPolarArea.data.datasets[0].data[2] = m_intellect;
  myPolarArea.data.datasets[0].data[3] = m_fitness;
  myPolarArea.data.datasets[0].data[4] = m_popularity;
  myPolarArea.data.datasets[0].data[5] = m_happiness;
  myPolarArea.data.datasets[0].data[6] = m_trustworthyness;

  myPolarArea.update();
}

function capStats()
{
  if (m_health > 100) m_health = 100;
  if (m_appearance > 100) m_appearance = 100;
  if (m_intellect > 100) m_intellect = 100;
  if (m_fitness > 100) m_fitness = 100;
  if (m_popularity > 100) m_popularity = 100;
  if (m_happiness > 100) m_happiness = 100;
  if (m_trustworthyness > 100) m_trustworthyness = 100;
}

function randomizeStats(a)
{
  m_health = 100;
  m_happiness = 50;
  m_popularity = 0;
  m_trustworthyness = 0;
  m_appearance = generateRandom(20, 100);
  m_intellect = generateRandom(20, 100);
  m_fitness = generateRandom(40, 100);

  if (a == true) {
    m_parentalwealth = generateRandom(0, 100);

    if (m_parentalwealth > 90) m_parentalwealth = 3;
    else if (m_parentalwealth > 70) m_parentalwealth = 2;
    else if (m_parentalwealth > 30) m_parentalwealth = 1;
    else m_parentalwealth = 0;

    }
    updateStatGraph();
  }

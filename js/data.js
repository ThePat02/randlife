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

var m_school = 0 //0 public -- 1 private -- 2 high class private

//Random stats
var m_maxage = 0;
m_maxage = generateRandom(70, 130);

//JSON Parsed objs
var school = [];

//Functions

function randomizeStats(a)
{
  m_health = 100;
  m_popularity = 0;
  m_appearance = generateRandom(30, 100);
  m_intellect = generateRandom(20, 100);
  m_fitness = generateRandom(40, 100);

  if (a == true) {
    m_parentalwealth = generateRandom(0, 3);
  }

  updateStatGraph();
}

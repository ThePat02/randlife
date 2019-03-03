//All text commands

function write(text, style)
{
    switch (style) {
      case "bold":
        document.getElementById('game').innerHTML += "<strong>" + text +"</strong>";
        break;
      case "hint":
        document.getElementById('game').innerHTML += "<span style='color:grey'>" + text +"</span>";
      default:
        document.getElementById('game').innerHTML += text;
        break;

    }
}

function lineBreak()
{
  document.getElementById('game').innerHTML += "<br>";
}

function dialog(text, btn1, btn1_action, btn2, btn2_action)
{
  write(text);
  document.getElementById('game').innerHTML += "<a onclick='" + btn1_action + "'>" + btn1 + "</a> <a onclick='" + btn2_action + "'>" + btn2 + "</a>";
}

function writeParentalWealth()
{
  switch (m_parentalwealth) {
    case 0:
      return "poor";
      break;
    case 1:
      return "normal earning";
      break;
    case 2:
      return "rich";
      break;
    case 3:
      return "very rich";
      break;

  }
}

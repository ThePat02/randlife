//All text commands

function write(text, style)
{
    switch (style) {
      case "bold":
        document.getElementById('game').innerHTML += "<strong>" + text +"</strong>";
        break;
      default:
        document.getElementById('game').innerHTML += text;
        break;

    }
}

function lineBreak()
{
  document.getElementById('game').innerHTML += "<br>";
}

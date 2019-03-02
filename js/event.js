function triggerEvent() {

  switch (m_age) {
    case (val <= 6):
      eventChildhood();
      break;
    default:
  }
}

function eventChildhood()
{

}

function debugEvent(folder, id)
{
  $.ajax({
           type: "POST", //rest Type
           dataType: 'json', //mispelled
           url: "https://raw.githack.com/ThePat02/randlife/master/data/event/" + folder + "/" + id + ".json",
           async: false,
           contentType: "application/json; charset=utf-8",
           success: function (msg) {
               console.log(msg);
           }
});
}

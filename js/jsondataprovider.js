function jsonGetSchools()
{
  $.ajax({
           type: "GET", //rest Type
           dataType: 'json', //mispelled
           url: "https://thepat02.github.io/randlife//data/schools.json",
           async: false,
           contentType: "application/json; charset=utf-8",
           success: function (msg) {
               school = jQuery.parseJSON(JSON.stringify(msg));;
           }});
}

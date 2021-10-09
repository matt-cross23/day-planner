var saveButtons = $("button") 
console.log(saveButtons)


var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
var time = moment().format("ha");
console.log(time);
// console.log(time)
$(".hour").each(function getTime(index) {
  console.log(index + ":" + $(this).text());
  if ($(this).text() == time) {
    $("#" + index).addClass("present");
  }
  if ($(this).text() < time) {
    $("#" + index).addClass("past");
  }
  if ($(this).text() > time) {
    $("#" + index).addClass("future");
  }
});

var task = localStorage.getItem("text");
$(".saveBtn").click(function () {
  var text = $(this).siblings(".description").val();
  console.log(text);
  localStorage.setItem("text", text);
});


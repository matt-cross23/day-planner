var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
var time = moment().format("ha")
console.log(time)
    $(".hour").each(function getTime(index) {
    index + ": " + $( this ).text()
      });
$("SaveBtn").click(function(){ 
  localstorage.content = $('#textarea').html
   saveArr = localstorage.getItem('#textarea') 
    

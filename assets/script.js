var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
var time = moment().format("ha")
console.log(time)
   var timeList =  $(".hour").each(function getTime(index) {
    console.log (index + ": " + $( this ).text())  
    });
    

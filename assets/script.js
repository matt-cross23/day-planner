var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
var time = moment().hour()
// console.log(time)
    $(".hour").each(function(index) {
    console.log([index + ": " + $( this ).text()])
      });

    //   console.log( index + ": " + $( this ).text() )
    console.log($.now())
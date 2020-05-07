

// Set the date we're counting down to

var date = new Date("May 08, 2020 15:44:05");
var utc_offset = date.getTimezoneOffset();
 

date.setMinutes(date.getMinutes() + utc_offset);
var UK_offset = 0 * 60;
date.setMinutes(date.getMinutes() + UK_offset);
console.log("UK: " + date);
// // Update the count down every 1 second
 var x = setInterval(function() {

//   // Get today's date and time
   var now = new Date().getTime();
    
//   // Find the distance between now and the count down date
   var distance = date - now;
    
//   // Time calculations for days, hours, minutes and seconds
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Output the result in an element with id="timer"
   document.getElementById("timer").innerHTML = days + " d: " +hours + " : "
   + minutes + " : " + seconds;
    
//   // If the count down is over, write some text 
   if (distance < 0) {
     clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
   }
 }, 1000);
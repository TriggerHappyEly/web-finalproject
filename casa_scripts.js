"use strict";


// ************* This fulfills requirement 2.4.6 ******************



// This is the Javascript File for the Clock display on the index.html

runClock();

setInterval("runClock()", 1000); //constant update on the seconds

function runClock() {
	
  var today = new Date();
  var hrs = today.getHours();
  var mins = today.getMinutes();
  var secs = today.getSeconds();
  mins = checkTime(mins);
  secs = checkTime(secs);
  document.getElementById('clock-txt').innerHTML=  hrs + ":" + mins + ":" + secs;
  var time = setTimeout(runClock, 500);
  
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
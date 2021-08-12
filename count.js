const timebox = document.querySelectorAll(".time-box div p");

let days = new Date(2022, 01, 01, 01, 0, 0);
let dayss = days.getTime();



function countDown(days) {
// about present time
var todayDate = new Date();
var todayTime = todayDate.getTime();
// console.log(todayTime)

// const futureDate = new Date(2021, 2, 6, 01, 0, 0);
// const futureTime = futureDate.getTime();

// remaining time
const remainingTime = days - todayTime;
// console.log(remainingTime)
// *** SET TIME VALUES
 // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr
// get values in miliseconds
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;
const seconds = 1000;
// calculate to remaining values
let rDays = remainingTime / oneDay;
// to get complete day
rDays = Math.floor(rDays);
rHours = Math.floor((remainingTime % oneDay) / oneHour);
rMinutes =Math.floor((remainingTime % oneHour) / oneMinute);
rSeconds = Math.floor((remainingTime % oneMinute) / seconds);

const values = [rDays, rHours, rMinutes, rSeconds];

function timeFormat(item) {
  if (item < 10) {
    return (item = `0${item}`);
  }
 return item;

}

timebox.forEach(function(item, inde) {
 item.innerHTML = timeFormat(values[inde]);

 if (remainingTime < 0) {
   clearInterval(clock);
   item.innerHTML = "00";
 }
});
}

let clock = setInterval(countDown, 1000,dayss);
  countDown(dayss);

// // window.addEventListener("DOMContentLoaded", function() {

// //   if (window.event == "DOMContentLoaded") {
// //     console.log("hello");
// //   }

  
// });



// let clock = setInterval(countDown, 1000,dayss);

// ******* for another button

// const btn = document.getElementById("otherday");



// // btn.addEventListener("click", function() {

// //   const test = new Date(2021, 3, 7, 5, 36, 0).getTime();

// // setInterval(countDown, 1000, test);
// // countDown(test);
 

// });





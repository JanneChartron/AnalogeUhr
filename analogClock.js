const hr = document.querySelector(".hand.hour-hand"); // searches in the HTML element that has the class "hand hour-hand" and assigns it to the variable hr.
const min = document.querySelector(".hand.min-hand"); // searches in the HTML element that has the class "hand min-hand" and assigns it to the variable min.
const sec = document.querySelector(".hand.second-hand"); // searches in the HTML element that has the class "hand sec-hand" and assigns it to the variable sec.

setInterval(() => {
  let day = new Date(); // Create the variable day 
  let hour = day.getHours(); // Create the variable hour
  let minutes = day.getMinutes(); // Create the variable minutes
  let seconds = day.getSeconds(); // Create the variable seconds

  let hrrotation = 30 * hour + 0.5 * minutes; // This line calculates the rotation angle for the hour hand.
  let minrotation = 6 * minutes; // This line calculates the rotation angle for the minute hand.
  let secrotation = 6 * seconds; // This line calculates the rotation angle for the second hand.

  hr.style.transform = `translate(-50%,-100%) rotate(${hrrotation}deg)`; // defines the CSS transformation for the hour hand (hr) in JavaScript.
  min.style.transform = `translate(-50%,-100%) rotate(${minrotation}deg)`; // defines the CSS transformation for the minute hand (min) in JavaScript.
  sec.style.transform = `translate(-50%,-85%) rotate(${secrotation}deg)`; // defines the CSS transformation for the second hand (sec  ) in JavaScript.
});
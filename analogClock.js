// selects and assigns the element with class "hand hour-hand".
const hr = document.querySelector(".hand.hour-hand");
// selects and assigns the element with class "hand min-hand".
const min = document.querySelector(".hand.min-hand");
// selects and assigns the element with class "hand second-hand".
const sec = document.querySelector(".hand.second-hand");

setInterval(() => {
  let day = new Date(); // Create the variable day
  let hour = day.getHours(); // Create the variable hour
  let minutes = day.getMinutes(); // Create the variable minutes
  let seconds = day.getSeconds(); // Create the variable seconds

  // This block calculates the rotation angle for the for the different times.
  let hrrotation = 30 * hour + 0.5 * minutes;
  let minrotation = 6 * minutes;
  let secrotation = 6 * seconds;

  // Applies CSS transformations to position and rotate the clock hands.
  hr.style.transform = `translate(-50%,-100%) rotate(${hrrotation}deg)`;
  min.style.transform = `translate(-50%,-100%) rotate(${minrotation}deg)`;
  sec.style.transform = `translate(-50%,-85%) rotate(${secrotation}deg)`;
});

// Get the current date as a string with two digits for the day and month
const dateString = new Date().toLocaleDateString("de-CH", {
  day: "2-digit",
  month: "2-digit",
});

// Extract the day and the month
const day = dateString.substring(0, 2);
const month = dateString.substring(3, 5);

// Insert the edited date into the document (with a dot between the day and month)
document
  .querySelector(".clock")
  .insertAdjacentHTML(
    "beforeend",
    `<div class = "date-display">${day}.${month}</div>`
  );

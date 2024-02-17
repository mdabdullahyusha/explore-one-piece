// Set the date we're counting down to
const countDownDate = new Date("Oct 1, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {

  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const distance = countDownDate - now;

  // Calculate days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.querySelector(".days").innerText = days < 10 ? "0" + days : days;
  document.querySelector(".hours").innerText = hours < 10 ? "0" + hours : hours;
  document.querySelector(".minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
  document.querySelector(".seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

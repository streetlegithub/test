// Get the button and counter elements
const button = document.getElementById("button");
const counter = document.getElementById("counter");

// Initialize the click count and start time
let clicks = 0;
let startTime = Date.now();

// Set up a click event listener for the button
button.addEventListener("click", () => {
  // Increment the click count and update the counter
  clicks++;
  counter.textContent = clicks;
});

// Set up an interval to check the elapsed time and update the button text
setInterval(() => {
  // Calculate the elapsed time in seconds
  const elapsedTime = (Date.now() - startTime) / 1000;

  // Update the button text with the clicks per second
  button.textContent = `Clicks per second: ${(clicks / elapsedTime).toFixed(2)}`;
}, 1000);

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
const interval = setInterval(() => {
  // Calculate the elapsed time in seconds
  const elapsedTime = (Date.now() - startTime) / 1000;

  // Update the button text with the clicks per second
  button.textContent = `Clicks per second: ${(clicks / elapsedTime).toFixed(2)}`;

  // If the elapsed time is greater than or equal to 5 seconds, stop the interval
  // and disable the button
  if (elapsedTime >= 5) {
    clearInterval(interval);
    button.disabled = true;

    // Display the result message
    const result = document.createElement("div");
    result.textContent =

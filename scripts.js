const scoreCard = document.getElementById("scoreCard");
const thankYou = document.getElementById("thankYou");
const results = document.getElementById("results");
// Buttons
const scoreBtns = document.querySelectorAll(".scoreBtns button");
const submitBtn = document.getElementById("submitBtn");

//create a function that listens for button clicks
//based on the button that's clicked
//it hide the scoreCard, shows the thank you card
//updates the text content on the thankyou card with the buton you clicked

let selectedRating = null;

function isRated() {
  scoreBtns.forEach((button) => {
    button.addEventListener("click", () => {
      scoreBtns.forEach((btn) => {
        btn.classList.remove("selected");
      });
      button.classList.add("selected");
      selectedRating = button.textContent;
    });
  });
}

submitBtn.addEventListener("click", () => {
  if (selectedRating !== null) {
    scoreCard.style.display = "none";
    thankYou.style.display = "block";
    results.textContent = `You selected ${selectedRating} out of 5`;
  } else {
    alert("Please select a rating before submitting.");
  }
});

isRated();

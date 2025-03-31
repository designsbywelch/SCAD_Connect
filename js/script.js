// script.js

// Select Forms
const freshmenForm = document.getElementById("freshmenForm");
const mentorForm = document.getElementById("mentorForm");
const matchesList = document.getElementById("matchesList");

// Arrays to Store Data
let freshmen = [];
let mentors = [];

// Freshman Signup
freshmenForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get Freshman Data
  const name = document.getElementById("freshmanName").value;
  const major = document.getElementById("freshmanMajor").value;
  const contact = document.getElementById("freshmanContact").value;

  // Add Freshman to Array
  freshmen.push({ name, major, contact });
  alert(`${name} signed up successfully!`);

  // Clear Form
  freshmenForm.reset();
});

// Mentor Signup
mentorForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get Mentor Data
  const name = document.getElementById("mentorName").value;
  const major = document.getElementById("mentorMajor").value;
  const availability = document.getElementById("mentorAvailability").value;

  // Add Mentor to Array
  mentors.push({ name, major, availability });
  alert(`${name} is now a mentor!`);

  // Clear Form
  mentorForm.reset();
});

// Match Freshmen with Mentors
function matchFreshmenWithMentors() {
  matchesList.innerHTML = ""; // Clear Existing Matches

  freshmen.forEach((freshman) => {
    const mentor = mentors.find((mentor) => mentor.major === freshman.major);

    if (mentor) {
      // Display Match
      const listItem = document.createElement("li");
      listItem.textContent = `${freshman.name} (Freshman) is matched with ${mentor.name} (Mentor)`;
      matchesList.appendChild(listItem);
    }
  });
}

// Add Button to Trigger Matching
const matchButton = document.createElement("button");
matchButton.textContent = "Match Freshmen with Mentors";
matchButton.addEventListener("click", matchFreshmenWithMentors);
document.body.appendChild(matchButton);

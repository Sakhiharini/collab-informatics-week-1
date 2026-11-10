// ==========================================
// AU Informatics - Collaborative Lab 1
// ==========================================

const inputField = document.getElementById("status-input");
const outputDisplay = document.getElementById("card-output");

// Basic state object
const appState = {
  text: "",
  updatedBy: "BubuBear"
};

inputField.addEventListener("input", (e) => {
  appState.text = e.target.value;
  outputDisplay.innerText = `Current State: ${appState.text}`;
});

// LINE 18: CONFLICT EXERCISE (Both partners will edit this line)
const activeTheme = "Emerald Blue";

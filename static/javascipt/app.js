const descriptions = [
  "Python Developer",
  "Web Scraper",
  "Full Stack Developer",
];
const typingSpeed = 100; // Adjust typing speed (milliseconds)
let currentDescriptionIndex = 0;
let currentCharacterIndex = 0;

function typeDescription() {
  const typingElement = document.getElementById("typing-effect");
  typingElement.textContent = descriptions[currentDescriptionIndex].substring(
    0,
    currentCharacterIndex
  );
  currentCharacterIndex++;

  if (currentCharacterIndex > descriptions[currentDescriptionIndex].length) {
    currentCharacterIndex = 0;
    currentDescriptionIndex++;
    if (currentDescriptionIndex >= descriptions.length) {
      currentDescriptionIndex = 0;
    }
  }

  setTimeout(typeDescription, typingSpeed);
}

typeDescription();

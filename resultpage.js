document.addEventListener("DOMContentLoaded", function () { 
    // Get stored score and user name from localStorage
    let storedScore = localStorage.getItem("depressionScore");
    let userName = localStorage.getItem("userName")?.trim() || "User"; // Default to "User" if empty or missing

    // Ensure elements exist before modifying them
    let userNameElement1 = document.getElementById("user-name");
    let userNameElement2 = document.getElementById("user-name-2");
    let finalScoreElement = document.getElementById("final-score");
    let resultMessageElement = document.getElementById("result-message");

    if (userNameElement1) userNameElement1.innerText = userName;
    if (userNameElement2) userNameElement2.innerText = userName;

    // If no score is found, generate a new one (for debugging purposes)
    if (!storedScore) {
        function getRandomScore(min, max) {
            return (Math.random() * (max - min) + min).toFixed(2);
        }
        storedScore = getRandomScore(3.5, 10);
        localStorage.setItem("depressionScore", storedScore);
    }

    // Convert storedScore to a number and format to 2 decimal places
    storedScore = parseFloat(storedScore).toFixed(2);

    // Display the stored score
    if (finalScoreElement) finalScoreElement.innerText = storedScore;

    // Determine message based on score range
    let message = "";
    if (storedScore < 5) {
        message = "Mild depression detected. Consider making small lifestyle changes and seeking support.";
    } else if (storedScore < 7) {
        message = "Moderate depression detected. Professional help may be beneficial.";
    } else {
        message = "Severe depression detected. It's highly recommended to seek professional guidance.";
    }

    if (resultMessageElement) resultMessageElement.innerText = message;
});

// Function to clear score and retake the test
function retakeTest() {
    localStorage.removeItem("depressionScore"); 
    localStorage.removeItem("userName"); // Optionally clear the name too
    window.location.href = "starttest.html"; // Redirect to test page
}

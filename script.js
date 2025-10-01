/**
 * STEP 1: PASSWORD CHECK
 */
function checkPassword() {
    // --- SET YOUR PASSWORD HERE ---
    const correctPassword = "BurgerMojo";

    const passwordInput = document.getElementById("password-input").value;
    const errorMessage = document.getElementById("error-message");
    const landingPage = document.getElementById("landing-page");
    const mainContent = document.getElementById("main-content");

    if (passwordInput === correctPassword) {
        // Fade out the landing page
        landingPage.style.opacity = '0';
        landingPage.style.transition = 'opacity 0.5s ease-out';
        
        // After fade out, hide it and show the main content
        setTimeout(() => {
            landingPage.style.display = 'none';
            mainContent.style.display = 'block';
        }, 500); // 500ms matches the transition time

    } else {
        errorMessage.textContent = "Wrong password, silly! Try again.";
        // Shake animation for fun
        document.querySelector('.content-box').classList.add('shake');
        setTimeout(() => {
            document.querySelector('.content-box').classList.remove('shake');
        }, 500);
    }
}

// Optional: Allow pressing Enter to submit password
document.getElementById("password-input").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
});


/**
 * STEP 2: TIMELINE INTERACTIVITY
 */
function revealMemory(timelineItem) {
    const memory = timelineItem.querySelector('.memory-hidden');
    
    // Check if the memory is already shown
    if (memory.style.maxHeight) {
        memory.style.maxHeight = null; // Hide it
    } else {
        memory.style.maxHeight = memory.scrollHeight + "px"; // Show it
    }
}


/**
 * BONUS: SHAKE ANIMATION CSS
 * We'll add this with JavaScript to keep our CSS file clean.
 */
const style = document.createElement('style');
style.innerHTML = `
.shake {
    animation: shake 0.5s;
}
@keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    50% { transform: translateX(10px); }
    75% { transform: translateX(-10px); }
    100% { transform: translateX(0); }
}`;
document.head.appendChild(style);

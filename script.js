/**
 * SECTION 1: PASSWORD CHECK
 */
function checkPassword() {
    // --- SET YOUR PASSWORD HERE ---
    const correctPassword = "OurSecretPassword"; // Change this to your secret password!

    const passwordInput = document.getElementById("password-input").value;
    const errorMessage = document.getElementById("error-message");
    const landingPage = document.getElementById("landing-page");
    const mainContent = document.getElementById("main-content");

    if (passwordInput === correctPassword) {
        landingPage.style.opacity = '0';
        landingPage.style.transition = 'opacity 0.5s ease-out';
        setTimeout(() => {
            landingPage.style.display = 'none';
            mainContent.style.display = 'block';
        }, 500);
    } else {
        errorMessage.textContent = "Wrong password, silly! Try again.";
    }
}
document.getElementById("password-input").addEventListener("keyup", e => e.key === "Enter" && checkPassword());

/**
 * SECTION 4: MAP INTERACTIVITY
 */
function showMemory(id) {
    closePopups(); // Close any open popups first
    document.getElementById(id).classList.add('show');
}

function closePopups() {
    document.querySelectorAll('.memory-popup').forEach(popup => popup.classList.remove('show'));
}

/**
 * SECTION 5: REASONS RANDOMIZER
 */
// --- ADD YOUR REASONS HERE! ---
const reasons = [
    "because you have the kindest heart.",
    "because of the way you laugh at my silly jokes.",
    "because you always know how to make me feel better.",
    "because you're incredibly smart.",
    "because you make me feel safe and loved.",
    "because you're my best friend.",
    "for always listening to me.",
    "because you make the best coffee.",
    "because our adventures are always my favorite.",
    "for being unapologetically you."
];

function generateReason() {
    const randomIndex = Math.floor(Math.random() * reasons.length);
    document.getElementById('reason-display').textContent = reasons[randomIndex];
}

/**
 * SECTION 6: COUPON FLIP
 */
function flipCoupon(card) {
    card.classList.toggle('flipped');
}

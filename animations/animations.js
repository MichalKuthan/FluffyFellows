// Sets the default image for the pet in the game UI
export function setDefaultPetImage(pet) {
    const petAnimationDiv = document.getElementById('pet-animation');
    const defaultPetImgSrc = `/images/${pet}/${pet}.gif`; 
    petAnimationDiv.innerHTML = `<img src="${defaultPetImgSrc}" alt="Pet">`;
}

// Flag to prevent concurrent coin animations
let isCoinAnimating = false;

// Triggers the coin flip animation with guard against multiple triggers
export function popCoinFlipAnimation() {
    if (isCoinAnimating) return; // Prevent concurrent animations

    isCoinAnimating = true;
    const coinImage = document.getElementById('coin-image');
    const originalSrc = coinImage.src;
    const coinCountElement = document.getElementById('coin-count'); // Get the coin count element

    // Temporarily hide the coin count
    if (coinCountElement) coinCountElement.style.visibility = 'hidden';

    coinImage.src = '../images/icons/coinFlip.gif'; // Start flip animation

    setTimeout(() => {
        coinImage.src = originalSrc; // Revert to original after animation
        isCoinAnimating = false; // Allow new animations

        // Show the coin count again
        if (coinCountElement) coinCountElement.style.visibility = 'visible';
    }, 1500); // Duration of the coin flip animation
}


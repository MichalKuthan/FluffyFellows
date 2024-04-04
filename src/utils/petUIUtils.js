// Updates the pet's image in the game UI to reflect current actions or states
export function updatePetImage(imageFileName) {
    const petAnimationDiv = document.getElementById('pet-animation');
    // Sets the inner HTML of the pet animation div to include the new image
    petAnimationDiv.innerHTML = `<img src="/images/${imageFileName}" alt="Pet Animation">`;
}

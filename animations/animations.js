export function setDefaultPetImage(pet) {
    const petAnimationDiv = document.getElementById('pet-animation');
    const defaultPetImgSrc = `images/${pet}/${pet}.gif`; // Adjust path as needed
    petAnimationDiv.innerHTML = `<img src="${defaultPetImgSrc}" alt="Pet">`;
}

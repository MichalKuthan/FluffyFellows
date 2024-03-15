import { initPetActions } from './petActions.js';
import { startDecreasingHappiness } from './happinessMonitor.js';
import { startDecreasingToilet } from './toiletMonitor.js';
import { resetHappinessMonitor } from './happinessMonitor.js';
import { resetToiletMonitor } from './toiletMonitor.js';

document.addEventListener('DOMContentLoaded', () => {
    // Menu and buttons
    const startButton = document.getElementById('start-game');
    const exitButton = document.getElementById('exit-game');
    const mainMenu = document.getElementById('main-menu');
    const returnButton = document.querySelector('.return-button');
    
    // Pet selection and game elements
    const petDiv = document.getElementById('pet-div');
    const choosePetSection = document.getElementById('choose-pet');
    const petGameSection = document.getElementById('pet-game');
    

    // Function to show the pet selection section
    function showPetSelection() {
        mainMenu.classList.add('hidden'); // Hide the main menu
        petDiv.classList.remove('hidden'); // Show the pet selection container
        choosePetSection.classList.remove('hidden'); // Ensure the pet selection section is visible
        petGameSection.classList.add('hidden'); // Ensure the game section is hidden until a pet is chosen
    }

    // Function to mark the chosen pet as active
    function markPetAsActive(chosenPet) {
        document.querySelectorAll('.choose-pet-button').forEach(button => {
            if (button.getAttribute('data-pet') === chosenPet) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // Initialize event listeners for menu buttons
    startButton.addEventListener('click', showPetSelection);

    exitButton.addEventListener('click', () => {
        // Placeholder action for the exit button
        alert('Exiting game...');
    });

    // Added event listener for return button
    returnButton.addEventListener('click', () => {
        if (currentAudio) {
            currentAudio.pause(); // Pause the audio
            currentAudio.currentTime = 0; // Reset audio to the start
        }

        petDiv.classList.add('hidden'); // Hide the pet selection container
        petGameSection.classList.add('hidden'); // Hide the game section
        mainMenu.classList.remove('hidden'); // Show the main menu again
    });

    // Initialize pet selection buttons
    document.querySelectorAll('.choose-pet-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const chosenPet = event.target.getAttribute('data-pet');
            console.log(`Pet chosen: ${chosenPet}`);

            // Reset coin count when a new pet is chosen
            resetCoinCount();
            // Reset the monitors whenever a new pet is chosen
            resetHappinessMonitor();
            resetToiletMonitor();
            markPetAsActive(chosenPet);
            choosePetSection.classList.add('hidden');
            petGameSection.classList.remove('hidden');
            startDecreasingHappiness(); // Start decreasing happiness over time
            startDecreasingToilet(); // Start decreasing toilet over time

            //Showing default image of the pet
            const petAnimationDiv = document.getElementById('pet-animation');
        if (chosenPet === 'cat') { // Check if the chosen pet is a cat to show the default cat image
            petAnimationDiv.innerHTML = `<img src="/images/cat/defaultCat.gif" alt="Cat">`;
        } else if (chosenPet === 'dog') { // an else if condition for dogs or other future pets
            petAnimationDiv.innerHTML = `<img src="/images/dog/defaultDog.gif" alt="Dog">`;
        }
        });
    });

    // Function to reset and update coin count
function resetCoinCount() {
    coinCount = 0; // Reset the count
    document.getElementById('coin-count').textContent = coinCount; // Update the display
}

    // Call initPetActions once to initialize pet action buttons
    initPetActions();
});

// Initial coin count
let coinCount = 0;

// Function to increment and update coin count
function incrementCoinCount() {
    coinCount++; // Increment the count
    document.getElementById('coin-count').textContent = coinCount; // Update the display
}

// Assuming you already have a setup similar to this for handling pet actions
document.querySelectorAll('.pet-action').forEach(button => {
    button.addEventListener('click', (event) => {
        // Your existing action handling logic
        // ...

        // Call the function to increment and update the coin count
        incrementCoinCount();
    });


    
});

let currentAudio = null;

export function playSound(soundFileName) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(`sounds/${soundFileName}`);
    currentAudio.loop = true;
    let playPromise = currentAudio.play();
    if (playPromise !== undefined) {
        playPromise.then(_ => {}).catch(error => {
            console.log("Playback was prevented. Trying again...");
        });
    }
}
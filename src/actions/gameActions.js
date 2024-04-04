import { resetHappinessMonitor, startDecreasingHappiness } from '../gameStates/happinessMonitor.js'
import { resetToiletMonitor, startDecreasingToilet } from '../gameStates/toiletMonitor.js';
import { resetCoinCount } from '../gameStates/coinCount.js';
import { setDefaultPetImage } from '/animations/animations.js'; 
import petEffects from '../actions/petEffects.js';

// Initializes the game, setting up the pet and player environment
export function initializeGame() {
    // Fetch player and pet names from input fields
    const playerName = document.getElementById('player-name').value.trim();
    const petName = document.getElementById('pet-name').value.trim();    
    // Log game start details and set up game state
    console.log(`Game starting with ${playerName}'s pet ${petName} (${window.currentPet})`);
    setDefaultPetImage(window.currentPet); // Set the initial pet image
    resetGameStates(); // Reset game states for a new game
    // Update UI to reflect game start
    document.getElementById('choose-pet').classList.add('hidden');
    document.getElementById('pet-game').classList.remove('hidden');
}

// Resets game state variables and starts decrement monitors
export function resetGameStates() {
    resetCoinCount(); // Resets coin count to initial value
    resetHappinessMonitor(); // Resets pet's happiness level
    resetToiletMonitor(); // Resets pet's toilet needs
    // Start decreasing happiness and toilet levels over time
    startDecreasingHappiness();
    startDecreasingToilet();
}

// Updates Pet Action buttons image according to the pet type chosen
export function updateActionButtonsForPet(petType) {
    const petActions = petEffects[petType]?.actionImages || {};
    const buttons = document.querySelectorAll('.pet-action');
    
    buttons.forEach((button, index) => {
        const action = button.getAttribute('data-action');
        
        if (petActions[action]) {
            const imagePath = `/images/icons/${petActions[action]}`;
           
            button.querySelector('img').src = imagePath;
        } else {
            
        }
    });
}




import { resetGameStates, initializeGame } from '../actions/gameActions.js';
import { hideLoadGameControls, displayGameView } from '../utils/uiUtils.js';
import { stopBackgroundMusic, startBackgroundMusic } from '../utils/soundUtils.js';
import { updateActionButtonsForPet } from '../actions/gameActions.js';

// Configures event listeners for game setup controls
export function setupGameSetupListeners(savedGamesList, loadSelectedGameButton) {
    // Buttons for initiating new game and confirming pet selection
    const newGameButton = document.getElementById('new-game');
    const confirmSelectionButton = document.getElementById('confirm-selection');
    
    // Start a new game: play music, reset states, and update UI visibility
    newGameButton.addEventListener('click', () => {
        startBackgroundMusic(); // Start playing the game background music
        resetGameStates(); // Reset all game states to initial values
        hideLoadGameControls(savedGamesList, loadSelectedGameButton); // Hide game loading controls
        // Update UI to show the pet selection view
        document.getElementById('main-menu').classList.add('hidden');
        document.getElementById('pet-div').classList.remove('hidden');
        document.getElementById('choose-pet').classList.remove('hidden');
        document.getElementById('pet-game').classList.add('hidden');
        document.getElementById('return-game').classList.add('hidden');
        document.getElementById('menu-divider').classList.add('hidden');
    });

    // Confirm pet selection and start game if validation passes
    confirmSelectionButton.addEventListener('click', () => {
        // Ensure player and pet names are entered
        const playerName = document.getElementById('player-name').value.trim();
        const petName = document.getElementById('pet-name').value.trim();
        
        // Validate pet selection and name entries before game starts
        if (!window.currentPet || playerName === '' || petName === '') {
            alert(!window.currentPet ? 'Please select a pet first!' : 'Please fill in both your name and your pet\'s name.');
            return; // Prevent further action until requirements are met
        }
        updateActionButtonsForPet(window.currentPet);
        stopBackgroundMusic(); // Stop the background music as game initializes
        initializeGame(); // Initialize game state with selected settings
        displayGameView(); // Show the game view to the player
    });
    
}

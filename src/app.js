import { initPetActions } from './actions/petActions.js';
import { setupGameSetupListeners } from './eventListeners/gameSetupListeners.js';
import { setupGameControlListeners } from './eventListeners/gameControlListeners.js';
import { setupUIListeners } from './eventListeners/uiListeners.js'; 

// Sets up initial game configurations and event listeners once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const savedGamesList = document.getElementById('saved-games-list');
    const loadSelectedGameButton = document.getElementById('load-selected-game');

    // Call function to initialize pet-related actions and interactions
    initPetActions();

    // Establish game setup and control listeners for managing game states and UI interactions
    setupGameSetupListeners(savedGamesList, loadSelectedGameButton);
    setupGameControlListeners(savedGamesList, loadSelectedGameButton);
    setupUIListeners(); // Additional setup for UI-specific button interactions
});


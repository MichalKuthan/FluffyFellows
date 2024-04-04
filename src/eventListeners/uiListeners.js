import { stopBackgroundMusic, stopSound } from '../utils/soundUtils.js';
import { startBackgroundMusic } from '../utils/soundUtils.js';

// Sets up UI listeners for navigation between game and menu
export function setupUIListeners() {
    // Button to transition from game view to main menu
    const fromGameToMenuButton = document.querySelector('.menu-button');
    // Main menu and its components
    const mainMenu = document.getElementById('main-menu');
    const menuDivider = document.getElementById('menu-divider');
    // Button to return to the game from the menu
    const returnToGameButton = document.getElementById('return-game');
    // Game area div
    const petDiv = document.getElementById('pet-div');
    // Button within the game to go back to the main menu
    const backToMenuButton = document.getElementById('back-to-menu');

    // Transition from game view to main menu
    fromGameToMenuButton.addEventListener('click', () => {
        stopSound(); // Stops any ongoing sound effects
        startBackgroundMusic(); // Starts playing background music
        // Adjust UI elements visibility
        mainMenu.classList.remove('hidden');
        returnToGameButton.classList.remove('hidden');
        menuDivider.classList.remove('hidden');
        petDiv.classList.add('hidden');
    });

    // Handle the return to game action
    returnToGameButton.addEventListener('click', () => {
        stopBackgroundMusic(); // Stops the background music
        // Adjust UI elements visibility for returning to game
        mainMenu.classList.add('hidden');
        returnToGameButton.classList.add('hidden');
        menuDivider.classList.add('hidden');
        petDiv.classList.remove('hidden');
    });

    // Transition back to the main menu from within the game
    backToMenuButton.addEventListener('click', () => {
        // Adjust UI elements visibility for going back to menu
        mainMenu.classList.remove('hidden');
        menuDivider.classList.add('hidden');
        petDiv.classList.add('hidden');
        document.getElementById('choose-pet').classList.add('hidden');
    });
}

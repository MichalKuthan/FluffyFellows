import { saveGameState} from '../persistence/saveGame.js'
import { fetchAndDisplaySavedGames } from '../backend/gameStateManager.js';
import { loadGameState } from '../persistence/loadGame.js';
import { hideLoadGameControls } from '../utils/uiUtils.js';
import { stopBackgroundMusic } from '../utils/soundUtils.js';

// Sets up listeners for game control buttons: Save, Load, and Exit
export function setupGameControlListeners(savedGamesList, loadSelectedGameButton) {
    // DOM element references for control buttons
    const saveGameButton = document.getElementById('save-game');
    const loadGameButton = document.getElementById('load-game');
    const exitGameButton = document.getElementById('exit-game');

    // Save current game state
    saveGameButton.addEventListener('click', () => {
        saveGameState(); // Trigger save game functionality
        hideLoadGameControls(savedGamesList, loadSelectedGameButton); // Hide load game UI components
    });

    // Prepare to load a game
    loadGameButton.addEventListener('click', async () => {
        savedGamesList.style.display = 'block';
        loadSelectedGameButton.style.display = 'inline-block';
        await fetchAndDisplaySavedGames(); // Fetch and display saved games
        savedGamesList.classList.remove('hidden');
        loadSelectedGameButton.classList.remove('hidden');
    });

    // Load the selected game state
    loadSelectedGameButton.addEventListener('click', async () => {
        stopBackgroundMusic(); // Stop any playing background music
        const selectedGameId = savedGamesList.value; // Get the ID of the selected game
        if (selectedGameId) {
            await loadGameState(selectedGameId); // Load the selected game state
        } else {
            alert("Please select a game to load."); // Prompt if no game is selected
        }
    });

    // Handle game exit
    exitGameButton.addEventListener('click', () => {
        alert('Exiting game...'); // Notify user (placeholder for exit logic)
        // Implement additional exit logic here
    });
}

// Switches the UI to display the game view, hiding menu and load options
export function displayGameView() {
    // Hide menu and game setup elements
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('choose-pet').classList.add('hidden');
    document.getElementById('saved-games-list').classList.add('hidden');
    document.getElementById('load-selected-game').classList.add('hidden');
    
    // Show the game and pet display elements
    document.getElementById('pet-div').classList.remove('hidden');
    document.getElementById('pet-game').classList.remove('hidden');
}

// Hides the UI controls related to loading a game
export function hideLoadGameControls(savedGamesList, loadSelectedGameButton) {
    // Directly modify style to hide elements
    savedGamesList.style.display = 'none';
    loadSelectedGameButton.style.display = 'none';
}

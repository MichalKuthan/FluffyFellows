// Asynchronously fetches and displays saved games from the server
export async function fetchAndDisplaySavedGames() {
    try {
        // Attempt to fetch the list of saved games
        const response = await fetch('http://localhost:3000/games');
        if (!response.ok) {
            // If response is not OK, throw an error
            throw new Error('Failed to fetch saved games');
        }
        // Parse the JSON response
        const savedGames = await response.json();
        // Display the saved games in the UI
        displaySavedGames(savedGames);
    } catch (error) {
        // Log any errors to the console
        console.error('Error fetching saved games:', error);
    }
}

// Displays saved games in a dropdown list
function displaySavedGames(savedGames) {
    const gamesList = document.getElementById('saved-games-list');
    gamesList.innerHTML = ''; // Clear existing entries in the dropdown
    savedGames.forEach(game => {
        // Create a new dropdown option for each saved game
        const option = document.createElement('option');
        option.value = game._id; // Set the option value to the game's unique identifier
        // Set the option text to display the username and pet name
        option.textContent = `${game.username} - ${game.petname}`; 
        gamesList.appendChild(option); // Add the option to the dropdown list
    });
}

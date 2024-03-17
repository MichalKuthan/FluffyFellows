import { initPetActions } from './petActions.js';
import { startDecreasingHappiness } from './happinessMonitor.js';
import { startDecreasingToilet } from './toiletMonitor.js';
import { resetHappinessMonitor } from './happinessMonitor.js';
import { resetToiletMonitor } from './toiletMonitor.js';
import { saveGameState } from './saveGame.js';
import { loadGameState } from './loadGame.js';


document.addEventListener('DOMContentLoaded', () => {
     // Ensure choose-pet is hidden at start
     document.getElementById('choose-pet').classList.add('hidden');
    // Menu and buttons
    const mainMenu = document.getElementById('main-menu');
    // Start Button
    const startButton = document.getElementById('start-game');
    startButton.addEventListener('click', () => {
        // Show pet selection, hide main menu
        showPetSelection();
    });
    
    //Save button
    const saveButton = document.getElementById('save-game');
    saveButton.addEventListener('click', async () => {
        const gameState = {
            // Your game state here. This should be dynamically generated from your game's current state
            username: "user1",
            petname: currentPet,
            state: {
                coins: parseInt(document.getElementById('coin-count').textContent, 10),
                inventory: ["item1", "item2"] // Example inventory items
            }
        };

        try {
            await saveGameState(gameState);
            alert('Game saved successfully!');
        } catch (error) {
            console.error('Error saving game:', error);
            alert('Failed to save game.');
        }
    });
    
    //Load Button
    const loadButton = document.getElementById('load-game');
    loadButton.addEventListener('click', async () => {
        const username = "user1"; // This should be dynamically set, perhaps through user input

        try {
            const gameState = await loadGameState(username);
            console.log(gameState);
            alert('Game loaded successfully!');
        } catch (error) {
            console.error('Error loading game:', error);
            alert('Failed to load game.');
        }
    });
    const exitButton = document.getElementById('exit-game');
    exitButton.addEventListener('click', () => {
        // Placeholder action for the exit button
        alert('Exiting game...');
    });

    const returnButton = document.querySelector('.return-button');
          returnButton.addEventListener('click', () => {
        if (currentAudio) {
            currentAudio.pause(); // Pause the audio
            currentAudio.currentTime = 0; // Reset audio to the start
        }

        petDiv.classList.add('hidden'); // Hide the pet selection container
        petGameSection.classList.add('hidden'); // Hide the game section
        mainMenu.classList.remove('hidden'); // Show the main menu again
    
    });

    
    
    // Pet selection and game elements
    const petDiv = document.getElementById('pet-div');
    const choosePetSection = document.getElementById('choose-pet');
    const petGameSection = document.getElementById('pet-game');

     // Placeholder for game state
     let currentPet = 'cat'; // This should be dynamic based on user selection

    // Function to show the pet selection section
    function showPetSelection() {
        mainMenu.classList.add('hidden'); // Hide the main menu
        petDiv.classList.remove('hidden'); // Show the pet selection container
        choosePetSection.classList.remove('hidden'); // Ensure the pet selection section is visible
        petGameSection.classList.add('hidden'); // Ensure the game section is hidden until a pet is chosen
    }

    // Initialize other game functionalities
    initPetActions();

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

   
});
 // Call initPetActions once to initialize pet action buttons
 initPetActions();

// Initial coin count
let coinCount = 0;

// Function to increment and update coin count
function incrementCoinCount() {
    const coinCountElement = document.getElementById('coin-count');
    const coinImage = document.getElementById('coin-image');

    // Hide the coin count and change the coin image to the animation
    coinCountElement.style.display = 'none';
    coinImage.src = '/images/icons/coinFlip.gif'; // Path to your animation

    setTimeout(() => {
        // Increment the coin count
        let currentCount = parseInt(coinCountElement.textContent, 10);
        coinCountElement.textContent = currentCount + 1;

        // After 1.5 seconds, revert to the original coin image and show the updated count
        coinImage.src = '/images/icons/coin.png'; // Path to your static coin image
        coinCountElement.style.display = ''; // Show the coin count again
    }, 1500); // 1.5 seconds delay
}



document.querySelectorAll('.pet-action').forEach(button => {
    button.addEventListener('click', (event) => {
       
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
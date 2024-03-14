import { initPetActions } from './petActions.js';

document.addEventListener('DOMContentLoaded', () => {
    // Menu and buttons
    const startButton = document.getElementById('start-game');
    const exitButton = document.getElementById('exit-game');
    const mainMenu = document.getElementById('main-menu');
    
    // Pet selection and game elements
    const petDiv = document.getElementById('pet-div'); // Container for pet selection and game
    const choosePetSection = document.getElementById('choose-pet'); // Section for choosing a pet, assuming it's part of petDiv
    const petGameSection = document.getElementById('pet-game'); // The actual game section, initially hidden
    
    // Function to show the pet selection section
    function showPetSelection() {
        mainMenu.classList.add('hidden'); // Hide the main menu
        petDiv.classList.remove('hidden'); // Show the pet selection container
        choosePetSection.classList.remove('hidden'); // Ensure the pet selection section is visible
        petGameSection.classList.add('hidden'); // Ensure the game section is hidden until a pet is chosen
    }

    // Initialize event listeners for menu buttons
    startButton.addEventListener('click', showPetSelection);
    exitButton.addEventListener('click', () => {
        alert('Exiting game...'); // Placeholder action for the exit button
    });

    // Initialize pet selection buttons
    document.querySelectorAll('.choose-pet-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const chosenPet = event.target.getAttribute('data-pet');
            console.log(`Pet chosen: ${chosenPet}`);
    
            // Assuming there's a way to mark the chosen pet as active
            markPetAsActive(chosenPet);
    
            choosePetSection.classList.add('hidden');
            petGameSection.classList.remove('hidden');
        });
        initPetActions();
    
    });

    function markPetAsActive(chosenPet) {
        // This example assumes each pet button has a corresponding data-pet attribute
        document.querySelectorAll('.choose-pet-button').forEach(button => {
            if(button.getAttribute('data-pet') === chosenPet) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // More game initialization code can go here
})


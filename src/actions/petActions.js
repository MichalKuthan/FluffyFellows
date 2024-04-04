import petEffects from '../actions/petEffects.js';
import { updatePetImage } from '../utils/petUIUtils.js';
import { updateHappiness } from '../gameStates/happinessMonitor.js';
import { updateToilet } from '../gameStates/toiletMonitor.js';
import { playSound } from '../utils/soundUtils.js';
import { incrementCoinCount } from '../gameStates/coinCount.js';
import { popCoinFlipAnimation } from '../../animations/animations.js';

// Handler for pet action button clicks
function onPetActionButtonClick(event) {
    const actionButton = event.target.closest('.pet-action');
    const action = actionButton ? actionButton.getAttribute('data-action') : null;
    if (action) {
        handleAction(action); // Process the action
    } else {
        console.log(`Action ${action} is not recognized.`);
    }
}

// Initializes event listeners for pet selection and actions
export function initPetActions() {
    document.querySelectorAll('.choose-pet-button').forEach(button => {
        button.addEventListener('click', function(event) {
            const buttonElement = event.target.closest('.choose-pet-button');
            if (!buttonElement.classList.contains('active')) {
                document.querySelectorAll('.choose-pet-button').forEach(btn => btn.classList.remove('active'));
                buttonElement.classList.add('active'); // Mark as active
            }
            window.currentPet = buttonElement.getAttribute('data-pet'); // Set the current pet
            console.log(`Pet chosen: ${window.currentPet}`);
        });
    });
    // Attach action button event listeners
    document.querySelectorAll('.pet-action').forEach(button => {
        button.addEventListener('click', onPetActionButtonClick);
    });
}

document.addEventListener('DOMContentLoaded', initPetActions); // Initialize actions on document load

// Handles the effect of each pet action
function handleAction(actionType) {
    if (!window.currentPet || !petEffects[window.currentPet]) {
        console.log('No pet selected or pet effects not defined');
        return;
    }

    // Retrieve effects based on the current pet and action
    const effect = petEffects[window.currentPet];
    // Apply changes based on action
    if (effect.happinessChange[actionType] !== undefined) {
        updateHappiness(effect.happinessChange[actionType]);
    }
    if (effect.toiletChange[actionType] !== undefined) {
        updateToilet(effect.toiletChange[actionType]);
    }
    if (effect.coinChange[actionType] !== undefined) { 
        incrementCoinCount(effect.coinChange[actionType]); // Increment coin count and trigger animation
        popCoinFlipAnimation(); // Trigger coin flip animation
    }
    if (effect.imageChange && effect.imageChange[actionType]) {
        updatePetImage(effect.imageChange[actionType]); // Update pet image for specific action
    }
    if (effect.soundFile && effect.soundFile[actionType]) {
        playSound(effect.soundFile[actionType]); // Play action-specific sound
    }
}

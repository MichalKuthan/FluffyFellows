import { resetHappinessMonitor, startDecreasingHappiness } from '/gameStates/happinessMonitor.js';
import { resetToiletMonitor, startDecreasingToilet } from '/gameStates/toiletMonitor.js';
import { resetCoinCount } from '/gameStates/coinCount.js';
import { setDefaultPetImage } from '/animations/animations.js'; 

export function initializeGame() {
    const playerName = document.getElementById('player-name').value.trim();
    const petName = document.getElementById('pet-name').value.trim();
    // Assuming currentPet is globally accessible or managed within gameStates
    if (!window.currentPet || playerName === '' || petName === '') {
        alert('Please select a pet and enter names.');
        return;
    }
    console.log(`Game starting with ${playerName}'s pet ${petName} (${window.currentPet})`);
    setDefaultPetImage(window.currentPet);
    resetGameStates();
    document.getElementById('choose-pet').classList.add('hidden');
    document.getElementById('pet-game').classList.remove('hidden');
}

export function resetGameStates() {
    resetCoinCount();
    resetHappinessMonitor();
    resetToiletMonitor();
    startDecreasingHappiness();
    startDecreasingToilet();
}



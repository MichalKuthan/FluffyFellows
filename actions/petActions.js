import { updateHappiness } from '/gameStates/happinessMonitor.js';
import { updateToilet } from '/gameStates/toiletMonitor.js';
import { playSound } from '/utils/util.js';
import { incrementCoinCount } from '/gameStates/coinCount.js'; // Make sure this function exists and is exported from coinCount.js


const petEffects = {
    cat: {
        happinessChange: { milk: 2, food: 2, wash: 1, play1: 2, play2: 2, cuddle: 3, dance: 3, sleep: 1, toilet: -2 },
        toiletChange: { milk: -3, food: -3, wash: -2, play1: -1, play2: -1, cuddle: -1, dance: -1, sleep: -2, toilet: 5 },
        coinChange: { milk: 1, food: 1, wash: 1, play1: 1, play2: 1, cuddle: 1, dance: 1, sleep: 1, toilet: 1,},
        imageChange: {
            milk: "cat/milk.gif",
            food: "cat/food.gif",
            wash: "cat/wash.gif",
            play1: "cat/play1.gif",
            play2: "cat/play2.gif",
            cuddle: "cat/cuddle.gif",
            dance: "cat/dance.gif",
            sleep: "cat/sleep.gif",
            toilet: "cat/toilet.gif",
        },
        soundFile: {
            milk: "cat/milk.wav",
            food: "cat/food.wav",
            wash: "cat/wash.wav",
            play1: "cat/play1.wav",
            play2: "cat/play2.mp3",
            cuddle: "cat/cuddle.wav",
            dance: "cat/dance.mp3",
            sleep: "cat/sleep.wav",
            toilet: "cat/toilet.wav",
        }
    },
    dog: {
        happinessChange: { milk: 2, food: 2, wash: 1, play1: 2, play2: 2, cuddle: 3, dance: 3, sleep: 1, toilet: -2 },
        toiletChange: { milk: -3, food: -3, wash: -2, play1: -1, play2: -1, cuddle: -1, dance: -1, sleep: -2, toilet: 5 },
        coinChange: { milk: 1, food: 1, wash: 1, play1: 1, play2: 1, cuddle: 1, dance: 1, sleep: 1, toilet: 1,},
        imageChange: {
            milk: "/dog/milk.gif",
            food: "/dog/food.gif",
            wash: "/dog/wash.gif",
            play1: "/dog/play1.gif",
            play2: "/dog/play2.gif",
            cuddle: "/dog/cuddle.gif",
            dance: "/dog/dance.gif",
            sleep: "/dog/sleep.gif",
            toilet: "/dog/toilet.gif",
        },
        soundFile: {
            milk: "dog/milk.wav",
            food: "dog/food.wav",
            wash: "dog/wash.wav",
            play1: "dog/play1.wav",
            play2: "dog/play2.mp3",
            cuddle: "dog/cuddle.mp3",
            dance: "dog/dance.mp3",
            sleep: "dog/sleep.wav",
            toilet: "dog/toilet.wav",
        }
    },
    // Additional pets and their effects could be added here.
};

// Named function for handling button clicks
function onPetActionButtonClick(event) {
    const actionButton = event.target.closest('.pet-action');
    const action = actionButton ? actionButton.getAttribute('data-action') : null;
    if (action) {
        handleAction(action);
    } else {
        console.log(`Action ${action} is not recognized.`);
    }
}

export function initPetActions() {
    document.querySelectorAll('.choose-pet-button').forEach(button => {
        button.addEventListener('click', event => {
            // Remove 'active' class from all buttons
            document.querySelectorAll('.choose-pet-button').forEach(btn => btn.classList.remove('active'));

            // Mark the selected button as 'active'
            const selectedButton = event.target.closest('.choose-pet-button');
            selectedButton.classList.add('active');

            // Set the global currentPet to the selected pet's type
            window.currentPet = selectedButton.getAttribute('data-pet');
            console.log(`Pet chosen: ${window.currentPet}`);
        });
    });

    document.querySelectorAll('.pet-action').forEach(button => {
        button.removeEventListener('click', onPetActionButtonClick); // This line might not be necessary if you're not dynamically adding/removing buttons
        button.addEventListener('click', onPetActionButtonClick);
    });
}

function handleAction(actionType) {
    const currentPet = window.currentPet; // Use the global currentPet
    if (!currentPet || !petEffects[currentPet]) {
        console.log('No pet selected or pet effects not defined');
        return;
    }

    const effect = petEffects[currentPet];
    const happinessChange = effect.happinessChange[actionType];
    const toiletChange = effect.toiletChange[actionType];
    const coinChange = effect.coinChange[actionType];

    if (happinessChange !== undefined) {
        updateHappiness(happinessChange);
    }
    if (toiletChange !== undefined) {
        updateToilet(toiletChange);
    }
    if (coinChange !== undefined) { 
        incrementCoinCount(coinChange); 
    }
    if (effect.imageChange && effect.imageChange[actionType]) {
        updatePetImage(effect.imageChange[actionType]);
    }
    if (effect.soundFile && effect.soundFile[actionType]) {
        playSound(effect.soundFile[actionType]);
    }
}

function updatePetImage(imageFileName) {
    const petAnimationDiv = document.getElementById('pet-animation');
    const currentPet = getCurrentPet();
    petAnimationDiv.innerHTML = `<img src="images/${imageFileName}" alt="Pet Animation">`;
}

function getCurrentPet() {
    const activePetButton = document.querySelector('.choose-pet-button.active');
    return activePetButton ? activePetButton.getAttribute('data-pet') : null;
}

function confirmPetSelection() {
    const currentPet = getCurrentPet();
    if (!currentPet) {
        alert('Please select a pet first!');
        return;
    }
    // Logic to proceed with the game initialization after pet selection
    // This may involve calling another function to initialize the game state with the selected pet
    console.log(`Pet confirmed: ${currentPet}`);
    // Initialize or update the game state based on the selected pet here
}
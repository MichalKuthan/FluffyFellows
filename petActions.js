import { updateHappiness } from './happinessMonitor.js'
import { updateToilet } from './toiletMonitor.js'

const petEffects = {
    cat: {
        happinessChange: { milk: 2, food: 2, wash: 1, play1: 2, play2: 2, cuddle: 3, dance: 3, sleep: 1, toilet: -2},
        toiletChange: { milk: -3, food: -3, wash: -2, play1: -1, play2: -1, cuddle: -1, dance: -1, sleep: -2, toilet: 5 },
        imageChange: {
            milk: "/cat/milk.gif",
            food: "/cat/food.gif",
            wash: "/cat/wash.gif",
            play1: "/cat/play1.gif",
            play2: "/cat/play2.gif",
            cuddle: "/cat/cuddle.gif",
            dance: "/cat/dance.gif",
            sleep: "/cat/sleep.gif",
            toilet: "/cat/toilet.gif",

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
        happinessChange: { milk: 2, food: 2, wash: 1, play1: 2, play2: 2, cuddle: 3, dance: 3, sleep: 1, toilet: -2},
        toiletChange: { milk: -3, food: -3, wash: -2, play1: -1, play2: -1, cuddle: -1, dance: -1, sleep: -2, toilet: 5 },
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
            milk: "/dog/milk.wav",
            food: "/dog/food.wav",
            wash: "/dog/wash.wav",
            play1: "/dog/play1.wav",
            play2: "/dog/play2.mp3",
            cuddle: "/dog/cuddle.mp3",
            dance: "/dog/dance.mp3",
            sleep: "/dog/sleep.wav",
            toilet: "/dog/toilet.wav",
        }
    },
    // Add more pets and their effects for different actions as needed
};


export function initPetActions() {
    document.querySelectorAll('.pet-action').forEach(button => {
        button.addEventListener('click', (event) => {
            const action = event.target.getAttribute('data-action');
            switch(action) {
                case 'milk':
                case 'food':
                case 'wash': // Add your new action here
                case 'play1':
                case 'play2':
                case 'cuddle':
                case 'dance':
                case 'sleep':
                case 'toilet':
                    handleAction(action);
                    break;
                // Handle additional actions as needed
                default:
                    console.log(`Action ${action} is not recognized.`);
            }
        });
    });
}

    //This function will take the action type as an argument and apply the effects accordingly.
function handleAction(actionType) {
    const currentPet = getCurrentPet(); 
    if (!currentPet || !petEffects[currentPet]) {
        console.log('No pet selected or pet effects not defined');
        return;
    }

    // Get the effects of the action for the current pet
    const effect = petEffects[currentPet];
    const happinessChange = effect.happinessChange[actionType];
    const toiletChange = effect.toiletChange[actionType];

    // Handle Happiness monitor change
    if (happinessChange !== undefined) {
        updateHappiness(happinessChange);
    }
    // Handle toilet monitor change
    if (toiletChange !== undefined) {
        updateToilet(toiletChange);
    }
    // Handle Image Change
    if (effect.imageChange && effect.imageChange[actionType]) {
        updatePetImage(effect.imageChange[actionType]);
    }
    // Handle Sound
    if (effect.soundFile && effect.soundFile[actionType]) {
        playSound(effect.soundFile[actionType]);
    }
}

function updatePetImage(imageFileName) {
    const petAnimationDiv = document.getElementById('pet-animation');
    petAnimationDiv.innerHTML = `<img src="images/${imageFileName}" alt="Pet Animation">`;
}

// Store the currently playing audio
let currentAudio = null;
let playPromise = null;

function playSound(soundFileName) {
    // If there's an audio currently playing, stop it
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset the audio playback to the start
    }

    // Initialize a new Audio object and play the specified sound file
    currentAudio = new Audio(`sounds/${soundFileName}`);
    currentAudio.loop = true;
    playPromise = currentAudio.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
            // Automatic playback started!
            // Show playing UI.
        })
        .catch(error => {
            // Auto-play was prevented
            // Show paused UI.
            console.log("Playback was prevented. Trying again...");
            // Optionally, try to play again or show some UI to the user to start playback
        });
    }

}

function getCurrentPet() {
    const activePetButton = document.querySelector('.choose-pet-button.active');
    return activePetButton ? activePetButton.getAttribute('data-pet') : null;
}







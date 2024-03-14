const petEffects = {
    cat: {
        happinessChange: { milk: 2, food: 3 },
        toiletChange: { milk: 1, food: 2 },
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

        }
    },
    dog: {
        happinessChange: { milk: 3, food: 2 },
        toiletChange: { milk: -1, food: 1 },
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

function playSound(soundFileName) {
    // If there's an audio currently playing, stop it
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset the audio playback to the start
    }

    // Initialize a new Audio object and play the specified sound file
    currentAudio = new Audio(`sounds/${soundFileName}`);
    currentAudio.loop = true;
    currentAudio.play();
}

function getCurrentPet() {
    const activePetButton = document.querySelector('.choose-pet-button.active');
    return activePetButton ? activePetButton.getAttribute('data-pet') : null;
}



function updateHappiness(change) {
    const happinessMonitor = document.getElementById('happiness-monitor').querySelector('progress');
    happinessMonitor.value = Math.min(Math.max(happinessMonitor.value + change, 0), 20); // Ensure value is within bounds
}

function updateToilet(change) {
    const toiletMonitor = document.getElementById('toilet-monitor').querySelector('progress');
    toiletMonitor.value = Math.min(Math.max(toiletMonitor.value + change, 0), 20); // Ensure value is within bounds
}

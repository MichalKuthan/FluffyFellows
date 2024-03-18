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

export function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null; // Reset the currentAudio
    }
}
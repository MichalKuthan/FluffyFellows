let currentAudio = null;

// Plays a sound file, allowing for a single sound to be played at a time
export function playSound(soundFileName) {
    // Specific logic for 'dance' action to select a random file
    if (soundFileName === 'dance') {
        const danceSoundIndex = Math.floor(Math.random() * 5) + 1;
        soundFileName = `dance${danceSoundIndex}.mp3`; // Adjust path as necessary
    }
    // If there's already a sound playing, stop it before starting a new one
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    // Initialize a new Audio object and attempt to play it
    currentAudio = new Audio(`/sounds/dance_songs/${soundFileName}`);
    currentAudio.loop = true; // Enable looping of the sound
    let playPromise = currentAudio.play();
    // Handle the promise returned by the play method
    if (playPromise !== undefined) {
        playPromise.then(_ => {}).catch(error => {
            console.log("Playback was prevented. Trying again...");
            // Playback prevention handling can be extended here
        });
    }
}

// Stops any currently playing sound and resets the audio state
export function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null; // Clear the current audio to allow new sounds to play
    }
}

// Starts playing the background music defined in the HTML
export function startBackgroundMusic() {
    const bgMusicElement = document.getElementById('gameMusic');
    if (bgMusicElement) {
        bgMusicElement.play().then(() => {
            console.log('Background music started playing.');
        }).catch((error) => {
            console.error('Error playing background music:', error);
        });
    }
}

// Pauses the background music if it is currently playing
export function stopBackgroundMusic() {
    const bgMusicElement = document.getElementById('gameMusic');
    if (bgMusicElement && !bgMusicElement.paused) {
        bgMusicElement.pause();
    }
}

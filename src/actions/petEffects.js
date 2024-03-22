
const petEffects = {
    cat: {
        happinessChange: { milk: 2, food: 2, wash: 1, play1: 2, play2: 2, cuddle: 3, dance: 3, sleep: 1, toilet: -1 },
        toiletChange: { milk: -3, food: -3, wash: -2, play1: -1, play2: -1, cuddle: -1, dance: -1, sleep: -2, toilet: 5 },
        coinChange: { milk: 1, food: 1, wash: 1, play1: 1, play2: 1, cuddle: 1, dance: 1, sleep: 1, toilet: 1,},
        imageChange: {
            milk: "../images/cat/milk.gif",
            food: "../images/cat/food.gif",
            wash: "../images/cat/wash.gif",
            play1: "../images/cat/play1.gif",
            play2: "../images/cat/play2.gif",
            cuddle: "../images/cat/cuddle.gif",
            dance: "../images/cat/dance.gif",
            sleep: "../images/cat/sleep.gif",
            toilet: "../images/cat/toilet.gif",
        },
        actionImages: {
            milk: "milk.png", 
            food: "food.png",
            wash: "wash.png",
            play1: "play1.png",
            play2: "play2.png",
            cuddle: "cuddle.png",
            dance: "dance.png",
            sleep: "sleep.png",
            toilet: "toilet.png"
        },
        soundFile: {
            milk: "../cat/milk.wav",
            food: "../cat/food.wav",
            wash: "../cat/wash.wav",
            play1: "../cat/play1.wav",
            play2: "../cat/play2.mp3",
            cuddle: "../cat/cuddle.wav",
            dance: "dance",
            sleep: "../cat/sleep.wav",
            toilet: "../cat/toilet.wav",
        }
    },
    dog: {
        happinessChange: { milk: 2, food: 2, wash: 1, play1: 2, play2: 2, cuddle: 3, dance: 3, sleep: 1, toilet: -1 },
        toiletChange: { milk: -3, food: -3, wash: -2, play1: -1, play2: -1, cuddle: -1, dance: -1, sleep: -2, toilet: 5 },
        coinChange: { milk: 1, food: 1, wash: 1, play1: 1, play2: 1, cuddle: 1, dance: 1, sleep: 1, toilet: 1,},
        imageChange: {
            milk: "../images/dog/milk.gif",
            food: "../images/dog/food.gif",
            wash: "../images/dog/wash.gif",
            play1: "../images/dog/play1.gif",
            play2: "../images/dog/play2.gif",
            cuddle: "../images/dog/cuddle.gif",
            dance: "../images/dog/dance.gif",
            sleep: "../images/dog/sleep.gif",
            toilet: "../images/dog/toilet.gif",
        },
        actionImages: {
            milk: "milk.png", 
            food: "food.png",
            wash: "wash.png",
            play1: "dog_toy.png",
            play2: "play2.png",
            cuddle: "cuddle.png",
            dance: "dance.png",
            sleep: "dog_sleep.png",
            toilet: "toilet.png"
        },
        soundFile: {
            milk: "../dog/milk.wav",
            food: "../dog/food.wav",
            wash: "../dog/wash.wav",
            play1: "../dog/play1.wav",
            play2: "../dog/play2.mp3",
            cuddle: "../dog/cuddle.mp3",
            dance: "dance",
            sleep: "../dog/sleep.wav",
            toilet: "../dog/toilet.wav",
        }
    },
    // Additional pets and their effects could be added here.
};

export default petEffects;
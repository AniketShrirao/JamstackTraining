const vibes = [
    "....and you are awesome",
    "....and have a wonderful day",
    "....and you are best",
    "....and you are handsome",
    "....and you are smart"
];

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector(".vibe").append(vibe);
console.log("Hello World");

window.onload = init;

var textfield;
var output;
var submit;
var context;
var bufferLoader;
var arrayNotes = [];

function init() {
    try {
        context = new AudioContext();
    }
    catch (e) {
        alert("Web Audio API is not supported in this browser");
    }

    // Start loading the sounds
    bufferLoader = new BufferLoader(
        context,
        [
            "sounds/A.wav",
            "sounds/B.wav",
            "sounds/C.wav",
            "sounds/D.wav",
            "sounds/E.wav",
            "sounds/F.wav",
            "sounds/G.wav",
            "sounds/Ab.wav",
        ],
        bufferLoadCompleted
    );

    bufferLoader.load();
}

function setup() {
    textfield = select("#input");
    output = select("#output");
    submit = select("#submit");
    submit.mousePressed(newText);
}

function newText() {
    var s = textfield.value();
    var r = "";
    var words = s.split(r, min);
    var min = function (texto) { return texto.toUpperCase() }
    arrayNotes = [];
    //console.log(words);
    for (i = 0; i < words.length; i++) {
        //console.log("words " + words[i]);

        switch (words[i]) {
            case "A":
                arrayNotes.push(0);
                break;
            case "B":
                arrayNotes.push(1);
                break;
            case "C":
                arrayNotes.push(2);
                break;
            case "D":
                arrayNotes.push(3);
                break;
            case "E":
                arrayNotes.push(4);
                break;
            case "F":
                arrayNotes.push(5);
                break;
            case "G":
                arrayNotes.push(6);
                break;
            case "H":
                arrayNotes.push(7);
                break;
            case "I":
                arrayNotes.push(0);
                break;
            case "J":
                arrayNotes.push(1);
                break;
            case "K":
                arrayNotes.push(2);
                break;
            case "L":
                arrayNotes.push(3);
                break;
            case "M":
                arrayNotes.push(4);
                break;
            case "N":
                arrayNotes.push(5);
                break;
            case "Ñ":
                arrayNotes.push(6);
                break;
            case "O":
                arrayNotes.push(7);
                break;
            case "P":
                arrayNotes.push(0);
                break;
            case "Q":
                arrayNotes.push(1);
                break;
            case "R":
                arrayNotes.push(2);
                break;
            case "S":
                arrayNotes.push(3);
                break;
            case "T":
                arrayNotes.push(4);
                break;
            case "U":
                arrayNotes.push(5);
                break;
            case "V":
                arrayNotes.push(6);
                break;
            case "W":
                arrayNotes.push(7);
                break;
            case "X":
                arrayNotes.push(0);
                break;
            case "Y":
                arrayNotes.push(1);
                break;
            case "Z":
                arrayNotes.push(2);
                break;
        }
    }
    startPlayingRhythm1(bufferLoader.bufferList);
}

function playSound(buffer, time) {
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(time);
}

// PLAY SOUND & R
function startPlayingRhythm1(bufferList) {

    var startTime = context.currentTime + 0.100;

    var tempo = 90;
    var quarterNoteTime = 60 / tempo;

    //playSound(bufferList[arrayNotes[0]], startTime);

    switch (arrayNotes.length) {
        case 3:
            playSound(bufferList[arrayNotes[0]], startTime);
            playSound(bufferList[arrayNotes[1]], startTime + 0.25 * quarterNoteTime);
            playSound(bufferList[arrayNotes[2]], startTime + 0.5 * quarterNoteTime);
            break;
        case 4:
            playSound(bufferList[arrayNotes[0]], startTime);
            playSound(bufferList[arrayNotes[1]], startTime + 0.25 * quarterNoteTime);
            playSound(bufferList[arrayNotes[2]], startTime + 0.5 * quarterNoteTime);
            playSound(bufferList[arrayNotes[3]], startTime + 1 * quarterNoteTime);
            break;
        case 5:
            playSound(bufferList[arrayNotes[0]], startTime);
            playSound(bufferList[arrayNotes[1]], startTime + 0.5 * quarterNoteTime);
            playSound(bufferList[arrayNotes[2]], startTime + 0.75 * quarterNoteTime);
            playSound(bufferList[arrayNotes[3]], startTime + 1 * quarterNoteTime);
            playSound(bufferList[arrayNotes[4]], startTime + 1.5 * quarterNoteTime);
            break;
        case 6:
            playSound(bufferList[arrayNotes[0]], startTime);
            playSound(bufferList[arrayNotes[1]], startTime + 0.25 * quarterNoteTime);
            playSound(bufferList[arrayNotes[2]], startTime + 0.5 * quarterNoteTime);
            playSound(bufferList[arrayNotes[3]], startTime + 0.75 * quarterNoteTime);
            playSound(bufferList[arrayNotes[4]], startTime + 1 * quarterNoteTime);
            playSound(bufferList[arrayNotes[5]], startTime + 1.5 * quarterNoteTime);
            break;
        case 7:
            playSound(bufferList[arrayNotes[0]], startTime);
            playSound(bufferList[arrayNotes[1]], startTime + 0.25 * quarterNoteTime);
            playSound(bufferList[arrayNotes[2]], startTime + 0.75 * quarterNoteTime);
            playSound(bufferList[arrayNotes[3]], startTime + 1 * quarterNoteTime);
            playSound(bufferList[arrayNotes[4]], startTime + 1.25 * quarterNoteTime);
            playSound(bufferList[arrayNotes[5]], startTime + 1.5 * quarterNoteTime);
            playSound(bufferList[arrayNotes[6]], startTime + 1.75 * quarterNoteTime);
            break;
        case 8:
            playSound(bufferList[arrayNotes[0]], startTime);
            playSound(bufferList[arrayNotes[1]], startTime + 0.25 * quarterNoteTime);
            playSound(bufferList[arrayNotes[2]], startTime + 0.5 * quarterNoteTime);
            playSound(bufferList[arrayNotes[3]], startTime + 1 * quarterNoteTime);
            playSound(bufferList[arrayNotes[4]], startTime + 1.5 * quarterNoteTime);
            playSound(bufferList[arrayNotes[5]], startTime + 2 * quarterNoteTime);
            playSound(bufferList[arrayNotes[6]], startTime + 2.25 * quarterNoteTime);
            playSound(bufferList[arrayNotes[7]], startTime + 2.5 * quarterNoteTime);
            break;
        case 9:
            playSound(bufferList[arrayNotes[0]], startTime);
            playSound(bufferList[arrayNotes[1]], startTime + 0.25 * quarterNoteTime);
            playSound(bufferList[arrayNotes[2]], startTime + 0.75 * quarterNoteTime);
            playSound(bufferList[arrayNotes[3]], startTime + 1.75 * quarterNoteTime);
            playSound(bufferList[arrayNotes[4]], startTime + 2.25 * quarterNoteTime);
            playSound(bufferList[arrayNotes[5]], startTime + 2.75 * quarterNoteTime);
            playSound(bufferList[arrayNotes[6]], startTime + 3 * quarterNoteTime);
            playSound(bufferList[arrayNotes[7]], startTime + 3.25 * quarterNoteTime);
            playSound(bufferList[arrayNotes[8]], startTime + 3.5 * quarterNoteTime);
            break;
        case 10:
            playSound(bufferList[arrayNotes[0]], startTime);
            playSound(bufferList[arrayNotes[1]], startTime + 0.25 * quarterNoteTime);
            playSound(bufferList[arrayNotes[2]], startTime + 0.5 * quarterNoteTime);
            playSound(bufferList[arrayNotes[3]], startTime + 1 * quarterNoteTime);
            playSound(bufferList[arrayNotes[4]], startTime + 1.5 * quarterNoteTime);
            playSound(bufferList[arrayNotes[5]], startTime + 1.75 * quarterNoteTime);
            playSound(bufferList[arrayNotes[6]], startTime + 2.25 * quarterNoteTime);
            playSound(bufferList[arrayNotes[7]], startTime + 2.58 * quarterNoteTime);
            playSound(bufferList[arrayNotes[8]], startTime + 2.91 * quarterNoteTime);
            playSound(bufferList[arrayNotes[9]], startTime + 3.24 * quarterNoteTime);
            break;
    }

}

//Ending Code

function bufferLoadCompleted() {
}
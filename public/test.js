document.addEventListener('keypress', logKey);

function logKey(e) {
    // On B key press
    if (e.keyCode == 98) {
        // Toggle blink
        console.log("!!!!!!!!")
    } else if (e.keyCode == 97) {
        // Toggle blink
    }
}
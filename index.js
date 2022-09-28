function playSound(listner) {
    switch (listner) {
        case "w":
            var tom4Sound = new Audio("sounds/tom-4.mp3");
            tom4Sound.play();
            break;
        case "a":
            var tom3Sound = new Audio("sounds/tom-3.mp3");
            tom3Sound.play();
            break;
        case "s":
            var tom2Sound = new Audio("sounds/tom-2.mp3");
            tom2Sound.play();
            break;
        case "d":
            var tom1Sound = new Audio("sounds/tom-1.mp3");
            tom1Sound.play();
            break;
        case "j":
            var snareSound = new Audio("sounds/snare.mp3");
            snareSound.play();
            break;
        case "k":
            var kickSound = new Audio("sounds/kick-bass.mp3");
            kickSound.play();
            break;
        case "l":
            var crashSound = new Audio("sounds/crash.mp3");
            crashSound.play();
            break;
        
        default:
            break;
    }
}


for (var i=0; i<7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML
        playSound(buttonInnerHtml)
    })
}


document.addEventListener("keydown", function (event) {
    playSound(event.key)    
})


document.addEventListener("keydown", function(event){
    var keyPress = event.key;
    makeSound(keyPress);
    buttonAnimaition(keyPress);
});

var buttons = document.querySelectorAll("button");
for (i=0; i=>buttons.length; i++) {
    buttons[i].addEventListener("click",function () {

        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimaition(buttonInnerHtml);
    })
}


function makeSound(input) {
    switch (input) {
        case "w":
            var tomOne = new Audio("./sounds/tom-1.mp3");
            tomOne.play();
            break;
        
        case "a":
            var tomTwo = new Audio("./sounds/tom-2.mp3");
            tomTwo.play();
            break;
            
        case "s":
            var tomThree = new Audio("./sounds/tom-3.mp3");
            tomThree.play();
            break;

        case "d":
            var tomFour = new Audio("./sounds/tom-4.mp3");
            tomFour.play();
            break;
        
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break; 
        
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            break;
    } 
}

function buttonAnimaition(input) {

    var buttonPressed = document.querySelector("." + input);
    buttonPressed.classList.add("pressed");
    setTimeout(function(){
        buttonPressed.classList.remove("pressed");
    }, 100);
}
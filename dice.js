document.getElementById("button").onclick = function () {

    let number = Math.ceil(Math.random() * 6);

    switch (number) {
        case 1:
            document.getElementById("diceImg").src = "src/dice-six-faces-one.png";
            break;

        case 2:
            document.getElementById("diceImg").src = "src/dice-six-faces-two.png";
            break;

        case 3:
            document.getElementById("diceImg").src = "src/dice-six-faces-three.png";
            break;

        case 4:
            document.getElementById("diceImg").src = "src/dice-six-faces-four.png";
            break;

        case 5:
            document.getElementById("diceImg").src = "src/dice-six-faces-five.png";
            break;

        case 6:
            document.getElementById("diceImg").src = "src/dice-six-faces-six.png";
            break;
            
        default:
            document.getElementById("diceImg").src = "src/dice-six-faces-one.png";

    }
}
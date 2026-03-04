let input = prompt("Press Enter to roll the dice")

let again = true

while (again) {

    let playernumber = Math.floor(Math.random() * 6) + 1
    let pcnumber = Math.floor(Math.random() * 6) + 1

    console.log("Your Number is " + playernumber);
    console.log("The number of the enemie is " + pcnumber);

    if (playernumber < pcnumber) {
        console.log("You lose");

    } else console.log("You win");

    let input2 = prompt("Again? (Yes/No)").toLocaleLowerCase()

    if (input2 !== "yes") {
        again = false
    }
}

console.log("Game ends");


function generate() {
    let number1 = parseInt(document.getElementById("field1").value);
    let number2 = parseInt(document.getElementById("field2").value);

    console.log(number1 + "; " + number2);

    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById("randomNumber").innerHTML = "Bitte Zahlen eingeben";
        return;
    }

    let amountOfRandomNumber = number2 - number1 + 1;

    let randomnumber = Math.floor(Math.random() * amountOfRandomNumber) + number1;

    document.getElementById("randomNumber").innerHTML = randomnumber;
}
/*
function generate() {
    let number1 = document.getElementById("field1").ariaValueMin;
    let number2 = document.getElementById("field2").ariaValueMax;
    console.log(number1 + "; " + number2);

    let amountOfRandomNumber = parseInt(number2) - parseInt(number1) + 1

    let randomnumber = Math.floor(Math.random() * 10)
    document.getElementById("randomnumber").innerHTML = randomnumber

}1*/
function generate() {
    let number1 = document.getElementById("field1").ariaValueMin;
    let number2 = document.getElementById("field2").ariaValueMax;
    console.log(number1 + "; " + number2);



    let randomnumber = Math.floor(Math.random() * 10)
    console.log(randomnumber);

}
let number1 = prompt("Gib mir die erste Zahl")
let number2 = prompt("Gib mir die zweite Zahl")

let number1r = parseInt(number1)
let number2r = parseInt(number2)

let selection = prompt("1=Add. 2=Sub. 3=Multi. 4=Div."+ " "+"Gib eine Rechenart an")


if (selection == 1 ) {
    let result = number1r + number2r
    console.log(result);
    
}else if (selection == 2) {
    let result = number1r - number2r
    console.log(result);
    
}else if (selection == 3) {
   let result = number1r * number2r
   console.log(result);

}else if (selection == 4) {
   let result = number1r / number2r
   console.log(result);

}else console.log("Keine gültige Rechnung")

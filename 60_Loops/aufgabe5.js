let input3 = Number(prompt("Gib mir eine Zahl"));
let input2 = Number(prompt("Gib mir eine zweite Zahl"));

let sum = 0;

for (let i = input3; i <= input2; i++) {
    sum = sum + i;
}

console.log(sum);
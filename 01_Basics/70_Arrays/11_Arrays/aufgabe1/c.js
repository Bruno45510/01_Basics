let array = [4, 1, 2, 3]

array.push(17)
array.push(199)

let sum = 0

for (let i = 0; i < array.length; i++) {
    sum += array[i];

}

let av = sum / (array.length)
console.log(av);

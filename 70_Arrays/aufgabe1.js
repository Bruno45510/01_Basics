let a = Math.floor(Math.random() * 10)
let b = Math.floor(Math.random() * 10)
let c = Math.floor(Math.random() * 10)
let d = Math.floor(Math.random() * 10)
let e = Math.floor(Math.random() * 10)
let f = Math.floor(Math.random() * 10)
let g = Math.floor(Math.random() * 10)

let array = [a, b, c, d, e, f, g,]

let sum = 0

for (let i = 0; i < array.length; i++) {
    sum += array[i]

}

console.log(sum);

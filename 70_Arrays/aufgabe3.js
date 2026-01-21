let array = [6, 7, 67]

let largest = array[0]

for (let i = 0; i < array.length; i++) {
    if (array[i] < largest) {
        continue
    } else largest = array[i]


}

console.log(largest);

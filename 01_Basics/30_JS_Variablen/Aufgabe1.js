let banana = "banana"
let apple =  "apple"

let bananapriceperkilo = 2.14
let applepriceperkilo = 3.43

let appleweight = 0.34 
let bananaweight = 0.22 

let applespriceperkilo = 1 / appleweight
let bananaspriceperkilo = 1 / bananaweight

let appleprice = applepriceperkilo / applespriceperkilo
let bananaprice = bananapriceperkilo / bananaspriceperkilo

let pricefor8apples = appleprice * 8
let pricefor17bananas = bananaprice * 17
let pricefor1000apples = appleprice * 1000
let pricefor1000bananas = bananaprice * 1000

console.log(" 8 Apples cost" + " " + pricefor8apples + " " + "euros");
console.log(" 17 Bananas cost" + " " + pricefor17bananas + " " + "euros");
console.log(" 1 ton apples cost" + " " + pricefor1000apples + " " + "euros");
console.log(" 1 ton bananas cost" + " " + pricefor1000bananas + " " + "euros");





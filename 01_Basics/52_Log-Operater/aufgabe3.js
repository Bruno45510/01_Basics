let grade = Math.floor(Math.random()*100)
let attendance = Math.floor(Math.random()*100)
let extraCredit = Math.floor(Math.random()*10)

if (80 == grade || 80 < grade && (90 == attendance || extraCredit == 5 || extraCredit >= 5)) {
    console.log("Eligible for advanced exam.");
    
}else console.log("Not eligible for advanced exam.");

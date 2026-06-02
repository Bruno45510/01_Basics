document.getElementById("button").addEventListener("click", function () {
    const element = document.getElementById("content");
    element.innerHTML = "yessisrski";
});

document.getElementById("add").addEventListener("click", function () {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;

    if (isNaN(value1) || isNaN(value2)) {
        alert("invalid numbers");
    } else {
        const result = parseFloat(value1) + parseFloat(value2);
        document.getElementById("result").innerHTML = "Result: " + result;
    }

    console.log(value1);
});
document.getElementById("add1").addEventListener("click", function () {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;

    if (isNaN(value1) || isNaN(value2)) {
        alert("invalid numbers");
    } else {
        const result = parseFloat(value1) - parseFloat(value2);
        document.getElementById("result").innerHTML = "Result: " + result;
    }

    console.log(value1);
});
document.getElementById("add2").addEventListener("click", function () {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;

    if (isNaN(value1) || isNaN(value2)) {
        alert("invalid numbers");
    } else {
        const result = parseFloat(value1) * parseFloat(value2);
        document.getElementById("result").innerHTML = "Result: " + result;
    }

    console.log(value1);
});
document.getElementById("add3").addEventListener("click", function () {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;

    if (isNaN(value1) || isNaN(value2)) {
        alert("invalid numbers");
    } else {
        const result = parseFloat(value1) / parseFloat(value2);
        document.getElementById("result").innerHTML = "Result: " + result;
    }

    console.log(value1);
});
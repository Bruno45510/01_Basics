let todos = [
    { id: 1, title: "putzten", isDone: false },
    { id: 2, title: "kochen", isDone: true },
    { id: 3, title: "lego spielen", isDone: false },
    { id: 4, title: "ioannis", isDone: false },
]

document.getElementById("input").addEventListener("change", function (event) {
    console.log(event.target.value);
    todos.push({ id: 5, title: event.target.value, isDone: false })
})
function printtask() {
    let html = ""
    todos.forEach(element => {
        html += "<div>" + element.title + " - " + element.isDone + "</div>"
    });

    document.getElementById("todos").innerHTML = html;

}

printtask();
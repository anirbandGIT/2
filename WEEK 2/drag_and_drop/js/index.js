var element;
function allowDrag(event) {
    event.preventDefault();
}
function drag(event) {
    element = event.target.id;
}
function drop(event) {
    event.target.append(document.getElementById(element));
}
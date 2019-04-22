function myClick() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://restcountries.eu/rest/v2/all";

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            myFunction(response);
            console.log(response[0]);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function myFunction(arr) {
    console.log(arr[0])
    var outCol1 = "";
    // var outCol2 = "";
    for (let i = 0; i < arr.length; i = i + 2) {
        outCol1 += '<li style="list-style-type: none">' + "CountryName:" + arr[i].name + "<br>"
            + "Capital:" + arr[i].capital + "<br>" + "Region:" + arr[i].region
            + "<br>" + '<button class="accordion" onclick="changeDisplay(this.parentNode)">Currencies:</button>' +
            '<div class="panel">' + arr[i].currencies[0].name + "(" + arr[i].currencies[0].symbol + ")" + '</div>' + "<br>" +
            "Population:" + '<input type="text" value="' + arr[i].population + '" disabled>'
            + '<button type="button" onclick="editPop(this.parentNode)">EDIT</button>' + '<button type="button" onclick="deleteList(this.parentNode)">X</button>'
            + '<img src="' + arr[i].flag + '" style="height: 150px; width: 250px;"></img>'
            + "</li>" + "</br>";

        // outCol2 += '<li style="list-style-type: none">' + '<img src="' + arr[i].flag + '" style="height: 72px; width: 150px;"></img>' + "</li>";
    }
    document.getElementById("col1").innerHTML = outCol1;
    // document.getElementById("col2").innerHTML = outCol2;
}

function clearAll() {
    document.getElementById("col1").innerHTML = "";
    document.getElementById("col2").innerHTML = "";
}

function changeDisplay(value) {
    console.log("value",value);
    console.log(value.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling);
    let panel = value.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}

function editPop(value) {
    console.log(value);
    console.log(value.lastChild);
    console.log(value.lastChild.previousSibling.previousSibling);
    console.log(value.lastChild.previousSibling.previousSibling.previousSibling);
    let box = value.lastChild.previousSibling.previousSibling.previousSibling;
    if (box.disabled == true)
        box.disabled = false;
    else
        box.disabled = true;
}

function deleteList(value) {
    console.log(value);
    console.log(value.parentNode);
    value.parentNode.removeChild(value);
}

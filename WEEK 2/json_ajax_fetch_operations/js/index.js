function myClick() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/posts";

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
    var outCol2 = "";
    for (let i = 0; i < arr.length; i = i + 2) {
        outCol1 += '<li style="list-style-type: none">' + "USER ID:" + arr[i].userId + "<br>" + "ID:" + arr[i].id + "<br>" + "TITLE:" + arr[i].title + "<br>" + "BODY:" + arr[i].body + "</li>" + "</br>";
        outCol2 += '<li style="list-style-type: none">' + "USER ID:" + arr[i + 1].userId + "<br>" + "ID:" + arr[i + 1].id + "<br>" + "TITLE:" + arr[i + 1].title + "<br>" + "BODY:" + arr[i + 1].body + "</li>" + "</br>";
    }
    document.getElementById("col1").innerHTML = outCol1;
    document.getElementById("col2").innerHTML = outCol2;
}

function clearAll() {
    document.getElementById("col1").innerHTML = "";
    document.getElementById("col2").innerHTML = "";
}
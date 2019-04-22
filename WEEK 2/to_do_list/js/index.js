//CREATE TASK
function newTask() {
  var li = document.createElement("li"); //GET li ELEMENT AND STORE IN VARIABLE
  var inputValue = document.getElementById("myInput").value; //GET INPUT VALUE
  var t;
  var block = true;
  if (inputValue == "") {
    alert("TASK CANNOT BE EMPTY"); //EMPTY INPUT VALUE RESULT IN ALERT
  } else {
    document.getElementById("myUl").appendChild(li); //ELSE CREATE li in ul
    // t = document.createTextNode(inputValue);             //CREATE TEXT NODE t
    var textBox = document.createElement("input");
    textBox.setAttribute("value", inputValue);
    textBox.disabled = true;
    li.appendChild(textBox); // APPEND <input value=...> IN li
    //document.body.appendchild(li) NOT NEEDED
  }

  document.getElementById("myInput").value = ""; //RESET THE TASK INPUT

  var btn1 = document.createElement("BUTTON");
  var txt1 = document.createTextNode("EDIT");
  // btn1.className = "edit";
  btn1.appendChild(txt1);
  li.appendChild(btn1);

  var btn2 = document.createElement("BUTTON");
  // var txt2 = document.createTextNode("\u00D7");
  var txt2 = document.createTextNode("\u2714");
  // btn2.className = "close";
  btn2.appendChild(txt2);
  li.appendChild(btn2);

  btn1.onclick = function() {
    if (block == true) {
      textBox.disabled = false;
      block = false;
      newInputValue = document.getElementsByTagName("li").value;
    } else if (block == false) {
      textBox.setAttribute("value", newInputValue);
      textBox.disabled = true;
      block = true;
    }
  };

  btn2.onclick = function() {
    li.parentNode.removeChild(li);
  };
}

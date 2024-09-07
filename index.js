// ---Modal 1---

// Get the modal
var modal1 = document.getElementById("proj1");

// Get the button that opens the modal
var btn1 = document.getElementById("modal1");


// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// ---Modal 2---

// Get the modal
var modal2 = document.getElementById("proj2");

// Get the button that opens the modal
var btn2 = document.getElementById("modal2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
  }

// ---Modal 3---

// Get the modal
var modal3 = document.getElementById("proj3");

// Get the button that opens the modal
var btn3 = document.getElementById("modal3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on the button, open the modal
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modal3.style.display = "none";
  }

  function colorChange(color){
    document.body.style.background = color;
  }

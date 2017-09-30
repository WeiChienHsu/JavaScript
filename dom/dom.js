var first = document.getElementById("first");
first.style.border = "2px pink solid";

var second = document.getElementsByClassName("special");
second[1].classList.add("large");
// Give a class to an element

var third = document.getElementsByTagName("p");
third[2].style.color = "purple";

var forth = document.querySelector("#last");
forth.style.color = "green";

forth.textContent = "ABC";
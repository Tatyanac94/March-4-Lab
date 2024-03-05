document.getElementById("myH1").addEventListener("mouseover", mouseOver);
function mouseOver() {
  document.getElementById("myH1").style.color = "green";
}

// I also added another event listener called mouseOut so it can change back to the color black when the mouse leaves the h1 element.

document.getElementById("myH1").addEventListener("mouseout", mouseOut);
function mouseOut() {
  document.getElementById("myH1").style.color = "black";
}
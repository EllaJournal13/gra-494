//Display of the Navigation on mobile//
function myFunction() {
var x = document.getElementById("myLinks");
var y = document.getElementById("bars");
if (x.style.display === "block") {
  x.style.display = "none";
  y.classList.remove("active");
} else {
  x.style.display = "block";
  y.classList.add("active");
  }
}

//Display random banner//
// $( document ).ready(function() {
//   var bgArray = ['img/random/random1.jpg','img/random/random2.jpg','img/random/random3.jpg','img/random/random4.jpg','img/random/random5.jpg','img/random/random6.jpg'],
//   selectBG = bgArray[Math.floor(Math.random() * bgArray.length)];

// $('#random').css('background', 'url(' + selectBG + ')')
// });
  
$( document ).ready(function() {
  var bgColorArray = ['imgs/001.jpg','imgs/002.jpg', 'imgs/003.jpg', 'imgs/004.jpg', 'imgs/005.jpg'],
  selectBG = bgColorArray[Math.floor(Math.random() * bgColorArray.length)];

$('#random-shit').css('background', 'url(' + selectBG + ')')
  });

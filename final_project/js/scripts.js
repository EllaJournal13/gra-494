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
  
// $( document ).ready(function() {
//   var bgColorArray = ['imgs/001.jpg','imgs/002.jpg', 'imgs/003.jpg', 'imgs/004.jpg', 'imgs/005.jpg'],
//   selectBG = bgColorArray[Math.floor(Math.random() * bgColorArray.length)];

// $('#random-shit').css('background', 'url(' + selectBG + ')')
// });
  
document.querySelector('.video1').onclick = () => {
  document.querySelector('.video1__popup').style.display = 'block';
    document.querySelector('.video1__popup video').src = vid.getAttribute('src');
}

document.querySelector('.video1__popup span').onclick = () => {
	document.querySelector('.video1__popup').style.display = 'none';
}

document.querySelector('.video2').onclick = () => {
  document.querySelector('.video2__popup').style.display = 'block';
    document.querySelector('.video1__popup video').src = vid.getAttribute('src');
}

document.querySelector('.video2__popup span').onclick = () => {
	document.querySelector('.video2__popup').style.display = 'none';
}

document.querySelector('.video3').onclick = () => {
  document.querySelector('.video3__popup').style.display = 'block';
    document.querySelector('.video3__popup video').src = vid.getAttribute('src');
}

document.querySelector('.video3__popup span').onclick = () => {
	document.querySelector('.video3__popup').style.display = 'none';
}


//Contact Form

document.addEventListener('DOMContentLoaded', () => {
  const submit = document.querySelector('#submit');
  const closeBtn = document.querySelector('.close');
  const contactformoverlay = document.querySelector('.contact-form__overlay');

  submit.addEventListener('click', () => {
    contactformoverlay.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    contactformoverlay.style.display = 'none';
  });

});


$("#myForm").submit(function(e) {
  e.preventDefault();
});



function displayText(){
  // Selecting the input element and get its value --- FIRST NAME
  var text = document.getElementById("fname").value;

  // Displaying the value
  var output = document.getElementById("first-name");
  output.innerHTML = text;



  // Selecting the input element and get its value --- LAST NAME
  var text2 = document.getElementById("lname").value;

  // Displaying the value
  var output2 = document.getElementById("last-name");
  output2.innerHTML = text2;



  // Selecting the input element and get its value --- MESSAGE
  var text3 = document.getElementById("message").value;

  // Displaying the value
  var output3 = document.getElementById("message-content");
  output3.innerHTML = text3;


}

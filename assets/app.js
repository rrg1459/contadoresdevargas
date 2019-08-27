// alert ("la resolusion de la pantall es: " + screen.width + " x " + screen.height)

var slideIndex = 1;

var myTimer;

window.addEventListener("load",function() {
		showSlides(slideIndex);
		myTimer = setInterval(function(){plusSlides(1)}, 4000);
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
	clearInterval(myTimer);
	if (n < 0){
		showSlides(slideIndex -= 1);
	} else {
	 showSlides(slideIndex += 1); 
	}
	if (n === -1){
		myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
	} else {
		myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
	}
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
	clearInterval(myTimer);
	myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
	showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
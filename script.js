var slideNum = 1;
showSlides(slideNum);

// Next/previous controls
let changeSlide = (n) => {showSlides(slideNum += n)};

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideNum = 1}
  if (n < 1) {slideNum = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideNum-1].style.display = "block";
  
}

function myFunction() {
  var x = document.getElementById("nav-div");
  if (x.className === "nav-div") {
    x.className += " responsive";
  } else {
    x.className = "nav-div";
  }
}

var dots;

    dots=[];
    var dotsContainer=document.getElementById("dotsContainer");

    for(var i=0; i<5; i++) {
        var dot=document.createElement ("span")
        dot.classList.add("dots")
        dotsContainer.append(dot);
        dots.push(dot);

    }


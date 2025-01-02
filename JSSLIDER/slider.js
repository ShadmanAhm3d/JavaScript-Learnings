
const slides = document.querySelectorAll(".slides img");
console.log(slides);

let slideIndex = 0;




document.addEventListener("DOMcontentLoaded",initializeSlide())

function initializeSlide(){
  //basically show first slide
  slides[slideIndex].classList.add("displaySlide")
  const IntervalId = setInterval(nextSlide,5000);
}


function showSlide(index){

  if(index >= slides.length){
    slideIndex = 0;
  }else if (index < 0){
    slideIndex = slides.length-1;
  }

  slides.forEach(slide => {
    slide.classList.remove("displaySlide");
  });

  slides[slideIndex].classList.add("displaySlide");

}

function nextSlide(){
  slideIndex++;
  showSlide(slideIndex)
}

function prevSlide(){
  slideIndex--;
  showSlide(slideIndex)
}

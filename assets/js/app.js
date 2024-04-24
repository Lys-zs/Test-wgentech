const initSlider = () => {
    const slideButons = document.querySelectorAll('.slide__btn');
    const slideItem = document.querySelector(".collection__content2");
   
    slideButons.forEach( button  => {
        button.addEventListener('click', () => {
            const direction = button.id === "prev" ?  -1 : 1;
            const scrollAmount = slideItem.clientWidth * direction / 2;
            slideItem.scrollBy({ left: scrollAmount, behavior: "smooth"})
        })
    })

}

window.addEventListener('load', initSlider);



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



document.addEventListener("DOMContentLoaded", function() {
  const quantityInput = document.querySelector('.quantity-selector__input');
  const decreaseButton = document.querySelector('.minus');
  const increaseButton = document.querySelector('.plus');

  decreaseButton.addEventListener('click', function() {
    if (quantityInput.value > 1) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
    }
  });

  increaseButton.addEventListener('click', function() {
    quantityInput.value = parseInt(quantityInput.value) + 1;
  });
});

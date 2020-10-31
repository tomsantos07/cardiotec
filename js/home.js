var swiper = new Swiper('.swiper-container', {
  slidesPerview:5,
  spaceBetween:30,
  // centeredSlide:true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
  },
})
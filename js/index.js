document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 400,
    spaceBetween: 100,
    // If we need pagination
    pagination: {
      el: '.swiper1 .swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  })

  const prevButton = document.querySelector('.slider-prev')
  const nextButton = document.querySelector('.slider-next')
  const slides = document.querySelectorAll(
    '.brands__list-slider > .brands__list',
  )
  const dots = document.querySelectorAll('.slider__dots-item')
  let currentSlide = 0

  function updateSlide() {
    const offset = -currentSlide * 100
    document.querySelector(
      '.brands__list-slider',
    ).style.transform = `translateX(${offset}%)`
    dots.forEach((dot) => dot.classList.remove('active'))
    dots[currentSlide].classList.add('active')
  }

  prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--
    } else {
      currentSlide = slides.length - 1
    }
    updateSlide()
  })

  nextButton.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
      currentSlide++
    } else {
      currentSlide = 0
    }
    updateSlide()
  })

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index
      updateSlide()
    })
  })

  updateSlide() // Initial call to set up the first slide
})

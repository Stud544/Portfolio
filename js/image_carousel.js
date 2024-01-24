document.addEventListener("DOMContentLoaded", function() {
    const swiperContainer = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  
    // Load JSON data
    fetch("json/images.json")
      .then(response => response.json())
      .then(data => buildCarousel(data, swiperContainer));
  });
  
  function buildCarousel(images, swiperContainer) {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
  
    images.forEach(image => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
  
      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.description;
  
      const description = document.createElement('div');
      description.classList.add('swiper-slide-description');
      description.textContent = image.description;
  
      slide.appendChild(img);
      slide.appendChild(description);
  
      swiperWrapper.appendChild(slide);
    });
  
    swiperContainer.update(); // Update swiper to reflect the new slides
  }
  
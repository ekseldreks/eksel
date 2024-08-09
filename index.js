/* Menu script for mobile */
const hamburgerMenu = document.getElementById('navdropdown');
const navMenu = document.getElementsByClassName('navmenu')[0];

hamburgerMenu.addEventListener('click', function() {
  navMenu.classList.toggle('show');
  hamburgerMenu.classList.toggle('open');
});

/* Auto slider in hero*/
document.addEventListener('DOMContentLoaded', () => {
  const images = [
    'assets/images/hero-section-slide-food-1.png',
    'assets/images/hero-section-slide-food-2.png',
    'assets/images/hero-section-slide-food-3.png',
    'assets/images/hero-section-slide-food-4.png'
  ];
  
  let currentIndex = 0;
  const imageElement = document.getElementById('slider-image');

  function changeImage() {
    imageElement.classList.remove('active');
    
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length;
      imageElement.src = images[currentIndex];
      imageElement.classList.add('active');
    }, 500); // This timeout should match the transition duration
  }

  imageElement.classList.add('active');
  
  setInterval(changeImage, 5000);
});
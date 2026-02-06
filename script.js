// Pink Pony Plunge - Site JS
// Mobile nav toggle + smooth scroll

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  // Toggle mobile menu
  hamburger.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
  });

  // Close mobile menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      mobileMenu.classList.remove('open');
    }
  });

  // Shrink navbar on scroll
  var navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });
});
